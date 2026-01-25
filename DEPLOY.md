# Deployment Guide and Troubleshooting

## 📦 Deployment Options

This project can be deployed to various platforms including Vercel, Netlify, or any Node.js hosting service.

## 📋 Logs Comuns no Easypanel

### Logs Normais (Não são erros)

Se você ver estas mensagens nos logs, são **normais** e não indicam problemas:

```
- info Loaded env from .env
- info Creating an optimized production build
- info Compiled successfully
- ready - started server on 0.0.0.0:3000
```

### Possíveis Warnings (Geralmente inofensivos)

1. **Browserslist outdated:**
   ```
   Browserslist: caniuse-lite is outdated
   ```
   - **Solução:** Não é crítico, mas pode atualizar com `npx browserslist@latest --update-db` no build

2. **Telemetry warnings:**
   ```
   NEXT_TELEMETRY_DISABLED is set
   ```
   - **Solução:** Isso é intencional e não é um problema

3. **Port/Hostname warnings:**
   ```
   Server listening on 0.0.0.0:3000
   ```
   - **Solução:** Normal, o servidor está escutando corretamente

### Erros que Precisam de Atenção

Se você ver estes erros, precisam ser corrigidos:

1. **Erro do Sharp (RESOLVIDO):**
   ```
   Error: 'sharp' is required to be installed in standalone mode
   ```
   - **Solução:** ✅ Já corrigido! O `sharp` foi adicionado como dependência e o Dockerfile foi atualizado para incluir as dependências nativas necessárias.

2. **Erro de variáveis de ambiente:**
   ```
   Error: SMTP_USER is not defined
   ```
   - **Solução:** Configure todas as variáveis de ambiente no Easypanel

3. **Erro de porta:**
   ```
   Error: Port 3000 is already in use
   ```
   - **Solução:** Verifique se a porta está configurada corretamente no Easypanel

4. **Erro de build:**
   ```
   Error: Build failed
   ```
   - **Solução:** Verifique os logs de build no Easypanel

## 🔍 Como Verificar se Está Tudo OK

1. **Site carrega?** ✅ Sim, está funcionando
2. **Formulário funciona?** Teste enviar um formulário
3. **API funciona?** Verifique se `/api/send-email` responde

## 🛠️ Troubleshooting

### Site não carrega
- Verifique se o container está rodando no Easypanel
- Verifique os logs de erro
- Confirme que a porta 3000 está configurada

### Formulário não envia e-mail
- Verifique se todas as variáveis SMTP estão configuradas
- Teste as credenciais SMTP
- Verifique os logs para erros de autenticação

### Build falha
- Verifique se o Dockerfile está correto
- Confirme que todas as dependências estão no package.json
- Verifique se o yarn.lock está commitado

## 📞 Próximos Passos

Se você ver algum erro específico nos logs, compartilhe a mensagem completa para que eu possa ajudar a resolver!

