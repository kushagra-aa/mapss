import dynamic from "next/dynamic";

const OpenMap = dynamic(() => import("@/components/OpenMap"), { ssr: false });

export default function Home() {
  return (
    <>
      <OpenMap />
    </>
  );
}
