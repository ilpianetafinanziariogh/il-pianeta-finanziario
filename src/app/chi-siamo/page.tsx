import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-dvh">
      <section className="container grid gap-8 py-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">Chi siamo</h1>
          <p className="mt-4 max-w-prose text-zinc-300">
            Il Pianeta Finanziario nasce per aiutarti a costruire un equilibrio tra mente-corpo e denaro.
            Crediamo nella formazione chiara, pratica e rispettosa dei tempi di ognuno.
          </p>
          <p className="mt-2 max-w-prose text-zinc-300">
            I nostri corsi sono progettati da professionisti con esperienza in psicologia, coaching e finanza
            personale. Troverai percorsi concreti, esercizi guidati e risorse utili per crescere in serenità.
          </p>
        </div>
        <div className="relative w-full">
          <div className="relative h-72 w-full">
            <Image
              src="io.png"
              alt="Paesaggio naturale"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
