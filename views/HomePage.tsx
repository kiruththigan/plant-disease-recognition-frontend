"use client";

import { useState } from "react";
import {
  Leaf,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(1);
  const { push } = useRouter();

  const steps = [
    {
      title: "Upload Image",
      description:
        "Take a clear photo of the plant leaf or upload an existing image.",
    },
    {
      title: "Analyze",
      description: "Our AI will analyze the leaf and identify any diseases.",
    },
    {
      title: "Get Results",
      description:
        "View the disease diagnosis and receive a tailored treatment guide.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-gray-100 mb-40 2xl:relative">
      <div className="hidden md:block 2xl:hidden absolute top-0 right-0 z-[-1] blur-[1px]">
        <Image
          src={"/assets/leaf-1.webp"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[239px] coin-float"
        />
      </div>
      
      <div className="absolute top-96 2xl:top-24 left-32 2xl:-left-32 z-[-1] blur-[2px] transform md:rotate-45">
        <Image
          src={"/assets/chili-1.png"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[239px] coin-float"
        />
      </div>

      <div className="absolute bottom-[1200px] sm:bottom-[900px] 2xl:bottom-44 right-32 2xl:-right-28 z-[-1] blur-[1px] transform rotate-[315deg]">
        <Image
          src={"/assets/brinjal-1.png"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[239px] coin-float"
        />
      </div>

      <div className="hidden md:block 2xl:hidden absolute bottom-80 left-0 z-[-1] blur-[1px] transform rotate-180">
        <Image
          src={"/assets/leaf-1.webp"}
          alt="bg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[239px] coin-float"
        />
      </div>
      
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-[#37fbb3]">
          Plant Disease Recognition System
        </h1>

        <Card className="w-full max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm shadow-xl border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-[#37fbb3]">
              Welcome to Your Plant Health Assistant
            </CardTitle>
            <CardDescription className="text-center text-lg text-gray-300">
              Identify plant diseases quickly and get expert treatment advice
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-center space-x-4">
              {/* <Button
                className="bg-[#37fbb3] hover:bg-[#2de29e] text-[#020817]"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" /> Upload Image
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-[#37fbb3] border-[#37fbb3] hover:bg-[#37fbb3] hover:text-[#020817]"
              >
                <Camera className="mr-2 h-5 w-5" /> Take Photo
              </Button> */}
              <Button
                className="bg-[#37fbb3] hover:bg-[#2de29e] text-[#020817]"
                size="lg"
                onClick={() => push("/disease")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    activeStep === index + 1
                      ? "border-[#37fbb3]"
                      : "border-gray-700"
                  } bg-gray-800`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-[#37fbb3]">
                      <span className="bg-[#37fbb3] text-[#020817] rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="bg-gray-800 border-[#37fbb3]">
              <AlertCircle className="h-4 w-4 text-[#37fbb3]" />
              <AlertTitle className="text-[#37fbb3]">How It Works</AlertTitle>
              <AlertDescription>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Upload or take a photo of the affected plant leaf</li>
                  <li>
                    Our AI analyzes the image using advanced deep learning
                    algorithms
                  </li>
                  <li>Receive an accurate disease diagnosis within seconds</li>
                  <li>Get a customized treatment plan and prevention tips</li>
                </ol>
              </AlertDescription>
            </Alert>
          </CardContent>
          {/* <CardFooter className="flex justify-center">
            <Button
              className="bg-[#37fbb3] hover:bg-[#2de29e] text-[#020817]"
              size="lg"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardFooter> */}
        </Card>

        <Card className="w-full max-w-4xl mx-auto mt-8 bg-gray-900/50 backdrop-blur-sm shadow-xl border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-[#37fbb3]">
              <Leaf className="mr-2 h-6 w-6" />
              About Our Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-300">
              Our Plant Disease Recognition System utilizes cutting-edge
              technology to provide you with accurate and timely plant health
              information:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Advanced image processing techniques for clear leaf analysis
              </li>
              <li>
                Deep learning models trained on thousands of plant disease
                samples
              </li>
              <li>
                Integration of TensorFlow for high-performance AI computations
              </li>
              <li>Real-time data processing for instant results</li>
              <li>
                Continuously updated database of plant diseases and treatments
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
