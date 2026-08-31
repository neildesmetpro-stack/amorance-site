"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { formspreeEndpoint, formspreeIsConfigured } from "@/lib/site";
import styles from "./ContactForm.module.css";

type Props = {
  labels: Dictionary["form"];
  /** Lien vers la politique de confidentialite, dans la langue courante. */
  privacyHref: string;
};

type FieldName = "name" | "company" | "email" | "message" | "consent";
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm({ labels, privacyHref }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fieldId = (name: string) => `${uid}-${name}`;
  const errorId = (name: string) => `${uid}-${name}-error`;

  function validate(data: FormData): Partial<Record<FieldName, string>> {
    const errors: Partial<Record<FieldName, string>> = {};
    const value = (key: string) => String(data.get(key) ?? "").trim();

    if (!value("name")) errors.name = labels.errors.name;
    if (!value("company")) errors.company = labels.errors.company;
    if (!EMAIL_PATTERN.test(value("email"))) errors.email = labels.errors.email;
    if (!value("message")) errors.message = labels.errors.message;
    if (!data.get("consent")) errors.consent = labels.errors.consent;

    return errors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitError(null);
    const errors = validate(data);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      const first = Object.keys(errors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // Champ leurre : rempli, la soumission est abandonnee sans erreur visible.
    if (String(data.get("_gotcha") ?? "").length > 0) {
      setStatus("success");
      return;
    }

    if (!formspreeIsConfigured) {
      setStatus("error");
      setSubmitError(labels.errors.submit);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError(labels.errors.submit);
    }
  }

  if (status === "success") {
    return (
      <p className={styles.success} role="status">
        {labels.success}
      </p>
    );
  }

  const describedBy = (name: FieldName, extra?: string) =>
    [fieldErrors[name] ? errorId(name) : null, extra ?? null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handleSubmit}
      action={formspreeEndpoint}
      method="post"
      noValidate
    >
      <fieldset className={styles.fieldset}>
        <legend className="visually-hidden">{labels.legend}</legend>

        <p className={styles.hint}>{labels.requiredHint}</p>

        {submitError ? (
          <p className={styles.alert} role="alert">
            {submitError}
          </p>
        ) : null}

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId("name")}>
            {labels.fields.name}
            <Required label={labels.requiredMark} />
          </label>
          <input
            className={styles.input}
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={describedBy("name")}
          />
          <FieldError id={errorId("name")} message={fieldErrors.name} />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId("company")}>
            {labels.fields.company}
            <Required label={labels.requiredMark} />
          </label>
          <input
            className={styles.input}
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            aria-invalid={fieldErrors.company ? true : undefined}
            aria-describedby={describedBy("company")}
          />
          <FieldError id={errorId("company")} message={fieldErrors.company} />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId("website")}>
            {labels.fields.website}
            <span className={styles.optional}> ({labels.optional})</span>
          </label>
          <input
            className={styles.input}
            id={fieldId("website")}
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId("email")}>
            {labels.fields.email}
            <Required label={labels.requiredMark} />
          </label>
          <input
            className={styles.input}
            id={fieldId("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={describedBy("email")}
          />
          <FieldError id={errorId("email")} message={fieldErrors.email} />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId("message")}>
            {labels.fields.message}
            <Required label={labels.requiredMark} />
          </label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            id={fieldId("message")}
            name="message"
            rows={7}
            aria-invalid={fieldErrors.message ? true : undefined}
            aria-describedby={describedBy("message")}
          />
          <FieldError id={errorId("message")} message={fieldErrors.message} />
        </div>

        <div className={styles.consent}>
          <input
            className={styles.checkbox}
            id={fieldId("consent")}
            name="consent"
            type="checkbox"
            value="oui"
            aria-invalid={fieldErrors.consent ? true : undefined}
            aria-describedby={describedBy("consent")}
          />
          <label className={styles.consentLabel} htmlFor={fieldId("consent")}>
            {labels.consentBefore}
            <Link href={privacyHref}>{labels.consentLink}</Link>
            {labels.consentAfter}
            <Required label={labels.requiredMark} />
          </label>
          <FieldError id={errorId("consent")} message={fieldErrors.consent} />
        </div>

        {/* Champ leurre anti-robot, invisible et hors du parcours clavier. */}
        <div className={styles.trap} aria-hidden="true">
          <label htmlFor={fieldId("gotcha")}>{labels.honeypot}</label>
          <input
            id={fieldId("gotcha")}
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <input type="hidden" name="_subject" value="Nouveau message depuis le site amorance.fr" />

        <button className={styles.submit} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? labels.submitting : labels.submit}
        </button>
      </fieldset>
    </form>
  );
}

function Required({ label }: { label: string }) {
  return (
    <span className={styles.required}>
      <span aria-hidden="true"> *</span>
      <span className="visually-hidden"> ({label})</span>
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p className={styles.error} id={id}>
      {message}
    </p>
  );
}
