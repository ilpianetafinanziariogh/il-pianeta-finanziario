import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourseBySlug, getSectionByCourseSlug, getAllCourseSlugs, courseSections } from "@/lib/courses-data";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  const section = getSectionByCourseSlug(slug);

  if (!course || !section) {
    notFound();
  }

  // Get related courses from the same section
  const relatedCourses = section.courses.filter(c => c.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-dvh">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src={course.img}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="container relative pt-16 pb-12">
          <Link
            href={`/corsi#${section.id}`}
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna a {section.title}
          </Link>

          <Badge variant={section.badgeVariant} className="mb-4">
            {section.badge}
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            {course.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
            {course.desc}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-bold text-primary">{course.price}</span>
            {course.duration && (
              <span className="text-zinc-400 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Iscriviti ora
            </Button>
            <Link href="/contatti" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}>
              Richiedi informazioni
            </Link>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Descrizione del corso</h2>
              <p className="text-zinc-300 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Modules */}
            {course.modules && course.modules.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Cosa imparerai</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-200">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {course.highlights && course.highlights.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Punti di forza</h2>
                <div className="flex flex-wrap gap-3">
                  {course.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="py-2 px-4 text-sm">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Inizia subito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Prezzo</span>
                  <span className="text-2xl font-bold text-white">{course.price}</span>
                </div>
                {course.duration && (
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Durata</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                )}
                <div className="pt-4 space-y-3">
                  <Button className="w-full" size="lg">
                    Iscriviti ora
                  </Button>
                  <p className="text-xs text-zinc-500 text-center">
                    Garanzia soddisfatti o rimborsati entro 14 giorni
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="container py-12 border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-6">Altri corsi in {section.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedCourses.map((related) => (
              <Card key={related.slug} className="overflow-hidden group hover:border-primary/50 transition-colors">
                <Link href={`/corsi/${related.slug}`} className="block">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={related.img}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={`/corsi/${related.slug}`} className="hover:text-primary transition-colors">
                      {related.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="font-medium text-white">{related.price}</span>
                  <Link href={`/corsi/${related.slug}`} className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                    Scopri
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
