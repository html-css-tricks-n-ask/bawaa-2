"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Clock, Send, Mail, User, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import { FADE_UP, STAGGER_CONTAINER } from "@/lib/animations";
import { YouTubeVideoBackground } from "@/components/shared/YouTubeVideoBackground";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  mobile: z.string().min(10, "Please enter a valid mobile number."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type EnquiryData = z.infer<typeof enquirySchema>;

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const enquiryForm = useForm<EnquiryData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", mobile: "", email: "", subject: "", message: "" }
  });

  const onEnquirySubmit = async (data: EnquiryData) => {
    setFormStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        enquiryForm.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const inputClass = "flex w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all";
  const labelClass = "text-sm font-bold text-foreground mb-1.5 block";
  const errorClass = "text-destructive text-xs mt-1 block font-bold";

  return (
    <div className="min-h-screen bg-background">
      
      {/* Cinematic Video Hero */}
      <section className="relative h-[60vh] w-full flex items-end justify-start overflow-hidden bg-black">
        <YouTubeVideoBackground videoId="mdWw2N0wCNo" startTime={5} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-transparent" />
        
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="show"
          className="relative z-20 container mx-auto px-4 md:px-8 max-w-7xl pb-14 pt-28"
        >
          <motion.p variants={FADE_UP} className="text-accent font-bold text-sm tracking-widest uppercase mb-3">We'd love to hear from you</motion.p>
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Get in Touch</motion.h1>
          <motion.p variants={FADE_UP} className="text-lg text-white/80 max-w-2xl font-medium">
            Have a question about a stay, event, or our café? We're here to help.
          </motion.p>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 z-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-5 gap-8 lg:gap-12"
          >
            
            {/* Contact Information Card */}
            <motion.div variants={FADE_UP} className="lg:col-span-2">
              <div className="bg-card p-8 rounded-[2rem] shadow-soft-lg h-full border border-border flex flex-col justify-between transition-all duration-300">
                <div>
                  <h2 className="text-2xl font-extrabold mb-8 text-foreground">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-xl text-accent shrink-0 border border-accent/20">
                        <User size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Contact Person</h4>
                        <p className="text-muted-foreground font-medium">Rahul Sharma (Manager)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Mobile & WhatsApp</h4>
                        <a href="tel:+919876543210" className="text-muted-foreground font-medium hover:text-primary transition-colors block">+91 98765 43210</a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-[#25D366] mt-2 bg-[#25D366]/10 px-3 py-1 rounded-full hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
                          <MessageCircle size={16} /> Chat on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Email Address</h4>
                        <a href="mailto:hello@ejaashouse.com" className="text-muted-foreground font-medium hover:text-primary transition-colors">hello@ejaashouse.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 border border-primary/20">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Full Address</h4>
                        <p className="text-muted-foreground font-medium">Ejaas House, Badrinath Road<br/>Tapovan, Rishikesh<br/>Uttarakhand 249192, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 border border-primary/20">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Business Hours</h4>
                        <p className="text-muted-foreground font-medium">Reception: 24/7<br/>Café: 8:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="w-full h-48 bg-muted mt-8 rounded-[1.5rem] overflow-hidden relative shadow-inner border border-border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13770.835154388334!2d78.31490211737402!3d30.12658896500445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909166946059d7d%3A0xf607a726117bd473!2sTapovan%2C%20Rishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form Area */}
            <motion.div variants={FADE_UP} className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-soft-lg border border-border h-full transition-all duration-300">
                <h2 className="text-3xl font-extrabold mb-2 text-foreground">Send an Enquiry</h2>
                <p className="text-muted-foreground mb-8 font-medium">Fill out the form below and our team will get back to you shortly.</p>

                <AnimatePresence mode="wait">
                  {formStatus === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
                    >
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Enquiry Sent Successfully!</h3>
                      <p className="text-muted-foreground font-medium">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={enquiryForm.handleSubmit(onEnquirySubmit)} 
                      className="space-y-5"
                    >
                      {formStatus === "error" && (
                        <div className="bg-destructive/10 text-destructive p-4 rounded-xl text-sm font-bold">
                          There was an error sending your message. Please try again or contact us directly.
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Full Name</label>
                          <input type="text" placeholder="e.g. Aditi Rao" className={inputClass} {...enquiryForm.register("name")} />
                          {enquiryForm.formState.errors.name && <span className={errorClass}>{enquiryForm.formState.errors.name.message}</span>}
                        </div>
                        <div>
                          <label className={labelClass}>Mobile Number</label>
                          <input type="tel" placeholder="+91 98765 43210" className={inputClass} {...enquiryForm.register("mobile")} />
                          {enquiryForm.formState.errors.mobile && <span className={errorClass}>{enquiryForm.formState.errors.mobile.message}</span>}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Email Address</label>
                        <input type="email" placeholder="you@example.com" className={inputClass} {...enquiryForm.register("email")} />
                        {enquiryForm.formState.errors.email && <span className={errorClass}>{enquiryForm.formState.errors.email.message}</span>}
                      </div>

                      <div>
                        <label className={labelClass}>Subject</label>
                        <input type="text" placeholder="e.g. Room Booking Inquiry" className={inputClass} {...enquiryForm.register("subject")} />
                        {enquiryForm.formState.errors.subject && <span className={errorClass}>{enquiryForm.formState.errors.subject.message}</span>}
                      </div>

                      <div>
                        <label className={labelClass}>Message</label>
                        <textarea 
                          placeholder="How can we help you?" 
                          className={`${inputClass} min-h-[120px] resize-y`} 
                          {...enquiryForm.register("message")} 
                        />
                        {enquiryForm.formState.errors.message && <span className={errorClass}>{enquiryForm.formState.errors.message.message}</span>}
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        disabled={formStatus === "loading"}
                        className="w-full bg-primary text-white font-bold text-lg h-14 rounded-2xl shadow-soft hover:bg-primary/90 hover:shadow-soft-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group mt-4 border-2 border-primary"
                      >
                        {formStatus === "loading" ? (
                          <><Loader2 className="animate-spin" size={20} /> Sending...</>
                        ) : (
                          <>Send Enquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
