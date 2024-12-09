import type { Metadata } from "next";
import { Inter, Oswald, Exo_2 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer/Footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/header/Navbar";

// "https://amaranth-sore-takin-769.mypinata.cloud/ipfs/QmUuLGQUrukFr6rKWwNn7aQCinxvP7LHecHSf6YEyWgzvW" //social 610kb
// "https://amaranth-sore-takin-769.mypinata.cloud/ipfs/QmVG7jUv8HrwfvHG5CwQ4yhYp1sHauYCfsQy9vKS7XATV1" //social 800kb

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata: Metadata = {
  title: "Plant Disease Recognition System",
  description:
    "Identify plant diseases quickly and get expert treatment advice.",
  keywords: [
    "Plant Disease Recognition System",
    "Plant Disease",
    "Plant",
    "Disease",
    "Leaf Disease",
    "Plant Health",
    "Tree Health",
    "Leaf Health",
    "Tree Disease",
  ],
  openGraph: {
    title: "Plant Disease Recognition System",
    description:
      "Identify plant diseases quickly and get expert treatment advice.",
    url: "https://plant-disease-recognition-frontend.vercel.app/",
    siteName: "Plant Disease Recognition System.",
    images: [
      {
        url: "https://amaranth-sore-takin-769.mypinata.cloud/ipfs/QmVG7jUv8HrwfvHG5CwQ4yhYp1sHauYCfsQy9vKS7XATV1",
        width: 800,
        height: 600,
        alt: "Plant Disease Recognition System",
      },
      {
        url: "https://amaranth-sore-takin-769.mypinata.cloud/ipfs/QmVG7jUv8HrwfvHG5CwQ4yhYp1sHauYCfsQy9vKS7XATV1",
        width: 1800,
        height: 1600,
        alt: "Plant Disease Recognition System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plant Disease Recognition System",
    description:
      "Identify plant diseases quickly and get expert treatment advice.",
    images: [
      "https://amaranth-sore-takin-769.mypinata.cloud/ipfs/QmVG7jUv8HrwfvHG5CwQ4yhYp1sHauYCfsQy9vKS7XATV1",
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} ${oswald.variable} ${exo2.variable} dark:text-[#37FBB3] `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen flex flex-col justify-between items-center relative">
              <Navbar />
              <div className="w-full md:container">
                {children}
                <Toaster position="top-right" richColors />
              </div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
