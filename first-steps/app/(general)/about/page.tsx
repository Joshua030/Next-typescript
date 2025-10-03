import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO decription",
  keywords: ["About Page", "luis"],
};

const AboutPage = () => {
  return <span className="text-7xl">About page</span>;
};

export default AboutPage;
