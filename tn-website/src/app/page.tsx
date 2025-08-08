import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Triangle positioned top right */}
      <div className="mt-[110px] ml-[818px]">
        <Image src="/triangle.png" alt="Triangle" width={364} height={89} />
      </div>

      {/* Name text */}
      <div className="main ml-[156px] mt-[10px]">
        <h1 className="text-white text-[45px]">Tyler Nguyen</h1>
        <div className="h-[13px] w-[1026] bg-[#FEF62A]"></div>
        <h2 className="text-[35px]">Full-Stack Engineer</h2>
      </div>
    </main>
  );
}


