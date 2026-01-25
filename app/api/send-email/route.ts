import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, company, email, description } = body;

        // Validação básica
        if (!name || !email) {
            return NextResponse.json(
                { error: "Nome e e-mail são obrigatórios" },
                { status: 400 }
            );
        }

        // Configuração do transporter
        // Você precisa configurar essas variáveis de ambiente no arquivo .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false, // true para 465, false para outras portas
            auth: {
                user: process.env.SMTP_USER, // Seu e-mail
                pass: process.env.SMTP_PASS, // Sua senha ou app password
            },
        });

        // Configuração do e-mail
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.EMAIL_TO || process.env.SMTP_USER, // E-mail de destino
            subject: "Nova Submissão do Formulário de Contato - Portfólio",
            html: `
                <h2>Nova Submissão do Formulário de Contato</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${description || "Não informado"}</p>
                <hr>
                <p><small>Enviado através do formulário de contato do portfólio</small></p>
            `,
            text: `
                Nova Submissão do Formulário de Contato
                
                Nome: ${name}
                Empresa: ${company || "Não informado"}
                E-mail: ${email}
                Mensagem: ${description || "Não informado"}
                
                Enviado através do formulário de contato do portfólio
            `,
        };

        // Enviar e-mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "E-mail enviado com sucesso!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json(
            { error: "Erro ao enviar e-mail. Tente novamente mais tarde." },
            { status: 500 }
        );
    }
}

