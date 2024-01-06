import Image from "next/image";
import Header from "./components/Header";
import InsurewiseLogo from "../public/insurewise.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fcfcfc] flex justify-center items-center h-screen flex-col  ">
      <Link href="/login">
        {/* <Image alt="Insurewise" src={InsurewiseLogo} /> */}
      </Link>
    </main>
  );
}
