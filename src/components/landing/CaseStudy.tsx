'use client';

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import Section from "./Section";

export default function CaseStudy() {
  return (
    <Section id="results">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="rounded-full bg-white/10 text-violet-200 mb-3">Case Study</Badge>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">From 1k subs to $30k/mo with a repeatable video system</h3>
            <p className="text-white/70 mt-3">
              We rebuilt the channel architecture, added story-first scripting, and standardized motion graphics for a consistent brand. KPI lifts within 90 days.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              {[
                "+230% average view duration",
                "10x monthly revenue from sponsorships",
                "+38% CTR from thumbnail + title frameworks",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2"><CircleCheck className="mt-0.5 h-5 w-5 text-violet-400" /> {f}</li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              <button className="rounded-2xl bg-white/10 px-3 py-2">Read Full Story</button>
              <button className="rounded-2xl bg-white/10 px-3 py-2">See More Results</button>
            </div>
          </div>
          <Card className="bg-white/5 border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80" className="w-full h-72 object-cover" />
            <CardContent className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: "Watch time", value: "+56%" },
                { label: "Subs", value: "+9.3k" },
                { label: "RPM", value: "3.2x" },
              ].map((k) => (
                <div key={k.label}>
                  <p className="text-2xl text-white font-semibold">{k.value}</p>
                  <p className="text-xs text-white/60">{k.label}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
