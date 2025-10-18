'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  // keep transition simple to satisfy types
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({ id, children, className }: React.PropsWithChildren<{ id?: string; className?: string }>) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", once: true });
  return (
    <section id={id} ref={ref} className={"relative w-full py-20 md:py-28 " + (className ?? "") }>
      <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
        {children}
      </motion.div>
    </section>
  );
}
