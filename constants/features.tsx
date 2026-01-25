import Image from "next/image";

export const features = [
    {
        id: "0",
        icon: (
            <Image
                src="/images/icons/IconeSistemas.png"
                width={48}
                height={48}
                alt="Integração entre sistemas"
            />
        ),
        title: "Integração de Sistemas",
        text: "Conecte diferentes sistemas e fontes de dados para criar, atualizar e sincronizar informações automaticamente, seguindo regras de negócio e fluxos de trabalho."
    },
    {
        id: "1",
        icon: (
            <Image
                src="/images/icons/IconePlanilha.png"
                width={48}
                height={48}
                alt="Integração com planilhas"
            />
        ),
        title: "Automação de Processos",
        text: "Mapeie rotinas operacionais e transforme etapas repetitivas em fluxos de trabalho automatizados, integrando sistemas, planilhas e regras de decisão em um único processo contínuo."
    },
    {
        id: "2",
        icon: (
            <Image
                src="/images/icons/IconeWhatsApp.png"
                width={48}
                height={48}
                alt="Real-time notifications"
            />
        ),
        title: "Notificações em Tempo Real",
        text: "Receba notificações e atualizações instantâneas sobre seus processos. Os usuários podem receber informações em tempo real, aprovar solicitações ou editar dados de forma rápida e fácil em qualquer dispositivo."
    },
];

export const details = [
    {
        id: "0",
        icon: "proflow",
        title: "Automação de processos sob medida",
    },
    {
        id: "1",
        icon: "collaborate",
        title: "Integração entre equipes e sistemas",
    },
    {
        id: "2",
        icon: "fast",
        title: "Fluxos rápidos e confiáveis",
    },
    {
        id: "3",
        icon: "wand",
        title: "Soluções simples para problemas complexos",
    },
];
