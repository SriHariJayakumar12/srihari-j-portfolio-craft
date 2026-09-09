import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  GraduationCap,
  Briefcase,
  FileText,
  Award,
  ArrowUpRight,
  ZoomIn,
  Code2,
  Users,
} from "lucide-react";
import certNcastm from "@/assets/certificate-ncastm25.jpeg.asset.json";
import certInternship from "@/assets/certificate-internship.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srihari J — Computer Science Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Srihari J, B.E. Computer Science and Engineering student at INFO Institute of Engineering, Coimbatore — Java development training and published conference paper.",
      },
      { property: "og:title", content: "Srihari J — Computer Science Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Java development training, a national conference paper on fraud detection in handwritten signatures, and verified certificates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const CERTIFICATES = [
  {
    src: certNcastm.url,
    title: "Paper Presentation — NCASTM-25",
    issuer: "INFO Institute of Engineering, Coimbatore",
    meta: "30 April 2025",
    alt: "Certificate from INFO Institute of Engineering certifying that Srihari J presented the paper Fraud Detection in Handwritten Signature at the National Conference on Advances in Science, Technology and Management (NCASTM-25) on 30 April 2025.",
  },
  {
    src: certInternship.url,
    title: "Internship Completion — Java Development",
    issuer: "Gateway Software Solutions",
    meta: "13.07.2026 – 13.08.2026",
    alt: "Internship completion certificate from Gateway Software Solutions certifying that Srihari J of INFO Institute of Engineering completed in-plant training in Java Development from 13.07.2026 to 13.08.2026.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.3, 0.6] },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 id={`${id}-heading`} className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Portfolio() {
  const active = useActiveSection();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const activeCert = lightbox !== null ? CERTIFICATES[lightbox] : undefined;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
          <a href="#top" className="min-w-0 truncate text-sm font-bold tracking-widest uppercase">
            Srihari <span className="text-primary">J</span>
          </a>
          <nav aria-label="Sections" className="hidden gap-1 sm:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-secondary ${
                  active === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground sm:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* Hero */}
        <div className="relative overflow-hidden py-20 sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              B.E. Computer Science and Engineering
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Srihari J
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Computer Science and Engineering student at INFO Institute of Engineering, Coimbatore.
              Trained in Java development and presenter of a national conference paper on fraud
              detection in handwritten signatures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View certificates <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <Section id="about" eyebrow="About" title="Profile">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            I am Srihari J, studying B.E. Computer Science and Engineering at INFO Institute of
            Engineering, Coimbatore — an institution approved by AICTE, New Delhi, affiliated to Anna
            University, Chennai, and accredited by NAAC. My hands-on work so far covers Java
            development, completed as in-plant training at Gateway Software Solutions, and academic
            research presented at a national conference.
          </p>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic background">
          <article className="rounded-xl border border-border bg-card p-6">
            <div className="flex min-w-0 items-start gap-4">
              <GraduationCap className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">B.E. Computer Science and Engineering</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  INFO Institute of Engineering, Kovilpalayam, Coimbatore
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Affiliated to Anna University, Chennai · Approved by AICTE, New Delhi · NAAC
                  accredited and ISO 9001:2015 certified
                </p>
              </div>
            </div>
          </article>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Training">
          <article className="rounded-xl border border-border bg-card p-6">
            <div className="flex min-w-0 items-start gap-4">
              <Briefcase className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <div className="grid gap-1 sm:flex sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold">Java Development — In-Plant Training</h3>
                  <p className="shrink-0 text-sm text-muted-foreground">13.07.2026 – 13.08.2026</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Gateway Software Solutions, Coimbatore
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Successfully completed in-plant training / internship in Java Development at an ISO
                  9001:2015 certified software development and outsourcing company.
                </p>
              </div>
            </div>
          </article>
        </Section>

        <Section id="research" eyebrow="Research" title="Paper presentation">
          <article className="rounded-xl border border-border bg-card p-6">
            <div className="flex min-w-0 items-start gap-4">
              <FileText className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">Fraud Detection in Handwritten Signature</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  National Conference on Advances in Science, Technology and Management (NCASTM-25)
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Presented on 30 April 2025 at INFO Institute of Engineering, Coimbatore.
                </p>
              </div>
            </div>
          </article>
        </Section>

        <Section id="certifications" eyebrow="Certifications" title="Verified certificates">
          <ul className="grid gap-6 sm:grid-cols-2">
            {CERTIFICATES.map((cert, i) => (
              <li key={cert.title} className="rounded-xl border border-border bg-card p-4">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group block w-full overflow-hidden rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Open larger view of ${cert.title} certificate`}
                >
                  <span className="relative block aspect-[4/3] bg-secondary">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      loading="lazy"
                      className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-xs text-foreground">
                      <ZoomIn className="size-3.5" aria-hidden="true" /> Zoom
                    </span>
                  </span>
                </button>
                <div className="mt-4 flex min-w-0 items-start gap-3">
                  <Award className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Send a message">
          <ContactForm />
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-5xl px-5 text-sm text-muted-foreground">
          Srihari J · B.E. Computer Science and Engineering, INFO Institute of Engineering,
          Coimbatore
        </p>
      </footer>

      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-[96vw] border-border bg-card p-3 sm:max-w-4xl">
          <DialogTitle className="px-1 text-base">{activeCert?.title ?? ""}</DialogTitle>
          <DialogDescription className="px-1 text-sm">
            {activeCert ? `${activeCert.issuer} · ${activeCert.meta}` : ""}
          </DialogDescription>
          {activeCert && (
            <div className="max-h-[75dvh] overflow-auto rounded-lg bg-secondary">
              <img
                src={activeCert.src}
                alt={activeCert.alt}
                className="mx-auto h-auto w-full max-w-none object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

type Errors = { name?: string; email?: string; message?: string };

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(v: typeof values): Errors {
    const e: Errors = {};
    const name = v.name.trim();
    const email = v.email.trim();
    const message = v.message.trim();
    if (!name) e.name = "Please enter your name.";
    else if (name.length > 100) e.name = "Name must be under 100 characters.";
    if (!email) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Enter a valid email address.";
    else if (email.length > 255) e.email = "Email must be under 255 characters.";
    if (!message) e.message = "Please enter a message.";
    else if (message.length < 10) e.message = "Message must be at least 10 characters.";
    else if (message.length > 1000) e.message = "Message must be under 1000 characters.";
    return e;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.getElementById(`cf-${Object.keys(e)[0]}`);
      first?.focus();
      return;
    }
    setSent(true);
  }

  const field = (key: keyof typeof values) => ({
    id: `cf-${key}`,
    value: values[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `cf-${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
  });

  return (
    <form noValidate onSubmit={onSubmit} className="max-w-xl rounded-xl border border-border bg-card p-6">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="cf-name">Name</Label>
          <Input {...field("name")} maxLength={100} autoComplete="name" />
          {errors.name && (
            <p id="cf-name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-email">Email</Label>
          <Input {...field("email")} type="email" maxLength={255} autoComplete="email" />
          {errors.email && (
            <p id="cf-email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-message">Message</Label>
          <Textarea {...field("message")} rows={5} maxLength={1000} />
          {errors.message && (
            <p id="cf-message-error" className="text-sm text-destructive">
              {errors.message}
            </p>
          )}
        </div>
        <Button type="submit" className="min-h-11 w-full sm:w-auto">
          Send message
        </Button>
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {sent
            ? "Thanks — your message is ready to send. Delivery is not connected yet, so no contact details are stored on this page."
            : ""}
        </p>
      </div>
    </form>
  );
}
