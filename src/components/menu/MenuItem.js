import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/50">
      <div className="text-center">
        <img
          src="./pizza.png"
          className="max-h-auto max-h-24 mx-auto block"
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pizza</h4>
      <p className="text-gary-500 text-sm line-clamp-3">lorem epsum</p>
      <button className="text-white font-semibold bg-red-600 mt-4 px-8 py-2 rounded-full">
        Add to Cart $12
      </button>
    </div>
  );
}
