import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Fiscaltech | Tecnologia a favor da vida",
  description:
    "Há 30 anos a Fiscaltech desenvolve sistemas inteligentes de mobilidade focados em controle e fiscalização de tráfego, pesagem em movimento e segurança pública.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "",
    github: "",
  },
  mailSupport: "",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Empresa",
    items: [
      { title: "Certificações", href: "/certifications" },
      { title: "Ética e Compliance", href: "/ethics-and-compliance" },
      { title: "Termos de Uso", href: "/terms" },
      { title: "Política de Privacidade", href: "/privacy" },
      { title: "LGPD", href: "/lgpd" },
    ],
  },
  {
    title: "Sistemas",
    items: [
      { title: "Fiscalização em Trânsito", href: "/products/fiscalizacao-em-transito" },
      { title: "Pesagem em Movimento", href: "/products/sistema-de-pesagem-em-movimento" },
      { title: "Gestão Operacional", href: "/products/sistema-de-gestao-operacional" },
      { title: "Cercamento Eletrônico", href: "/products/sistema-de-cercamento-eletronico" },
    ],
  },
  {
    title: "Entre em contato",
    items: [
      { title: "Trabalhe Conosco", href: "/work-with-us" },
      { title: "+55 (41) 3314-3400", href: "#" },
      { title: "comercial@fiscaltech.com.br", href: "mailto:comercial@fiscaltech.com.br" },
      { title: "Rua Eng. Júlio César de Souza Araújo, 266 CIC Curitiba - Paraná - Brasil", href: "https://encurtador.com.br/WdQDj" },
    ],
  },
];
