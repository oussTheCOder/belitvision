"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useRef, useState } from "react";

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("email") as HTMLInputElement;
    const email = input.value.trim();
    if (!email) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-white">{t("title")}</h2>
        <p className="text-muted mb-8 max-w-lg mx-auto">{t("desc")}</p>
        <form
          ref={formRef}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            placeholder={t("placeholder")}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-glass text-white placeholder:text-muted-more focus:outline-none focus:ring-2 focus:ring-primary"
            required
            disabled={status === "sending"}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-medium px-6 py-3 rounded-lg cursor-pointer disabled:cursor-not-allowed"
          >
            {status === "sending" ? "..." : status === "sent" ? "✓" : t("button")}
          </button>
        </form>
        {status === "sent" && (
          <p className="text-green-400 text-sm mt-3">Bedankt voor uw aanmelding!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Er is iets misgegaan. Probeer opnieuw.</p>
        )}
      </div>
    </section>
  );
}
