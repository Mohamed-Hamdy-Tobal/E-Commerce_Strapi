import Hero from "@/components/Hero";
import ProductsSection from "@/components/Products/ProductsSection";
import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {

  const user = await currentUser()

  console.log("USER LAYOUT : ", user)
  console.log("Name : ", `${user.firstName}`)

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
