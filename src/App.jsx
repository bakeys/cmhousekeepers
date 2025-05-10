import React from "react";
import {
  Sparkles,
  Brush,
  Home as HomeIcon,
  CheckCircle,
  Quote as QuoteIcon,
} from "lucide-react";

// Tailwind colour tokens matching the mock‑up
// teal-800 #0f555e  |  slate-50 #f8f8f8  |  slate-900 #0f172a

const services = [
  {
    title: "Regular Cleaning",
    Icon: Sparkles,
    description:
      "Weekly & fortnightly upkeep for a consistently spotless home.",
  },
  {
    title: "Deep Cleaning",
    Icon: Brush,
    description:
      "A thorough top‑to‑bottom refresh – perfect before guests arrive.",
  },
  {
    title: "End of Tenancy",
    Icon: HomeIcon,
    description: "Move‑out cleans that help secure 100% of your deposit.",
  },
];

const testimonials = [
  {
    quote:
      "Fantastic service! My house has never looked so clean – highly recommend.",
    author: "Sarah • Chelmsford",
  },
  {
    quote: "Reliable, friendly cleaners and flexible scheduling – five stars!",
    author: "James • Brentwood",
  },
  {
    quote:
      "The end‑of‑tenancy clean got our full deposit back – brilliant work.",
    author: "Lucy • Colchester",
  },
];

export default function HomePage() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50">
      {/* HERO */}
      <header
        id="top"
        className="relative min-h-screen flex items-center justify-center
                   bg-[url('/clean-living-room.png')]
                   bg-cover bg-center text-white"
      >

        <div className="relative z-10 w-full max-w-3xl px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Sparkling Clean Homes <br className="hidden md:block" /> Across
            Essex
          </h1>
          <p className="text-lg/relaxed text-white">
            Expert domestic cleaning with a 100% satisfaction guarantee.
          </p>
          <a
            href="#quote"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-teal-800 shadow hover:bg-teal-50 transition"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-20 grid gap-8 md:grid-cols-3">
        {services.map(({ title, Icon, description }) => (
          <div
            key={title}
            className="rounded-lg bg-white p-8 shadow hover:shadow-lg transition flex flex-col items-center hover:scale-[1.02]"
          >
            <Icon className="h-12 w-12 text-teal-800 mb-4" />
            <h3 className="text-xl font-semibold text-teal-800 text-center">
              {title}
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed text-center">
              {description}
            </p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src="/cleaner.png"
            alt="Cleaner wiping a countertop"
            className="w-full rounded-lg shadow-lg object-cover h-80"
          />

          <div>
            <h2 className="text-3xl font-bold text-teal-800 mb-6">
              Why choose us
            </h2>
            <ul className="space-y-4 text-lg text-slate-700">
              {[
                "Experienced & trustworthy cleaners",
                "Flexible scheduling that fits your life",
                "Satisfaction 100% guaranteed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-800 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#testimonials"
              className="mt-8 inline-block rounded-lg bg-teal-800 px-6 py-3 text-white font-semibold shadow hover:bg-teal-700 transition"
            >
              What our customers say
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="container mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-teal-800">
          What our customers say
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, author }) => (
            <blockquote
              key={author}
              className="rounded-lg bg-white p-8 shadow hover:scale-[1.01] transition"
            >
              <QuoteIcon className="h-8 w-8 text-teal-800 mb-4" />
              <p className="text-slate-700 italic">“{quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-teal-800">
                {author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-800 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h3 className="text-2xl font-bold">Ready for a spotless home?</h3>
          <a
            href="mailto:info@cmhousekeepers.co.uk"
            className="rounded-lg bg-white/90 px-8 py-3 font-semibold text-teal-800 shadow hover:bg-white transition"
          >
            Get your free quote
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center text-sm">
        <div className="space-y-2">
          <p>info@cmhousekeepers.co.uk</p>
          <p>01234 567 890</p>
          <p>&copy; {new Date().getFullYear()} CM Housekeepers • Essex, UK</p>
        </div>
      </footer>
    </div>
  );
}
