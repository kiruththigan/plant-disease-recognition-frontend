"use client";

import React from "react";
import { Leaf, Search, FileText, Zap, Users, BarChart } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex flex-col mb-56">
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-[#37fbb3]">
              Our Services
            </h1>
            <p className="text-xl mb-8">
              Discover how our AI-powered plant disease recognition can
              revolutionize your agricultural practices.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#37fbb3]">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceCard
                icon={<Leaf className="h-12 w-12 text-[#37fbb3]" />}
                title="Plant Disease Detection"
                description="Our AI-powered system accurately identifies plant diseases from images, providing quick and reliable diagnoses."
              />
              <ServiceCard
                icon={<Search className="h-12 w-12 text-[#37fbb3]" />}
                title="Pest Identification"
                description="Detect and identify common agricultural pests that may be affecting your crops."
              />
              <ServiceCard
                icon={<FileText className="h-12 w-12 text-[#37fbb3]" />}
                title="Treatment Recommendations"
                description="Receive tailored treatment plans and recommendations based on the identified diseases or pests."
              />
              <ServiceCard
                icon={<Zap className="h-12 w-12 text-[#37fbb3]" />}
                title="Real-time Monitoring"
                description="Continuous monitoring of your fields with our IoT sensors for early detection of potential issues."
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#37fbb3]">
              How It Works
            </h2>
            <div className="space-y-12">
              <Step
                number={1}
                title="Upload Image"
                description="Take a photo of the affected plant or leaf and upload it to our system."
              />
              <Step
                number={2}
                title="AI Analysis"
                description="Our advanced AI algorithms analyze the image to identify diseases or pests."
              />
              <Step
                number={3}
                title="Receive Diagnosis"
                description="Get a detailed report of the identified issues and their severity."
              />
              <Step
                number={4}
                title="Treatment Plan"
                description="Receive customized treatment recommendations and best practices."
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#37fbb3]">
              Additional Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="h-12 w-12 text-[#37fbb3]" />}
                title="Expert Consultation"
                description="Connect with our agricultural experts for personalized advice and support."
              />
              <FeatureCard
                icon={<BarChart className="h-12 w-12 text-[#37fbb3]" />}
                title="Data Analytics"
                description="Access comprehensive reports and analytics to track your farm's health over time."
              />
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-[#37fbb3]" />}
                title="Integration Support"
                description="Seamlessly integrate our system with your existing farm management software."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ServiceCard({
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
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#37fbb3] text-[#020817] flex items-center justify-center text-xl font-bold mr-4">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
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
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
