"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/corsi", label: "Corsi" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-black/70 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <Image
            src="/logo.png"
            alt="Logo Il Pianeta Finanziario"
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
          <span>Il Pianeta Finanziario</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-zinc-300 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/corsi" className={cn(buttonVariants({ variant: "default" }), "hidden sm:inline-flex")}>
            Inizia
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Apri menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-zinc-950 border-zinc-800 p-0">
              <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 p-4 border-b border-zinc-800">
                  <Image
                    src="/logo.png"
                    alt="Logo Il Pianeta Finanziario"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="font-semibold text-white">Il Pianeta Finanziario</span>
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t border-zinc-800">
                  <Link
                    href="/corsi"
                    onClick={() => setOpen(false)}
                    className={cn(buttonVariants({ variant: "default" }), "w-full")}
                  >
                    Inizia ora
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
