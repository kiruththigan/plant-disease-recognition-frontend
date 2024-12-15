"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Microscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import socialImage from "/public/assets/social.png";
import kirusanImage from "/public/assets/kirusan.jpg";
import varakunanImage from "/public/assets/varakunan.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex flex-col mb-40">
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-[#37fbb3]">
              About Plant Disease Recognition
            </h1>
            <p className="text-xl mb-8">
              We're on a mission to revolutionize plant health management using
              cutting-edge AI technology.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#37fbb3]">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Founded in 2024, Plant Disease Recognition emerged from a
                  passion for sustainable agriculture and a vision to make
                  expert plant care accessible to everyone.
                </p>
                <p>
                  Our team of agricultural experts and AI specialists came
                  together with a shared goal: to create a tool that could
                  instantly identify plant diseases and provide treatment
                  recommendations, empowering farmers and gardeners worldwide.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src={socialImage}
                  alt="Team working on plant disease recognition"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#37fbb3]">
              Our Mission
            </h2>
            <p className="text-xl mb-8">
              To protect and nurture plant life by leveraging AI technology,
              making expert plant disease diagnosis accessible to everyone,
              everywhere.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Leaf className="h-12 w-12 text-[#37fbb3]" />}
                title="Sustainable Agriculture"
                description="Promoting healthier crops and reducing pesticide use through early disease detection."
              />
              <FeatureCard
                icon={<Microscope className="h-12 w-12 text-[#37fbb3]" />}
                title="Cutting-edge Technology"
                description="Utilizing state-of-the-art AI and machine learning for accurate disease identification."
              />
              <FeatureCard
                icon={<Users className="h-12 w-12 text-[#37fbb3]" />}
                title="Global Impact"
                description="Empowering farmers and gardeners worldwide with accessible plant care expertise."
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#37fbb3]">
              Our Agriculture Experts
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <ExpertProfile
                name="Mr. Kirusan Sivathasan"
                title="Technical Assistant"
                image={kirusanImage}
                description="Department of Agriculture Northern Province"
              />
              <ExpertProfile
                name="Mr. Varakunan Vaithilingam"
                title="Technical Assistant"
                image={varakunanImage}
                description="Department of Agriculture Northern Province"
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to protect your plants?
            </h2>
            <p className="text-xl mb-8">
              Join us in our mission to revolutionize plant health management.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#37fbb3] text-[#020817] hover:bg-[#2de29e]"
            >
              <Link href="/disease">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ExpertProfile({
  name,
  title,
  image,
  description,
}: {
  name: string;
  title: string;
  image: string | StaticImageData;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vh"
          layout="fill"
          objectFit="contain"
          className="rounded-full w-full h-full bg-white"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <h4 className="text-[#37fbb3] mb-4">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
