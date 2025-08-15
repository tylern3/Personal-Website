import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mt-[10%] flex justify-end mr-[10%]">
        <Image src="/triangle.png" alt="Triangle" width={364} height={89}/>
      </div>

      {/* Name text */}
      <div className="main ml-[10%] mt-[10px]">
        <h1 className="text-white text-[45px]">Tyler Nguyen</h1>
        <div className="h-[13px] w-[89%] bg-[#FEF62A]"></div>
        <h2 className="text-[35px]">Full-Stack Engineer</h2>
        <p>I'm a Full-Stack Developer, and a current Computer Science student. I am engaged in </p>
      </div>
    </main>
  );
}


