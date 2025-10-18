'use client';

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Section from "./Section";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">FAQ</h2>
        <Accordion type="single" collapsible className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">How fast is delivery?</AccordionTrigger>
            <AccordionContent className="text-white/80">First draft within 3–5 business days for most edits; complex CGI shots vary.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">Do you help with thumbnails & titles?</AccordionTrigger>
            <AccordionContent className="text-white/80">Yes—our CTR playbook pairs titles with visual patterns and A/B testing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">What budgets do you work with?</AccordionTrigger>
            <AccordionContent className="text-white/80">Retainers start at $1.5k/mo. Project work available for pilots.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
