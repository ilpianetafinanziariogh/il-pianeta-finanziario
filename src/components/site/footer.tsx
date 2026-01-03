import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container grid gap-4 py-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <Image
              src="/logo.png"
              alt="Logo Il Pianeta Finanziario"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span>Il Pianeta Finanziario</span>
          </div>
          <p className="mt-2 text-sm text-zinc-400">
            Corsi per equilibrio mente-corpo e gestione consapevole del denaro.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium text-white">Link utili</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/corsi" className="text-zinc-300 hover:text-white">Corsi</Link></li>
            <li><Link href="/chi-siamo" className="text-zinc-300 hover:text-white">Chi siamo</Link></li>
            <li><Link href="/contatti" className="text-zinc-300 hover:text-white">Contatti</Link></li>
          </ul>
        </div>
        <div className="text-sm text-zinc-400">
          <p>© 2025 Il Pianeta Finanziario. Tutti i diritti riservati.</p>
          <p className="mt-1">Le informazioni fornite non costituiscono consulenza finanziaria.</p>
        </div>
      </div>
    </footer>
  );
}
