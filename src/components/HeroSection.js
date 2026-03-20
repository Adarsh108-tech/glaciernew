"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const skyRef = useRef(null);
  const mountainBackRef = useRef(null);
  const mountainFrontRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(skyRef.current, {
        y: 400,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(mountainBackRef.current, {
        y: 300,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(mountainFrontRef.current, {
        y: 380,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(foregroundRef.current, {
        y: 460,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 🌌 Sky */}
      <img
        ref={skyRef}
        src="https://cdn.prod.website-files.com/64a42bd57fd800fb6bf3fda5/64a451d41aa97993e7a6e14d_sky.webp"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Sky"
      />

      {/* 🏔️ Mountain Back */}
      <img
        ref={mountainBackRef}
        src="https://cdn.prod.website-files.com/64a42bd57fd800fb6bf3fda5/64a45475c6e7d2c9ca1f00b6_1.webp"
        className="absolute bottom-0 w-full object-cover z-30"
        alt="Mountain Back"
      />

      {/* 🏔️ Mountain Front */}
      <img
        ref={mountainFrontRef}
        src="https://cdn.prod.website-files.com/64a42bd57fd800fb6bf3fda5/64a451f79db2e31a240ef39e_2.webp"
        className="absolute bottom-0 w-full object-cover z-20"
        alt="Mountain Front"
      />

      {/* 🌄 Foreground */}
      <img
        ref={foregroundRef}
        src="https://cdn.prod.website-files.com/64a42bd57fd800fb6bf3fda5/64a45467c6e7d2c9ca1eecba_3.webp"
        className="absolute bottom-0 w-full object-cover z-10"
        alt="Foreground"
      />

      {/* 🔥 Hero Content */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white px-6">
        
        {/* 🧊 Hero Logo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Image
            src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/comapny-hero-logo.webp"
            alt="Voice of Glacier Logo"
            width={220}
            height={120}
            className="w-40 md:w-56 lg:w-64 h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
        >
          Protecting Glaciers.
          <br />
          Preparing Communities.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl"
        >
          Enabling communities to adapt, lead and act in a changing climate.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5"
        >
          <Link href="#crisis">
            <Button className="bg-glacier-primary hover:bg-glacier-dark px-8 py-4 text-white text-base">
              Learn More
            </Button>
          </Link>

          <Link href="/donate">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-base">
              Donate
            </Button>
          </Link>

          <Link href="/collaborate">
            <Button
              variant="outline"
              className="border-white text-white bg-white/10 hover:bg-white/20 px-8 py-4 text-base"
            >
              Partner With Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}