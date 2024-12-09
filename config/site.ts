import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Fiscal Tecnologia e Automação",
  description:
    "Descrição.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-auth-roles-template",
  },
  mailSupport: "support@next-starter.fake",
};

export const footerLinks: SidebarNavItem[] = [
  // {
  //   title: "Fiscaltech",
  //   items: [
  //     { title: "Sobre", href: "#" },
  //     { title: "Empresa", href: "#" },
  //     { title: "Sistemas", href: "/terms" },
  //     { title: "Blog", href: "/privacy" },
  //     { title: "Fale Conosco", href: "/privacy" },
  //   ],
  // },
  {
    title: "Empresa",
    items: [
      { title: "Nosso Propósito", href: "#" },
      { title: "História", href: "#" },
      { title: "Certificações", href: "#" },
      { title: "Ética e Compliance", href: "#" },
      { title: "LGPD", href: "#" },
    ],
  },
  {
    title: "Sistemas",
    items: [
      { title: "Fiscalização em Trânsito", href: "/produto-1" },
      { title: "Pesagem em Movimento", href: "/produto-2" },
      { title: "Gestão Operacional", href: "/produto-3" },
      { title: "Cercamento Eletrônico", href: "/produto-4" },
    ],
  },
  {
    title: "Entre em contato",
    items: [
      { title: "+55 (41) 3314-3400", href: "#" },
      { title: "comercial@fiscaltech.com.br", href: "#" },
      { title: "Rua Eng. Júlio César de Souza Araújo, 266 CIC Curitiba - Paraná - Brasil", href: "#" },
      { title: "Trabalhe Conosco", href: "#" },
    ],
  },
];
