'use client';

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Section from "./Section";
import { SERVICES } from "./constants";

export default function Services() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">What We Do</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <Card key={s.title} className="bg-white/5 border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">{s.title}</CardTitle>
                <div className="text-violet-300">{s.icon}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 items-start"><Check className="h-4 w-4 text-violet-400 mt-0.5" /> {p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
