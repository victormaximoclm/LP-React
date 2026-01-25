# Componente Logo - Normalização Visual

## Solução Implementada

Componente simples que usa **Next.js Image** com CSS para normalizar altura visual dos logos sem fetch ou estado compartilhado.

### Por que evita o bug de SVG repetido?

1. **Sem estado compartilhado**: Cada instância do componente é independente, sem `useState` ou `useEffect` que possam compartilhar dados
2. **Sem fetch assíncrono**: Usa diretamente `Image` do Next.js, eliminando race conditions
3. **Props isoladas**: Cada `<Logo src={logo.url} />` recebe seu próprio `src`, garantindo renderização única
4. **Key estável**: Uso de `key={logo.id}` no map garante que React não reutilize componentes incorretamente

## Uso

```tsx
import Logo from "@/components/Logo";

{logos.map((logo) => (
    <li key={logo.id}>
        <Logo
            src={logo.url}
            alt={logo.title}
            visualHeight={56}
        />
    </li>
))}
```

## Especificações Técnicas

- **Props**: `{ src: string; alt?: string; visualHeight?: number }`
- **visualHeight padrão**: `56px`
- **Container**: `height: visualHeight`, `display: flex`, `align-items: center`
- **Image**: `object-fit: contain`, `max-height: 100%`, `width: auto`

## Checklist de Verificação

1. **Verificar SVGs únicos**: Inspecione cada logo no DevTools e confirme que o atributo `src` da tag `<img>` corresponde ao logo esperado
2. **Verificar altura visual**: Todos os logos devem ter aproximadamente a mesma altura visual (56px por padrão)
3. **Verificar proporções**: Nenhum logo deve estar distorcido; todos mantêm suas proporções originais

## Alternativa: SVG Inline com Fetch (Opcional)

Se precisar de controle sobre `viewBox` ou `preserveAspectRatio`, use esta implementação:

```tsx
"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Logo.module.sass";

type LogoProps = {
    src: string;
    alt?: string;
    visualHeight?: number;
};

const Logo = ({ src, alt = "", visualHeight = 56 }: LogoProps) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        // Reset estado ao mudar src
        setSvgContent(null);
        
        // Cancela fetch anterior se existir
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Novo AbortController para este src
        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        if (src.endsWith('.svg')) {
            fetch(src, { signal })
                .then((res) => {
                    if (!res.ok) throw new Error('Failed to fetch');
                    return res.text();
                })
                .then((text) => {
                    if (signal.aborted) return;
                    
                    const cleanedSvg = text
                        .replace(/width=["'][^"']*["']/gi, "")
                        .replace(/height=["'][^"']*["']/gi, "")
                        .replace(/<svg/i, `<svg preserveAspectRatio="xMidYMid meet"`);
                    
                    setSvgContent(cleanedSvg);
                })
                .catch((err) => {
                    if (err.name !== 'AbortError') {
                        console.error(`Erro ao carregar SVG ${src}:`, err);
                    }
                });
        }

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [src]); // Dependência correta: [src]

    if (svgContent) {
        return (
            <div 
                className={styles.logoContainer}
                style={{ height: `${visualHeight}px` }}
            >
                <div
                    className={styles.logoSvg}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                />
            </div>
        );
    }

    // Fallback para Image
    return (
        <div 
            className={styles.logoContainer}
            style={{ height: `${visualHeight}px` }}
        >
            <img
                src={src}
                alt={alt}
                className={styles.logoImage}
                style={{
                    maxHeight: '100%',
                    width: 'auto',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default Logo;
```

### Proteções na versão com fetch:

- **AbortController**: Cancela fetches anteriores ao mudar `src`
- **Reset de estado**: `setSvgContent(null)` ao mudar `src` evita mostrar SVG antigo
- **Dependência correta**: `[src]` no `useEffect` garante re-execução
- **Cleanup**: Abort no unmount previne memory leaks

## Normalização Avançada com getBBox()

Para normalização baseada na área visual útil do SVG:

```tsx
const normalizeByBBox = (svgElement: SVGSVGElement, targetHeight: number) => {
    const bbox = svgElement.getBBox();
    const aspectRatio = bbox.width / bbox.height;
    const scale = targetHeight / bbox.height;
    
    svgElement.setAttribute('width', String(bbox.width * scale));
    svgElement.setAttribute('height', String(targetHeight));
    svgElement.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
};
```

**Quando usar**: Quando SVGs têm muito padding no viewBox e você quer normalizar pela área real do conteúdo.
