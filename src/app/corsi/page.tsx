import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { courseSections } from "@/lib/courses-data";

export default function CoursesPage() {
  return (
    <main className="min-h-dvh">
      <section className="container py-12">
        <h1 className="text-3xl font-bold tracking-tight text-white">Corsi</h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Selezione di percorsi pratici per migliorare benessere e finanza personale.
        </p>

        <div className="mt-8 grid gap-10">
          {courseSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-2">
                <Badge variant={section.badgeVariant}>{section.badge}</Badge>
                <span className="text-sm text-zinc-400">{section.tags}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
                {section.description}
              </p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.courses.map((course) => (
                  <Card key={course.slug} className="overflow-hidden group hover:border-primary/50 transition-colors">
                    <Link href={`/corsi/${course.slug}`} className="block">
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={course.img}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                      </div>
                    </Link>
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={`/corsi/${course.slug}`} className="hover:text-primary transition-colors">
                          {course.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{course.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <span className="font-medium text-white">{course.price}</span>
                      <Link href={`/corsi/${course.slug}`} className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                        Scopri
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contatti" className={buttonVariants({ variant: "outline" })}>Richiedi consulenza</Link>
        </div>
      </section>
    </main>
  );
}
