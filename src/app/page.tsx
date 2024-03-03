import dynamic from "next/dynamic";

const LeafMap = dynamic(() => import("@/components/LeafMap"), { ssr: false });

export default function Home() {
  return (
    <>
      <LeafMap />
    </>
  );
}
