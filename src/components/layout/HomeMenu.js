import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className=" py-20">
      <div className="absolute left-0 right-0 w-full">
        <div className="h-48 w-48 -top-[70px] absolute -left-12 -z-10">
          <Image
            src={"/sallad1.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"salad"}
          />
        </div>
        <div className="h-48 w-48 -top-[100px] absolute -right-12 -z-10">
          <Image
            src={"/sallad2.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"salad"}
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        ></SectionHeaders>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
