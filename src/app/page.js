import { About, Contact, Footer, Hero, Projects, Skills } from "./components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
