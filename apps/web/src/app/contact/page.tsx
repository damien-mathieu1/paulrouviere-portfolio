import { Metadata } from "next";
import Contact from "@/components/sections/contact/cozy/contact";

export const metadata: Metadata = {
  title: "Contact - Paul Rouvière",
  description: "Get in touch with Paul Rouvière",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Contact />
    </div>
  );
}
