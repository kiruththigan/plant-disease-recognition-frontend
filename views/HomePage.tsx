"use client";

import { useState } from "react";
import {
  Upload,
  Camera,
  Leaf,
  Info,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen bg-[#020817] text-gray-100">
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
                onClick={()=>push("/disease")}
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
