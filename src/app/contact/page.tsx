"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  checkIn: z.string().min(1, "Check-in date is required."),
  checkOut: z.string().min(1, "Check-out date is required."),
  guests: z.string().min(1, "Please select number of guests."),
  roomType: z.string().min(1, "Please select a room type."),
  requests: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "success">("idle");
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success">("idle");

  const bookingForm = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "1", roomType: "", requests: "" }
  });

  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" }
  });

  const onBookingSubmit = (data: z.infer<typeof bookingSchema>) => {
    setBookingStatus("loading");
    setTimeout(() => {
      setBookingStatus("success");
      bookingForm.reset();
    }, 2000);
  };

  const onContactSubmit = (data: z.infer<typeof contactSchema>) => {
    setContactStatus("loading");
    setTimeout(() => {
      setContactStatus("success");
      contactForm.reset();
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2070&auto=format&fit=crop" alt="Contact Ejaas House" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold mb-4">
            Connect With Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-zinc-200">
            Book your stay or just drop by to say hello.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Tabs defaultValue="book" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-zinc-100 dark:bg-zinc-900 rounded-full h-14 p-1">
                  <TabsTrigger value="book" className="rounded-full text-base h-full">Book a Room</TabsTrigger>
                  <TabsTrigger value="contact" className="rounded-full text-base h-full">General Inquiry</TabsTrigger>
                </TabsList>
                
                <TabsContent value="book">
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                    <h2 className="text-2xl font-bold mb-6">Reservation Request</h2>
                    <AnimatePresence>
                      {bookingStatus === "success" && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center text-center p-8 z-10">
                          <CheckCircle2 size={64} className="text-green-500 mb-4" />
                          <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                          <p className="text-muted-foreground mb-6">We have received your booking request and will confirm your reservation shortly via email.</p>
                          <Button onClick={() => setBookingStatus("idle")} variant="outline" className="rounded-full">Book Another Room</Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Full Name</Label><Input placeholder="John Doe" className="bg-white dark:bg-zinc-800" {...bookingForm.register("name")} />{bookingForm.formState.errors.name && <span className="text-red-500 text-sm">{bookingForm.formState.errors.name.message}</span>}</div>
                        <div className="space-y-2"><Label>Phone</Label><Input placeholder="+91 98765..." className="bg-white dark:bg-zinc-800" {...bookingForm.register("phone")} />{bookingForm.formState.errors.phone && <span className="text-red-500 text-sm">{bookingForm.formState.errors.phone.message}</span>}</div>
                      </div>
                      <div className="space-y-2"><Label>Email</Label><Input placeholder="john@example.com" className="bg-white dark:bg-zinc-800" {...bookingForm.register("email")} />{bookingForm.formState.errors.email && <span className="text-red-500 text-sm">{bookingForm.formState.errors.email.message}</span>}</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Check-in</Label><Input type="date" className="bg-white dark:bg-zinc-800" {...bookingForm.register("checkIn")} />{bookingForm.formState.errors.checkIn && <span className="text-red-500 text-sm">{bookingForm.formState.errors.checkIn.message}</span>}</div>
                        <div className="space-y-2"><Label>Check-out</Label><Input type="date" className="bg-white dark:bg-zinc-800" {...bookingForm.register("checkOut")} />{bookingForm.formState.errors.checkOut && <span className="text-red-500 text-sm">{bookingForm.formState.errors.checkOut.message}</span>}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Guests</Label>
                          <Select onValueChange={(v) => bookingForm.setValue("guests", v as string)} defaultValue="1">
                            <SelectTrigger className="bg-white dark:bg-zinc-800"><SelectValue placeholder="Select guests" /></SelectTrigger>
                            <SelectContent><SelectItem value="1">1 Guest</SelectItem><SelectItem value="2">2 Guests</SelectItem><SelectItem value="3">3 Guests</SelectItem><SelectItem value="4+">4+ Guests</SelectItem></SelectContent>
                          </Select>
                          {bookingForm.formState.errors.guests && <span className="text-red-500 text-sm">{bookingForm.formState.errors.guests.message}</span>}
                        </div>
                        <div className="space-y-2"><Label>Room Type</Label>
                          <Select onValueChange={(v) => bookingForm.setValue("roomType", v as string)}>
                            <SelectTrigger className="bg-white dark:bg-zinc-800"><SelectValue placeholder="Select room" /></SelectTrigger>
                            <SelectContent><SelectItem value="dorm">Luxury Mixed Dorm</SelectItem><SelectItem value="private">Cozy Private Room</SelectItem><SelectItem value="cabin">Premium Mountain Cabin</SelectItem></SelectContent>
                          </Select>
                          {bookingForm.formState.errors.roomType && <span className="text-red-500 text-sm">{bookingForm.formState.errors.roomType.message}</span>}
                        </div>
                      </div>
                      <div className="space-y-2"><Label>Special Requests</Label><Textarea placeholder="Any specific requirements?" className="bg-white dark:bg-zinc-800 resize-none" {...bookingForm.register("requests")} /></div>
                      <Button type="submit" className="w-full rounded-full h-12 text-lg shadow-lg" disabled={bookingStatus === "loading"}>{bookingStatus === "loading" ? "Processing..." : "Request Booking"}</Button>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="contact">
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <AnimatePresence>
                      {contactStatus === "success" && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center text-center p-8 z-10">
                          <CheckCircle2 size={64} className="text-green-500 mb-4" />
                          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                          <p className="text-muted-foreground mb-6">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                          <Button onClick={() => setContactStatus("idle")} variant="outline" className="rounded-full">Send Another Message</Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Name</Label><Input placeholder="John Doe" className="bg-white dark:bg-zinc-800" {...contactForm.register("name")} />{contactForm.formState.errors.name && <span className="text-red-500 text-sm">{contactForm.formState.errors.name.message}</span>}</div>
                        <div className="space-y-2"><Label>Phone</Label><Input placeholder="+91..." className="bg-white dark:bg-zinc-800" {...contactForm.register("phone")} />{contactForm.formState.errors.phone && <span className="text-red-500 text-sm">{contactForm.formState.errors.phone.message}</span>}</div>
                      </div>
                      <div className="space-y-2"><Label>Email</Label><Input placeholder="john@example.com" className="bg-white dark:bg-zinc-800" {...contactForm.register("email")} />{contactForm.formState.errors.email && <span className="text-red-500 text-sm">{contactForm.formState.errors.email.message}</span>}</div>
                      <div className="space-y-2"><Label>Subject</Label><Input placeholder="How can we help?" className="bg-white dark:bg-zinc-800" {...contactForm.register("subject")} />{contactForm.formState.errors.subject && <span className="text-red-500 text-sm">{contactForm.formState.errors.subject.message}</span>}</div>
                      <div className="space-y-2"><Label>Message</Label><Textarea placeholder="Write your message here..." className="bg-white dark:bg-zinc-800 resize-none h-32" {...contactForm.register("message")} />{contactForm.formState.errors.message && <span className="text-red-500 text-sm">{contactForm.formState.errors.message.message}</span>}</div>
                      <Button type="submit" className="w-full rounded-full h-12 text-lg shadow-lg" disabled={contactStatus === "loading"}>{contactStatus === "loading" ? "Sending..." : "Send Message"} <Send className="ml-2" size={18} /></Button>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-8">Location & Info</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0"><MapPin size={24} /></div>
                    <div><h4 className="font-bold text-lg">Address</h4><p className="text-muted-foreground">Ejaas House, Badrinath Road, Tapovan<br/>Rishikesh, Uttarakhand 249192, India</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0"><Phone size={24} /></div>
                    <div><h4 className="font-bold text-lg">Contact</h4><p className="text-muted-foreground">+91 98765 43210<br/>hello@ejaashouse.com</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0"><Clock size={24} /></div>
                    <div><h4 className="font-bold text-lg">Hours</h4><p className="text-muted-foreground">Reception: 24/7<br/>Cafe: 8:00 AM - 11:00 PM</p></div>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden relative shadow-inner">
                <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map View" fill className="object-cover opacity-50 grayscale" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="secondary" className="rounded-full shadow-xl"><MapPin className="mr-2" size={18} /> Open in Google Maps</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
