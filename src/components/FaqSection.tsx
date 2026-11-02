"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/faqs";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  // Keep the first question open by default for immediate preview
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`section-padding ${styles.faqSection}`} aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Parent Inquiries</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions (FAQ for Parents)
          </h2>
          <p className="section-desc">
            Clear answers for parents on managing school curriculum alongside foundation classes, building conceptual confidence, and preparing for IIT-JEE and Olympiads early.
          </p>
        </div>

        <div className={styles.faqContainer}>
          <div className={styles.faqList} role="region" aria-label="Frequently Asked Questions Accordion">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              const answerId = `faq-answer-${faq.id}`;
              const buttonId = `faq-btn-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className={styles.faqQuestionBtn}
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} className={styles.faqChevron} aria-hidden="true" />
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={styles.faqAnswerWrapper}
                  >
                    <div className={styles.faqAnswerInner}>
                      <div className={styles.faqAnswerContent}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
