import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import NewsletterForm from "@/components/site/newsletter-form";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="container py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge className="mx-auto" variant="default">Il Pianeta Finanziario</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Corsi di Finanza personale
          </h1>
          <p className="mt-4 text-zinc-300">
            Formazione pratica e accessibile per crescere in equilibrio: benessere psicofisico,
            consapevolezza e gestione del denaro. Impara con percorsi chiari, esercizi guidati e supporto.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/corsi" className={buttonVariants({ variant: "default" }) + " w-full sm:w-auto"}>Sfoglia i corsi</Link>
            <Link href="/chi-siamo" className={buttonVariants({ variant: "default" }) + " w-full sm:w-auto"}>Chi siamo</Link>
          </div>

         
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {/* 1. Viaggi Formativi & mindset */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Viaggi Formativi & mindset</CardTitle>
              <CardDescription>Viaggi formativi per costruire libertà, metodo e visione.Gli investimenti a lungo termine non sono per pochi.Sono per chiunque voglia prendersi responsabilità del proprio futuro,anche senza essere "tecnico", anche vivendo fuori dagli schemi.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 w-full">
                  <Image
                    src="/barca1.jpg"
                    alt="Barca a vela in navigazione sul mare"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1519801584609-8ee5f072eddd?q=80&w=1200&auto=format&fit=crop"
                    alt="Persone in vacanza su barca a vela"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <Link href="/corsi#viaggi-formativi" className={buttonVariants({ variant: "default" }) + " w-full"}>
                Scopri il corso
              </Link>
            </CardContent>
          </Card>

          {/* 2. La psicologia dell'investitore */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>La psicologia dell'investitore</CardTitle>
              <CardDescription>Comprendi le emozioni che guidano le tue decisioni finanziarie. Un corso per sviluppare disciplina mentale, gestire paura e avidità, e costruire un mindset vincente per investire con lucidità anche nei momenti di volatilità.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
                    alt="Mindset e psicologia"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
                    alt="Riflessione e strategia"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <Link href="/corsi#psicologia-investitore" className={buttonVariants({ variant: "default" }) + " w-full"}>
                Scopri il corso
              </Link>
            </CardContent>
          </Card>

          {/* 3. ETF */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Metti in moto i tuoi risparmi con il corso in ETF</CardTitle>
              <CardDescription>ETF: il modo più semplice e intuitivo (anche da smartphone) per investire nel tempo.Gli ETF sono usati da famiglie e istituzioni in tutto il mondo.Un corso essenziale per chi vuole far crescere i propri risparmi con metodo e una prospettiva di rendimento intorno all'8% annuo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop"
                    alt="Grafico trading ETF"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop"
                    alt="Investimenti da smartphone"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <Link href="/corsi#corso-etf" className={buttonVariants({ variant: "default" }) + " w-full"}>
                Scopri il corso
              </Link>
            </CardContent>
          </Card>

          {/* 4. Investire in azioni a lungo termine */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Investire in azioni a lungo termine</CardTitle>
              <CardDescription>Costruisci il tuo futuro con le azioni. Impara a selezionare aziende solide e a investire con pazienza e metodo. Un corso per chi vuole capire come funziona il mercato azionario e costruire un portafoglio diversificato nel tempo. Prospettiva di rendimento oltre 10%</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop"
                    alt="Grafico crescita investimenti"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                    alt="Analisi mercato azionario"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <Link href="/corsi#azioni-lungo-termine" className={buttonVariants({ variant: "default" }) + " w-full"}>
                Scopri il corso
              </Link>
            </CardContent>
          </Card>

          {/* 5. Investimenti speculativi in opzioni */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Investimenti speculativi in opzioni</CardTitle>
              <CardDescription>Scopri il mondo delle opzioni finanziarie. Un corso avanzato per chi vuole esplorare strategie speculative con consapevolezza dei rischi. Impara a usare leva, coperture e tecniche di trading su derivati.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
                    alt="Trading avanzato opzioni"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-36 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop"
                    alt="Analisi grafica trading"
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <Link href="/corsi#opzioni-speculative" className={buttonVariants({ variant: "default" }) + " w-full"}>
                Scopri il corso
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
