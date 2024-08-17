import Hero from "@/components/Hero";
import ProductsSection from "@/components/Products/ProductsSection";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <div
        className="container"
      >
        <ProductsSection/>
      </div>
    </main>
  );
}
