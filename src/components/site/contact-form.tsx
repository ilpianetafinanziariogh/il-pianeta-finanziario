"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate with backend/email service
    console.log("Contact form:", { name, email, message });
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-1 block text-sm text-zinc-300" htmlFor="name">Nome</label>
        <Input id="name" name="name" placeholder="Il tuo nome" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="mb-1 block text-sm text-zinc-300" htmlFor="email">Email</label>
        <Input id="email" name="email" type="email" placeholder="nome@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="mb-1 block text-sm text-zinc-300" htmlFor="message">Messaggio</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="flex w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          placeholder="Come possiamo aiutarti?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit">Invia</Button>
    </form>
  );
}
