"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate with a backend or email provider
    console.log("Newsletter signup:", email);
  }

  return (
    <form className="mt-8 flex w-full max-w-md gap-2" onSubmit={handleSubmit}>
      <Input
        placeholder="La tua email"
        type="email"
        aria-label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="shrink-0">Iscriviti</Button>
    </form>
  );
}
