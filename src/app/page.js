'use client'

import { useState } from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Footer from "./footer/Footer";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";
import Section7 from "./components/section7/Section7";
import Support from "./components/support/Support";

export default function Home({isDarkMode}) {

  return (
    <main className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Support/>
      <Footer/>
    </main>
  )
}
