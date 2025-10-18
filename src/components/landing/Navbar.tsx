'use client';

import React from "react";
import { Sparkles, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[color:var(--sidebar)]/80 grid place-items-center" style={{boxShadow: '0 6px 20px rgba(109,40,217,0.18)'}}>
            <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
          </div>
          <span className="font-semibold tracking-tight text-[color:var(--sidebar-foreground)]">MZ MEDIA</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#work" className="hover:text-white"> Review</a>
          <a href="#process" className="hover:text-white">Work</a>
          <a href="#services" className="hover:text-white">Case Study</a>
          <a href="#results" className="hover:text-white">Process</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)] shadow-[0_8px_30px_rgba(59,130,246,0.18)]" size="sm">
            Book a Call 
          </Button>
        </div>
      </div>
    </div>
  );
}
