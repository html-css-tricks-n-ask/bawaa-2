"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export function LifestyleSection() {
  const activities = [
    { title: "Yoga & Wellness", image: "https://loremflickr.com/1200/800/yoga,sunrise?lock=10" },
    { title: "Coworking Space", image: "https://loremflickr.com/1200/800/coworking?lock=1" },
    { title: "River Rafting", image: "https://loremflickr.com/1200/800/rafting?lock=9" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="The Tapovan Lifestyle" 
          subtitle="Work, play, and find your zen in the adventure capital of India."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <Image src={act.image} alt={act.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-center group-hover:text-primary transition-colors">{act.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionHeading title="Frequently Asked Questions" />
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-zinc-200 dark:border-zinc-800">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">Do you have high-speed WiFi for remote work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes! We have dedicated high-speed fiber internet and a coworking area specifically designed for digital nomads and remote workers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-zinc-200 dark:border-zinc-800">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">Is the cafe open to non-guests?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Absolutely. The Mountain Café is open to everyone. Come enjoy our wood-fired pizzas, specialty coffee, and vibrant community vibe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-zinc-200 dark:border-zinc-800">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">Do you organize weekend parties?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, our weekends are legendary. We host live acoustic sessions, DJ nights, and community bonfire events. Check our Events board when you arrive!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-zinc-200 dark:border-zinc-800">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">Can you help book river rafting?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, our front desk can arrange river rafting, bungee jumping, sunrise treks, and other local adventures at the best rates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="https://loremflickr.com/1200/800/bonfire,friends?lock=26" alt="Bonfire CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready for the Ejaas Experience?</h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            Book directly through our website for the best rates and exclusive perks. Your Himalayan adventure starts here.
          </p>
          <Button asChild size="lg" className="rounded-full text-lg h-16 px-10 bg-white text-primary hover:bg-zinc-100 hover:scale-105 transition-transform shadow-2xl">
            <Link href="/contact">Book Your Stay Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
