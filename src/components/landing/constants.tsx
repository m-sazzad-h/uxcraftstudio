import React from "react";
import { Frame, Video, Sparkles, Wand2, LineChart, Crown, MonitorPlay, Rocket } from "lucide-react";

export const WORK = [
  { title: "UGC Product Ad", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", metric: "+175% ROAS" },
  { title: "Docu-Edit", thumb: "https://images.unsplash.com/photo-1520376000874-62335a09ef82?w=800&q=80", metric: "+56% retention" },
  { title: "App Promo", thumb: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&q=80", metric: "1.3M views" },
  { title: "Brand Sizzle", thumb: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=800&q=80", metric: "+42% CTR" },
];

export const TESTIMONIALS = [
  {
    name: "Matt Hughes",
    role: "King of Video",
    quote:
      "Honestly, they're the best in the game. Ridiculously fast and on-brand—highly recommend!",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    name: "Henrik J.",
    role: "Golf247 CEO",
    quote:
      "Turned our rough A-roll into a mini documentary. Engagement up 60% in two weeks.",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    name: "DetectiveH",
    role: "YouTube Creator",
    quote:
      "They built us a reusable visual system—now publishing is plug & play.",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

export const DIFFS = [
  { icon: <Frame className="h-5 w-5" />, title: "Design-Led Story", desc: "Narrative first, motion that serves the message—never garnish." },
  { icon: <Rocket className="h-5 w-5" />, title: "Proven System", desc: "Frameworks for hooks, pacing, and CTAs that repeatedly convert." },
  { icon: <Wand2 className="h-5 w-5" />, title: "CGI & 3D Ready", desc: "Seamlessly blend product shots with CGI for premium polish." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Speed w/ Quality", desc: "Async pipelines mean you get drafts in days, not weeks." },
];

export const SERVICES = [
  { title: "YouTube Editing", points: ["Story-led cuts", "Custom motion graphics", "Color & sound mix"], icon: <Video className="h-5 w-5" /> },
  { title: "UGC / Ads", points: ["Hook frameworks", "Native platform pacing", "CTA & landing sync"], icon: <Wand2 className="h-5 w-5" /> },
  { title: "CGI / 3D Shots", points: ["Product renders", "Compositing", "Tracking & lighting"], icon: <Sparkles className="h-5 w-5" /> },
  { title: "Thumbnails + Titles", points: ["A/B tests", "CTR playbooks", "Design system"], icon: <Frame className="h-5 w-5" /> },
];

export const STEPS = [
  { k: "01", title: "Deep Analysis", desc: "Audit your channel/brand, competitors, ICP, and offers.", icon: <LineChart className="h-5 w-5" /> },
  { k: "02", title: "Creative Direction", desc: "We map hooks, narratives, and visual language.", icon: <Crown className="h-5 w-5" /> },
  { k: "03", title: "Scripting & Edit", desc: "Tight cuts, motion graphics, and color-managed delivery.", icon: <MonitorPlay className="h-5 w-5" /> },
  { k: "04", title: "Launch & Iterate", desc: "A/B thumbnails/titles, analyze retention and refine.", icon: <Rocket className="h-5 w-5" /> },
];
