import Image from "next/image";
import Header from "./components/Header";
import WastifyLogo from "../public/wastify.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fcfcfc] flex justify-center items-center h-screen flex-col  ">
      <Link href="/login">
        <Image alt="Insurewise" src={WastifyLogo} />
        <button className="flex justify-center items-center flex-col py-3 px-4 rounded-e-lg bg-[#358048] m-1 text-[#fcfcfc] font-[500]">Proceed to Dashboard</button>
      </Link>
    </main>
  );
}
