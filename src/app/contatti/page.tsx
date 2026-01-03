import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/site/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-dvh">
      <section className="container max-w-2xl py-12">
        <h1 className="text-3xl font-bold tracking-tight text-white">Contatti</h1>
        <p className="mt-2 text-zinc-300">Scrivici per domande sui corsi o richieste personalizzate.</p>
        <ContactForm />
      </section>
    </main>
  );
}
