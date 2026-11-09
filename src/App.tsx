import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WhatLabsShow } from "./components/WhatLabsShow";
import { SITE } from "./data/site";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-[max(16px,env(safe-area-inset-left,0px))] sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <WhatLabsShow />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} {SITE.brand}
      </footer>
    </>
  );
}
