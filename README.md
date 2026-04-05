# 🚀 Landing Page com Captura de Leads e Integração com WhatsApp

Landing page profissional desenvolvida para apresentação de produtos/serviços e captura de leads, com integração direta via e-mail e WhatsApp para conversão rápida de clientes.

---

## 💡 Objetivo

Criar uma interface moderna e eficiente para:

- 📢 Apresentar produtos e serviços da empresa  
- 💰 Exibir planos pré-definidos  
- 🧩 Permitir solicitação de planos personalizados  
- 📲 Direcionar leads diretamente para o WhatsApp  
- 📩 Capturar contatos via formulário com envio de e-mail  

---

## 🧩 Funcionalidades

- 📦 Listagem de produtos/serviços organizados por categoria  
- 💼 Exibição de planos com valores e benefícios  
- 🛠️ Opção de solicitação de plano personalizado  
- 📲 Integração direta com WhatsApp (CTA de conversão)  
- 📩 Formulário de contato com envio automático de e-mail (SMTP)  
- ⚡ Interface responsiva e otimizada para performance  
- 🐳 Deploy simplificado com Docker  

---

## 🖼️ Preview

> 

---

## 🎯 Fluxo de Conversão

1. Usuário acessa a landing page  
2. Visualiza produtos e planos disponíveis  
3. Escolhe entre:  
   - Entrar em contato via WhatsApp  
   - Enviar formulário de interesse  
4. Lead é capturado e direcionado para atendimento  

---

## 🛠️ Tecnologias

- Next.js  
- React  
- TypeScript  
- Sass  
- Nodemailer  
- Docker  

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js 20 ou superior  
- Yarn / npm / pnpm  
- Docker (opcional)  

---
### Rodando o projeto

# instalar dependências
yarn install

# rodar em desenvolvimento
yarn dev

---

### Variáveis de Ambiente

Crie o arquivo `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-ou-app-password
SMTP_FROM=seu-email@gmail.com
EMAIL_TO=destino@exemplo.com
