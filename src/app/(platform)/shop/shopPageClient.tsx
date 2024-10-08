import { Command, CommandInput } from "@/components/ui/command";
import MerchCard from "./_components/MerchCard";

function ProductOverveiw() {
  const stars = Array.from({ length: 35 }, (_, index) => (
    <MerchCard
      src="/Images/cup.png"
      creator={{ name: "Monster", image: "/Icons/brand-3.svg" }}
      bgGradient="bg-[linear-gradient(137.5deg,_#00FFFF_-0.65%,_#000080_102.78%)]"
      isFavourite={true}
      name="Superteam Cup"
      price={23.0}
      key={index}
    />
  ));
  return (
    <main>
      <Command className="bg-primary px-8">
        <CommandInput
          className="w-[42%] mx-auto mt-12 border border-borderColor rounded-[2rem] h-[3.5rem] px-8"
          placeholder="Search for products"
        />
        <p className="mt-12 text-gray-400">Products</p>
        <div className="mt-5 grid grid-cols-auto-fill-minmax gap-12 justify-center">
          {stars}
        </div>
      </Command>
    </main>
  );
}
export default ProductOverveiw;
