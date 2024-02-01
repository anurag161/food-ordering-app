import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everthing
          <br /> is better
          <br /> with a &nbsp;<span className="text-red-500">Pizza</span>
        </h1>
        <p className="mt-4 text-gray-900 font-semibold text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-3 mt-3 items-center text-sm">
          <button className="bg-red-600 text-white py-2 px-8 rounded-full flex gap-2">
            Order Now
            <Right />
          </button>
          <button className="font-semibold text-gray-700 flex gap-2">
            Learn More <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
