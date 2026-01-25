# Landing Page - Portfolio Project

Landing page moderna desenvolvida com Next.js, React e TypeScript. Projeto de portfólio demonstrando habilidades em desenvolvimento front-end.

## 🚀 Getting Started

### Pré-requisitos

- Node.js 20 ou superior
- Yarn (ou npm/pnpm)

### Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd landing-page-portfolio
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-ou-app-password
SMTP_FROM=seu-email@gmail.com
EMAIL_TO=destino@exemplo.com
```

4. Execute o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Build para Produção

```bash
yarn build
yarn start
```

## 🐳 Deploy no Easypanel

Este projeto está configurado para deploy no Easypanel usando Docker.

### Passos para Deploy:

1. **Envie o código para o GitHub:**

   ```bash
   git add .
   git commit -m "Preparar projeto para deploy"
   git push origin main
   ```

2. **No Easypanel:**

   - Crie um novo projeto
   - Selecione "App" → "Docker"
   - Conecte seu repositório GitHub
   - O Easypanel detectará automaticamente o `Dockerfile`

3. **Configure as variáveis de ambiente:**
   No painel do Easypanel, adicione as seguintes variáveis de ambiente:

   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `EMAIL_TO`
   - `PORT` (opcional, padrão: 3000)

4. **Configurações recomendadas:**

   - **Porta:** 3000
   - **Build Command:** (deixar vazio, o Dockerfile cuida disso)
   - **Start Command:** (deixar vazio, o Dockerfile cuida disso)

5. **Deploy:**
   - Clique em "Deploy" e aguarde o build
   - O Easypanel construirá a imagem Docker e iniciará o container

### Variáveis de Ambiente Necessárias

| Variável    | Descrição             | Exemplo               |
| ----------- | --------------------- | --------------------- |
| `SMTP_HOST` | Servidor SMTP         | `smtp.gmail.com`      |
| `SMTP_PORT` | Porta SMTP            | `587`                 |
| `SMTP_USER` | Usuário do e-mail     | `seu-email@gmail.com` |
| `SMTP_PASS` | Senha ou App Password | `sua-senha`           |
| `SMTP_FROM` | E-mail remetente      | `seu-email@gmail.com` |
| `EMAIL_TO`  | E-mail destinatário   | `destino@exemplo.com` |

## 📝 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria o build de produção
- `yarn start` - Inicia o servidor de produção
- `yarn lint` - Executa o linter

## 🛠️ Tecnologias

- Next.js 13
- React 18
- TypeScript
- Sass
- Nodemailer

## 📄 Licença

Este projeto é de código aberto e está disponível para uso como referência em portfólios.

## 👨‍💻 Autor

Desenvolvido como projeto de portfólio.
