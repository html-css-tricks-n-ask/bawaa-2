"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Users, Coffee, Music, Wifi, Mountain } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
                alt="Ejaas House Lounge"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-lg">Tapovan, Rishikesh</h4>
              </div>
              <p className="text-sm text-muted-foreground">The perfect basecamp for your Himalayan adventures.</p>
            </motion.div>
          </div>

          <div>
            <SectionHeading 
              title="Not Just a Stay, It's a Lifestyle." 
              subtitle="Welcome to Ejaas House, a premium travel community where modern luxury meets the raw beauty of the Himalayas. We are more than a hostel or a hotel – we are a destination."
              centered={false}
            />

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { icon: Users, title: "Community Driven", desc: "Meet fellow travelers and digital nomads." },
                { icon: Music, title: "Epic Parties", desc: "Live music, DJs, and bonfire nights." },
                { icon: Mountain, title: "Adventure Awaits", desc: "River rafting, trekking, and yoga." },
                { icon: Coffee, title: "Mountain Café", desc: "Premium coffee, pizza, and healthy bowls." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-primary bg-primary/10 p-3 rounded-xl h-fit">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Button asChild size="lg" className="rounded-full shadow-lg hover:scale-105 transition-transform">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedRoomsSection() {
  const rooms = [
    {
      title: "Premium Mountain Cabin",
      price: "₹4,500 / night",
      image: "https://images.unsplash.com/photo-1598928506311-c55dd70c6576?q=80&w=2070&auto=format&fit=crop",
      features: ["Private Balcony", "King Bed", "En-suite"]
    },
    {
      title: "Luxury Mixed Dorm",
      price: "₹999 / night",
      image: "https://images.unsplash.com/photo-1522771731470-ea4322436d40?q=80&w=2070&auto=format&fit=crop",
      features: ["Privacy Curtains", "Lockers", "AC"]
    },
    {
      title: "Cozy Private Room",
      price: "₹3,200 / night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      features: ["Queen Bed", "Work Desk", "Mountain View"]
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Stay in Comfort" 
          subtitle="From luxury dorms for backpackers to premium private cabins for couples and digital nomads."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden group border-0 shadow-lg bg-background hover:shadow-2xl transition-all duration-300 rounded-3xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    {room.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{room.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feat, j) => (
                      <span key={j} className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md text-muted-foreground">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-full" variant="outline">
                    <Link href="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full shadow-lg">
            <Link href="/rooms">Explore All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CafeSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading 
              title="The Mountain Café" 
              subtitle="Fuel your adventures with artisan coffee, wood-fired pizzas, healthy bowls, and weekend specials. A perfect place to work, chill, and meet people."
              centered={false}
            />
            
            <div className="flex gap-4 mt-8 mb-10 flex-wrap">
              {['Artisan Coffee', 'Wood-fired Pizza', 'Healthy Bowls', 'Smoothies', 'Vegan Options'].map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-primary/20 text-primary font-medium text-sm">
                  {item}
                </span>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full shadow-lg">
              <Link href="/cafe">View Full Menu</Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden mt-8"
            >
              <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081&auto=format&fit=crop" alt="Pizza" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" alt="Coffee" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventsSection() {
  const events = [
    { title: "Weekend DJ Parties", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop", desc: "Dance under the stars with top DJs." },
    { title: "Live Acoustic Nights", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop", desc: "Soulful music sessions every Friday." },
    { title: "Bonfire & Community", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop", desc: "Stories, marshmallows, and new friends." },
    { title: "Open Mic Sessions", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop", desc: "Showcase your talent to an amazing crowd." }
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white" id="parties">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Experience the Vibe" 
          subtitle="Ejaas House comes alive when the sun goes down. Join our legendary weekend parties and community events."
          className="text-white [&>p]:text-zinc-400"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
