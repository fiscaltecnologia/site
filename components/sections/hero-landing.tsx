import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/shared/icons";

import BlurImage from "../shared/blur-image";
import { CarouselDemo } from "./carousel-demo";

export default async function HeroLanding() {
  return (
    <>
      <section className="space-y-6 py-4 sm:py-6 lg:py-8">
        <CarouselDemo></CarouselDemo>
        <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">
          <div className="w-full">
          </div>
          {/* <Link
          href="https://next-saas-stripe-starter.vercel.app/"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "xl" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span> Free Next SaaS Starter Here!
        </Link> */}

          {/* <div className="pb-6 sm:pb-20"> */}
          {/* <MaxWidthWrapper> */}
          {/* <div className="h-auto rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
              <div className="relative overflow-hidden rounded-xl border md:rounded-lg"> */}
          {/* <BlurImage
                  src={logoImage}
                  alt="ligth preview landing"
                  className="flex size-full object-contain object-center"
                  width={1500}
                  height={750}
                  priority
                  placeholder="blur"
                /> */}
          {/* </div>
            </div> */}
          {/* </MaxWidthWrapper> */}
          {/* </div> */}
          <Card className="w-full bg-primary p-8">
            <h1 className="text-text font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
              Há 30 anos{" "}
            </h1>
            <h1 className="text-text font-satoshi text-[20px] font-black leading-[1.15] tracking-tight sm:text-4xl md:text-4xl md:leading-[1.15]">
              <span className="bg-gradient-to-r bg-clip-text text-white">
                {/* /*from-violet-600 via-blue-600 to-cyan-500 */}
                valorizando a vida com trânsito seguro.
              </span>
            </h1>
          </Card>

          <Card className="w-full bg-white p-8">
            <h1 className="text-text font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
              O que fazemos{" "}
            </h1>
            <div className="text-text m-5">
              <span className="text-text text-sm">
                {/* /*from-violet-600 via-blue-600 to-cyan-500 */}
                Há 30 anos a Fiscaltech desenvolve sistemas inteligentes de
                mobilidade focados em controle e fiscalização de tráfego,
                pesagem em movimento e segurança pública. Somos uma empresa
                brasileira, formada por mais de 350 colaboradores, com bases de
                atuação e equipamentos que monitoram ruas e estradas em todo o
                Brasil. Contamos com uma tecnologia de ponta, que faz uma
                integração robusta e completa, e temos orgulho de entregar
                produtos e serviços inovadores que ajudam o mundo a se preparar
                para os desafios que o futuro impõe.
              </span>
            </div>
            <div className="flex justify-center space-x-2">
              <Link
                href="/docs"
                prefetch={true}
                className={cn(
                  buttonVariants({ rounded: "xl", size: "lg" }),
                  "gap-2 px-5 text-[15px]",
                )}
              >
                <span>Saiba mais</span>
                <Icons.arrowRight className="size-4" />
              </Link>
            </div>
          </Card>

          <Card className="w-full bg-white p-8">
            <h1 className="text-text font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
              Gente de valor{" "}
            </h1>
            <div className="text-text m-5">
              <span className="text-text text-sm">
                {/* /*from-violet-600 via-blue-600 to-cyan-500 */}
                Nossa empresa acredita que um ambiente de trabalho pautado no
                equilíbrio e bem-estar é fator elementar para inspirar nossos
                colaboradores. Na Fiscaltech, a área de Gestão de Gente prioriza
                programas para desenvolver todos os níveis da empresa, além de
                capacitar as lideranças, permitindo o crescimento do colaborador
                e a expansão sustentável do negócio.
              </span>
            </div>
            <div className="flex justify-center space-x-2">
              <Link
                href="/docs"
                prefetch={true}
                className={cn(
                  buttonVariants({ rounded: "xl", size: "lg" }),
                  "gap-2 px-5 text-[15px]",
                )}
              >
                <span>Trabalhe Conosco</span>
                <Icons.arrowRight className="size-4" />
              </Link>
            </div>
          </Card>

          <Card className="w-full bg-white p-8">
            <h1 className="text-text font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
              Ser e Estar em Compliance{" "}
            </h1>
            <div className="text-text m-5">
              <span className="text-text text-sm">
                {/* /*from-violet-600 via-blue-600 to-cyan-500 */}
                Para a Fiscaltech, Ser Compliance é conhecer as normas da
                organização, seguir os procedimentos recomendados, agir em
                conformidade e sentir o quão fundamentais são a ética e a
                idoneidade em suas atividades. Estar em Compliance é estar em
                conformidade com as leis e regulamentos internos e externos,
                além de se manter em estado de atenção para evitar, detectar e
                tratar quaisquer desvios ou inconformidades que possam ocorrer.
              </span>
            </div>
            <div className="flex justify-center space-x-2">
              <Link
                href="/docs"
                prefetch={true}
                className={cn(
                  buttonVariants({ rounded: "xl", size: "lg" }),
                  "gap-2 px-5 text-[15px]",
                )}
              >
                <span>Saiba mais</span>
                <Icons.arrowRight className="size-4" />
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
