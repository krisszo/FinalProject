import "../assets/css/style.css";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Homepage() {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
