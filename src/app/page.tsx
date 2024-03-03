import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("@/components/MyMap"), { ssr: false });

export default function Home() {
  return <MyMap />;
}
