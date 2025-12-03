import Hero from "@/components/home/Hero";
import ProductHighlight from "@/components/home/ProductHighlight";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProductHighlight />
    </div>
  );
}
