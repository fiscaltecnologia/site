"use client";

import * as React from "react";
import Link from "next/link";
import imgLogo from "@/public/_static/logo.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import BlurImage from "../shared/blur-image";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " text-foreground/60"}
            >
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground/60">
            Empresa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-5 items-center">
                <NavigationMenuLink asChild>
                  <a
                    className="text-center items-center flex size-full select-none flex-col justify-end rounded-md bg-primary bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/work-with-us"
                  >
                    <BlurImage
                      src={imgLogo}
                      alt="ligth preview landing"
                      className="object-cover"
                      width={100}
                      priority
                      placeholder="blur"
                    />
                    <div className="mb-2 mt-4 text-sm font-medium">
                      Trabalhe Conosco
                    </div>

                    <p className="text-sm leading-tight text-muted-foreground"></p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/our-purpose"
                title="Nosso Propósito"
                className="row-span-3"
              >
              </ListItem>
              <ListItem href="/history" title="História"></ListItem>
              <ListItem
                href="/certifications"
                title="Certificações"
              ></ListItem>
              <ListItem
                href="/ethics-and-compliance"
                title="Ética e Compliance"
              ></ListItem>

              <ListItem
                href="/lgpd"
                title="LGPD"
                className="text-sm"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground/60">
            Sistemas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4 items-center">
                <NavigationMenuLink asChild>
                  <a
                    className="text-center items-center flex size-full select-none flex-col justify-end rounded-md bg-primary bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/products"
                  >
                    <BlurImage
                      src={imgLogo}
                      alt="ligth preview landing"
                      className="object-cover"
                      width={100}
                      priority
                      placeholder="blur"
                    />

                    <div className="mb-2 mt-4 text-sm font-medium">
                      Sistemas & Soluções
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground"></p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/products/fiscalizacao-em-transito" title="Fiscalização em Trânsito">
                O Fiscal Speed Control 110 (FSC110) é um medidor de velocidade
                que detecta e registra automaticamente, através de imagem
                fotográfica digital de alta resolução, o excesso de velocidade
                da via através de sensor Doppler. Tal sensor opera utilizando o
                princípio do efeito doppler, medindo a distância do
                veículo-alvo, sua posição no campo de visão do radar através do
                ângulo do plano horizontal e sua velocidade.
              </ListItem>
              <ListItem href="/products/sistema-de-pesagem-em-movimento" title="Pesagem em Movimento">
                O Fiscal HSWIM é uma solução precisa e de longa duração para
                pesagem em movimento. Esta solução atende aos mais elevados
                quesitos nacionais e internacionais de precisão e qualidade,
                tais como ASTM E1318-09 Type I e Type III e COST 323 A(5), B+(7)
                ou B(10).
              </ListItem>
              <ListItem href="/products/sistema-de-gestao-operacional" title="Gestão Operacional">
                O Sistema de Gestão Operacional (Ares) processa e valida as
                infrações de trânsito capturadas de forma automática pelos
                equipamentos instalados em campo, gerenciando todo o fluxo de
                processamento, desde o registro da infração até a sua emissão.
              </ListItem>
              <ListItem href="/products/sistema-de-cercamento-eletronico" title="Cercamento Eletrônico">
                O Cercamento Eletrônico é um sistema de Gestão de Segurança
                Pública, que utiliza equipamentos com sistema de leitura
                automática de placas para trazer mais segurança aos Estados e
                Municípios. O sistema é capaz de realizar consulta em banco de
                dados para emissão de alertas em tempo real sobre eventuais
                suspeitas, como furto e clonagem de placas, e utiliza algoritmos
                de inteligência que identificam automaticamente e geram alertas
                sobre movimentações suspeitas.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " text-foreground/60"}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
