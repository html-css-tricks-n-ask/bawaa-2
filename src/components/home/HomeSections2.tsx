"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP, STAGGER_CONTAINER, SLOW_ZOOM } from "@/lib/animations";

export function LifestyleSection() {
  const activities = [
    { title: "Yoga & Wellness", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" },
    { title: "Remote Work", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" },
    { title: "River Rafting", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
        >
          <SectionHeading 
            title="The Tapovan Rhythm" 
            subtitle="Work, play, and find your zen in the adventure capital of the world."
            centered={true}
          />
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {activities.map((act, i) => (
            <motion.div 
              variants={FADE_UP}
              whileHover={{ y: -5, scale: 1.02 }}
              key={i} 
              className="group cursor-pointer flex flex-col bg-card rounded-[2rem] p-4 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-border"
            >
              <div className="relative h-[250px] overflow-hidden mb-4 rounded-[1.5rem]">
                <Image 
                  src={act.image} 
                  alt={act.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-xl font-bold text-center pb-2 text-foreground group-hover:text-primary transition-colors">{act.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-soft-lg border border-border"
        >
          <SectionHeading title="Frequently Asked Questions" centered={true} />
          
          <div className="mt-8">
            <Accordion className="w-full">
              {[
                { q: "Is the WiFi fast enough for remote work?", a: "Yes! We have dedicated high-speed fiber internet and a coworking area specifically designed for digital nomads and remote workers." },
                { q: "Is the cafe open to non-guests?", a: "Absolutely. The Mountain Café is open to everyone. Come enjoy our wood-fired pizzas, specialty coffee, and vibrant community vibe." },
                { q: "Do you organize weekend parties?", a: "Yes, our weekends are legendary. We host live acoustic sessions, DJ nights, and community bonfire events." },
                { q: "Can you help book local adventures?", a: "Yes, our front desk can arrange river rafting, bungee jumping, sunrise treks, and other local adventures at the best rates." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b-border py-2">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors text-left text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base mt-2 font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-primary">
      <motion.div 
        variants={SLOW_ZOOM} 
        initial="hidden" 
        animate="show" 
        className="absolute inset-0 z-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop" 
          alt="Himalayas" 
          fill 
          className="object-cover opacity-20 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-left md:max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready for the Ejaas Experience?
          </h2>
          <p className="text-lg text-primary-foreground/90 font-medium">
            Book directly through our website for the best rates and exclusive perks. Your Himalayan adventure starts here.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="rounded-2xl text-lg h-16 px-10 bg-accent text-white hover:bg-accent/90 shadow-soft-lg transition-all shrink-0 font-bold border-2 border-accent hover:border-accent">
              <Link href="/contact" className="flex items-center gap-2">Reserve Your Stay <ArrowRight size={20}/></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
