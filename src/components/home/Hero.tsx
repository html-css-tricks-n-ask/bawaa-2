"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
          alt="Ejaas House Mountain Party"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Stay <span className="text-primary">•</span> Party <span className="text-primary">•</span> Explore
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl font-medium text-zinc-200 mb-10 max-w-2xl"
        >
          Boutique Stay | Mountain Café | Weekend Parties <br />
          Tapovan, Rishikesh
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl hover:scale-105 transition-transform">
            <Link href="/rooms">Book Your Stay</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm hover:scale-105 transition-transform">
            <Link href="/cafe">Explore Café</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all">
            <Link href="/#parties">Weekend Party</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-sm font-medium uppercase tracking-widest">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
