"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex flex-col mb-40">
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-[#37fbb3]">
              Contact Us
            </h1>
            <p className="text-xl mb-8">
              Have questions or need support? We're here to help!
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="focus-visible:ring-0 border border-[#ffffff44]" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="focus-visible:ring-0 border border-[#ffffff44]"  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px] focus-visible:ring-0 border border-[#ffffff44]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#37fbb3] text-[#020817] hover:bg-[#2de29e]"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin />}
                  title="Address"
                  content="Velluruvai, Alvai East, Alvai, Pointpedro."
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  content="+94 (77) 281-2634"
                />
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  content="nesankiruthi@gmail.com"
                />
              </div>
              {/* <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start">
      <div className="mr-4 text-[#37fbb3]">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
}
