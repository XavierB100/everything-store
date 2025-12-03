import Hero from "@/components/home/Hero";
import ProductHighlight from "@/components/home/ProductHighlight";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProductHighlight />
      <Testimonials />
    </div>
  );
}
