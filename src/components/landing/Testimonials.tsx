'use client';

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import { TESTIMONIALS } from "./constants";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <Section>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">What Clients Say</h2>
        <p className="text-white/70 mt-2">Real words from people we work with every week.</p>
        <Card className="bg-white/5 border-white/10 mt-8">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-4">
              <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full" />
              <p className="text-lg md:text-xl text-white max-w-2xl">“{t.quote}”</p>
              <p className="text-white/70 text-sm">{t.name} · {t.role}</p>
              <div className="flex gap-1 mt-1">
                {TESTIMONIALS.map((_, i) => (
                  <span key={i} className={"h-1.5 w-6 rounded-full " + (i === idx ? "bg-violet-400" : "bg-white/20")}></span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
