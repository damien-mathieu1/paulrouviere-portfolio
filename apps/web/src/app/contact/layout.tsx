import { Metadata } from "next";
import Header from "@/components/sections/header/cozy/header";

export const metadata: Metadata = {
  title: "Contact - Paul Rouvière",
  description: "Get in touch with Paul Rouvière",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
