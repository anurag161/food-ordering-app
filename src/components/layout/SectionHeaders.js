export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase font-semibold text-gray-700 leading-400">
        {subHeader}
      </h3>
      <h2 className="text-orange-600 italic font-bold text-4xl">
        {mainHeader}
      </h2>
    </>
  );
}
