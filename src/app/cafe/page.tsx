"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Coffee, Pizza, Leaf, Sun, Music, Flame, Map, Laptop } from "lucide-react";

const menuItems = [
  {
    category: "Specialty Coffee",
    icon: Coffee,
    items: [
      { name: "Himalayan Pour Over", desc: "Single origin local beans, manually brewed.", price: "₹250", image: "https://loremflickr.com/1200/800/coffee,pour?lock=3" },
      { name: "Iced Caramel Macchiato", desc: "Espresso, vanilla, milk, and caramel drizzle.", price: "₹280", image: "https://loremflickr.com/1200/800/macchiato?lock=4" },
    ]
  },
  {
    category: "Wood-Fired Pizza",
    icon: Pizza,
    items: [
      { name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, mozzarella, white sauce.", price: "₹650", image: "https://loremflickr.com/1200/800/pizza,mushroom?lock=5" },
      { name: "Classic Margherita", desc: "Fresh tomatoes, basil, mozzarella, olive oil.", price: "₹450", image: "https://loremflickr.com/1200/800/pizza,margherita?lock=6" },
    ]
  },
  {
    category: "Healthy Bowls & Breakfast",
    icon: Leaf,
    items: [
      { name: "Avocado Toast", desc: "Sourdough, smashed avocado, cherry tomatoes, seeds.", price: "₹350", image: "https://loremflickr.com/1200/800/avocado,toast?lock=7" },
      { name: "Acai Berry Bowl", desc: "Mixed berries, granola, banana, chia seeds, honey.", price: "₹450", image: "https://loremflickr.com/1200/800/acaibowl?lock=8" },
    ]
  }
];

const experiences = [
  {
    title: "River Rafting Adventure",
    desc: "Experience the thrill of the Ganges. We organize daily rafting trips with professional guides, transport included.",
    image: "https://loremflickr.com/1200/800/rafting?lock=9",
    icon: Map,
    cta: "Book Rafting"
  },
  {
    title: "Sunrise Yoga & Meditation",
    desc: "Start your day with mindfulness. Join our expert instructors for morning yoga overlooking the valley.",
    image: "https://loremflickr.com/1200/800/yoga,sunrise?lock=10",
    icon: Sun,
    cta: "Join Session"
  },
  {
    title: "Legendary DJ Parties",
    desc: "When the weekend hits, our cafe transforms into a vibrant music festival. Top DJs, great cocktails, amazing crowd.",
    image: "https://loremflickr.com/1200/800/dj,party?lock=11",
    icon: Music,
    cta: "Get Guestlist"
  },
  {
    title: "Digital Nomad Coworking",
    desc: "High-speed WiFi, ergonomic chairs, plenty of power outlets, and endless coffee. The ultimate remote work setup.",
    image: "https://loremflickr.com/1200/800/coworking?lock=1",
    icon: Laptop,
    cta: "View Passes"
  }
];

export default function CafePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://loremflickr.com/1200/800/cafe,mountain?lock=12"
            alt="The Mountain Cafe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            The Mountain Café
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-200"
          >
            Where great food meets the best community in Rishikesh.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Our Philosophy" subtitle="We believe that good food brings people together. Our cafe is designed to be the heartbeat of Ejaas House – a place to share stories, work on your startup, or recover from a long trek." />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Featured Menu" subtitle="A taste of what we serve. Fresh, local, and made with love." />
          
          <div className="space-y-16 mt-12">
            {menuItems.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-8">
                  <category.icon size={28} className="text-primary" />
                  <h3 className="text-3xl font-bold">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow flex flex-row h-40">
                        <div className="w-1/3 relative">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <CardContent className="w-2/3 p-6 flex flex-col justify-center">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                            <span className="font-bold text-primary">{item.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full shadow-lg" variant="outline">
              Download Full Menu (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-background overflow-hidden" id="experiences">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Experiences & Events" subtitle="The cafe is the starting point for all our adventures." />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-80 w-full rounded-3xl overflow-hidden shadow-lg mb-6">
                  <Image src={exp.image} alt={exp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-full">
                      <exp.icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-4">{exp.desc}</p>
                <Button asChild variant="link" className="px-0 text-primary font-semibold hover:text-primary/80">
                  <Link href="/contact">{exp.cta} &rarr;</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
