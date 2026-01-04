export interface Course {
  slug: string;
  title: string;
  img: string;
  desc: string;
  price: string;
  category: string;
  duration?: string;
  modules?: string[];
  highlights?: string[];
  longDescription?: string;
}

export interface CourseSection {
  id: string;
  title: string;
  badge: string;
  badgeVariant: "wellness" | "finance";
  tags: string;
  description: string;
  courses: Course[];
}

export const courseSections: CourseSection[] = [
  {
    id: "viaggi-formativi",
    title: "Viaggi Formativi & mindset",
    badge: "Viaggi Formativi & mindset",
    badgeVariant: "wellness",
    tags: "Libertà • Metodo • Visione",
    description: "Viaggi formativi per costruire libertà, metodo e visione. Gli investimenti a lungo termine non sono per pochi. Sono per chiunque voglia prendersi responsabilità del proprio futuro.",
    courses: [
      {
        slug: "viaggio-barca-vela",
        title: "Viaggio in Barca a Vela a Panama",
        img: "barca1.jpg",
        desc: "Doppia esperienza formativa unica sul mare, per capire di più sulla residenza fiscale a Panama e sulla gestione autonoma dei risparmi.",
        price: "€3.700",
        category: "viaggi-formativi",
        duration: "7 giorni",
        modules: ["Navigazione e leadership", "Sessioni di coaching in mare", "Workshop di pianificazione finanziaria", "Networking con imprenditori"],
        highlights: ["Esperienza full-immersion", "Gruppo ristretto max 8 persone", "Mentorship personalizzata"],
        longDescription: "Un viaggio trasformativo di 7 giorni in barca a vela nel Mediterraneo. Unisci l'avventura della navigazione a sessioni intensive di crescita personale e finanziaria. Imparerai a prendere decisioni sotto pressione, a lavorare in team e a sviluppare una visione chiara per il tuo futuro finanziario."
      },
      {
        slug: "ritiro-mindset-intensivo",
        title: "Ritiro Mindset Intensivo",
        img: "https://images.unsplash.com/photo-1519801584609-8ee5f072eddd?q=80&w=1200&auto=format&fit=crop",
        desc: "3 giorni di full immersion per trasformare la tua mentalità.",
        price: "€799",
        category: "viaggi-formativi",
        duration: "3 giorni",
        modules: ["Identificazione blocchi mentali", "Tecniche di visualizzazione", "Creazione piano d'azione", "Follow-up mensile"],
        highlights: ["Location esclusiva", "Coaching individuale incluso", "Materiali didattici premium"],
        longDescription: "Un weekend intensivo in una location esclusiva per lavorare sui tuoi blocchi mentali e costruire un mindset orientato al successo. Sessioni di gruppo e individuali con coach esperti ti aiuteranno a superare le paure che ti bloccano negli investimenti."
      },
      {
        slug: "workshop-visione-obiettivi",
        title: "Workshop Visione e Obiettivi",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
        desc: "Definisci i tuoi obiettivi di lungo termine con chiarezza.",
        price: "€299",
        category: "viaggi-formativi",
        duration: "1 giorno",
        modules: ["Definizione valori personali", "Goal setting finanziario", "Creazione vision board", "Piano d'azione 12 mesi"],
        highlights: ["Workshop pratico", "Workbook incluso", "Sessione follow-up gratuita"],
        longDescription: "Una giornata dedicata a definire con chiarezza la tua visione finanziaria. Attraverso esercizi pratici e guidati, creerai un piano d'azione concreto per i prossimi 12 mesi, allineato ai tuoi valori e obiettivi di vita."
      }
    ]
  },
  {
    id: "psicologia-investitore",
    title: "La psicologia dell'investitore",
    badge: "La psicologia dell'investitore",
    badgeVariant: "wellness",
    tags: "Emozioni • Disciplina • Lucidità",
    description: "Comprendi le emozioni che guidano le tue decisioni finanziarie. Sviluppa disciplina mentale, gestisci paura e avidità, e costruisci un mindset vincente.",
    courses: [
      {
        slug: "gestione-emozioni-investimenti",
        title: "Gestione delle Emozioni",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
        desc: "Impara a riconoscere e gestire paura e avidità negli investimenti.",
        price: "€149",
        category: "psicologia-investitore",
        duration: "4 settimane",
        modules: ["Riconoscere le emozioni", "Tecniche di autocontrollo", "Journaling finanziario", "Meditazione per investitori"],
        highlights: ["Video lezioni on-demand", "Esercizi pratici quotidiani", "Community privata"],
        longDescription: "Un corso di 4 settimane per imparare a riconoscere e gestire le emozioni che sabotano le tue decisioni di investimento. Paura, avidità, FOMO: imparerai tecniche concrete per mantenere la lucidità anche nei momenti di volatilità del mercato."
      },
      {
        slug: "disciplina-mentale",
        title: "Disciplina Mentale",
        img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
        desc: "Costruisci abitudini mentali per investire con costanza.",
        price: "€129",
        category: "psicologia-investitore",
        duration: "3 settimane",
        modules: ["Costruire routine vincenti", "Gestione del tempo", "Sistemi vs obiettivi", "Accountability"],
        highlights: ["Piano personalizzato", "Check-in settimanali", "Accesso lifetime"],
        longDescription: "La disciplina è il segreto degli investitori di successo. Questo corso ti insegna a costruire abitudini solide, creare sistemi automatici e mantenere la costanza anche quando la motivazione cala."
      },
      {
        slug: "bias-cognitivi-investimenti",
        title: "Bias Cognitivi negli Investimenti",
        img: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200&auto=format&fit=crop",
        desc: "Riconosci i bias che influenzano le tue decisioni finanziarie.",
        price: "€99",
        category: "psicologia-investitore",
        duration: "2 settimane",
        modules: ["I 12 bias più comuni", "Casi studio reali", "Strategie di mitigazione", "Checklist decisionale"],
        highlights: ["Corso compatto ed efficace", "Quiz interattivi", "Certificato finale"],
        longDescription: "Confirmation bias, loss aversion, overconfidence: scopri i bias cognitivi che ti fanno perdere soldi senza che tu te ne accorga. Con casi studio reali e una checklist pratica per prendere decisioni più razionali."
      }
    ]
  },
  {
    id: "corso-etf",
    title: "Metti in moto i tuoi risparmi con il corso in ETF",
    badge: "Metti in moto i tuoi risparmi con il corso in ETF",
    badgeVariant: "finance",
    tags: "ETF • Rendimento 8% • Smartphone",
    description: "ETF: il modo più semplice e intuitivo (anche da smartphone) per investire nel tempo. Gli ETF sono usati da famiglie e istituzioni in tutto il mondo.",
    courses: [
      {
        slug: "etf-principianti",
        title: "ETF per Principianti",
        img: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
        desc: "Inizia a investire in ETF con pochi euro al mese.",
        price: "€99",
        category: "corso-etf",
        duration: "3 settimane",
        modules: ["Cosa sono gli ETF", "Come scegliere un broker", "Primo acquisto guidato", "PAC automatico"],
        highlights: ["Adatto a chi parte da zero", "Esempi pratici con 50€/mese", "Supporto via email"],
        longDescription: "Il corso perfetto per chi non ha mai investito. Ti guiderò passo passo dall'apertura del conto alla costruzione del tuo primo PAC in ETF. Inizia anche con soli 50€ al mese."
      },
      {
        slug: "portafoglio-etf-bilanciato",
        title: "Portafoglio ETF Bilanciato",
        img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop",
        desc: "Costruisci un portafoglio diversificato con ETF globali.",
        price: "€149",
        category: "corso-etf",
        duration: "4 settimane",
        modules: ["Asset allocation", "ETF azionari globali", "ETF obbligazionari", "Ribilanciamento periodico"],
        highlights: ["3 modelli di portafoglio pronti", "Foglio Excel incluso", "Aggiornamenti annuali"],
        longDescription: "Impara a costruire un portafoglio ETF bilanciato e diversificato a livello globale. Ti fornirò 3 modelli pronti all'uso e un foglio Excel per tracciare i tuoi investimenti."
      },
      {
        slug: "etf-settoriali-tematici",
        title: "ETF Avanzato: Settoriali e Tematici",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
        desc: "Esplora ETF settoriali per opportunità di crescita.",
        price: "€199",
        category: "corso-etf",
        duration: "5 settimane",
        modules: ["ETF settoriali", "ETF tematici (AI, green, crypto)", "Analisi dei costi", "Timing di mercato"],
        highlights: ["Per investitori intermedi", "Analisi di 50+ ETF", "Webinar live mensili"],
        longDescription: "Un corso avanzato per chi vuole andare oltre il classico portafoglio passivo. Analizzeremo ETF settoriali, tematici e le strategie per sfruttare i trend di mercato."
      }
    ]
  },
  {
    id: "azioni-lungo-termine",
    title: "Investire in azioni a lungo termine",
    badge: "Investire in azioni a lungo termine",
    badgeVariant: "finance",
    tags: "Azioni • Rendimento 10%+ • Diversificazione",
    description: "Costruisci il tuo futuro con le azioni. Impara a selezionare aziende solide e a investire con pazienza e metodo.",
    courses: [
      {
        slug: "analisi-fondamentale",
        title: "Analisi Fondamentale",
        img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
        desc: "Impara a valutare aziende leggendo bilanci e report.",
        price: "€199",
        category: "azioni-lungo-termine",
        duration: "6 settimane",
        modules: ["Leggere un bilancio", "Indici di valutazione (P/E, ROE)", "Analisi competitiva", "Valutazione intrinseca"],
        highlights: ["20+ esercizi pratici", "Analisi di aziende reali", "Template Excel professionale"],
        longDescription: "Il corso completo per imparare l'analisi fondamentale. Dalla lettura del bilancio alla valutazione intrinseca, diventerai capace di valutare qualsiasi azienda quotata."
      },
      {
        slug: "costruzione-portafoglio-azionario",
        title: "Costruzione Portafoglio Azionario",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        desc: "Diversifica il tuo portafoglio con azioni di qualità.",
        price: "€249",
        category: "azioni-lungo-termine",
        duration: "5 settimane",
        modules: ["Diversificazione efficace", "Selezione titoli quality", "Gestione del rischio", "Quando vendere"],
        highlights: ["Watchlist di 30 azioni", "Criteri di selezione pronti", "Community investitori"],
        longDescription: "Costruisci un portafoglio azionario solido e diversificato. Imparerai i criteri per selezionare azioni di qualità e le regole per gestire il portafoglio nel tempo."
      },
      {
        slug: "dividendi-rendite-passive",
        title: "Dividendi e Rendite Passive",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        desc: "Costruisci un flusso di reddito passivo con dividendi.",
        price: "€179",
        category: "azioni-lungo-termine",
        duration: "4 settimane",
        modules: ["Dividend aristocrats", "Yield vs crescita", "DRIP strategy", "Tassazione dividendi"],
        highlights: ["Lista 50 dividend stocks", "Calcolatore rendite", "Strategie fiscali"],
        longDescription: "Impara a costruire un portafoglio che genera reddito passivo attraverso i dividendi. Analizzeremo le migliori dividend stocks e le strategie per massimizzare le rendite."
      }
    ]
  },
  {
    id: "opzioni-speculative",
    title: "Investimenti speculativi in opzioni",
    badge: "Investimenti speculativi in opzioni",
    badgeVariant: "finance",
    tags: "Opzioni • Leva • Derivati",
    description: "Scopri il mondo delle opzioni finanziarie. Un corso avanzato per chi vuole esplorare strategie speculative con consapevolezza dei rischi.",
    courses: [
      {
        slug: "introduzione-opzioni",
        title: "Introduzione alle Opzioni",
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
        desc: "Comprendi call, put e le basi del trading in opzioni.",
        price: "€249",
        category: "opzioni-speculative",
        duration: "5 settimane",
        modules: ["Call e Put spiegate", "Le greche", "Scadenze e strike", "Prima operazione"],
        highlights: ["Simulatore incluso", "Paper trading guidato", "Sessioni Q&A live"],
        longDescription: "Il corso fondamentale per capire le opzioni. Dalle basi teoriche alle prime operazioni simulate, costruirai una solida comprensione di questo strumento complesso."
      },
      {
        slug: "strategie-opzioni",
        title: "Strategie con Opzioni",
        img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
        desc: "Spread, straddle, strangle: strategie avanzate.",
        price: "€349",
        category: "opzioni-speculative",
        duration: "8 settimane",
        modules: ["Vertical spreads", "Iron condor", "Straddle e strangle", "Calendar spreads"],
        highlights: ["15+ strategie spiegate", "Backtest storici", "Mentorship di gruppo"],
        longDescription: "Il corso più completo sulle strategie con opzioni. Imparerai oltre 15 strategie diverse, quando usarle e come gestire il rischio. Include sessioni di mentorship di gruppo."
      },
      {
        slug: "gestione-rischio-derivati",
        title: "Gestione del Rischio con Derivati",
        img: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
        desc: "Usa le opzioni per proteggere il tuo portafoglio.",
        price: "€299",
        category: "opzioni-speculative",
        duration: "4 settimane",
        modules: ["Protective put", "Collar strategy", "Hedging con futures", "Position sizing"],
        highlights: ["Focus su protezione", "Casi studio 2020-2024", "Strumenti di calcolo"],
        longDescription: "Le opzioni non sono solo speculazione: sono potenti strumenti di protezione. Impara a usare i derivati per proteggere il tuo portafoglio dai ribassi di mercato."
      }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  for (const section of courseSections) {
    const course = section.courses.find(c => c.slug === slug);
    if (course) return course;
  }
  return undefined;
}

export function getSectionByCourseSlug(slug: string): CourseSection | undefined {
  for (const section of courseSections) {
    const course = section.courses.find(c => c.slug === slug);
    if (course) return section;
  }
  return undefined;
}

export function getAllCourseSlugs(): string[] {
  return courseSections.flatMap(section => section.courses.map(c => c.slug));
}
