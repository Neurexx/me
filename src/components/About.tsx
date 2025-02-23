import Link from "next/link";


export default function About() {
  return (
    <div className="flex flex-col gap-6 font-sg text-4xl" id="about" >
      <div className="flex justify-between">
        <p
          className={` text-black dark:text-white `}
        >
          Hi, I'm 
          <span className="bg-gradient-to-r from-[#eeff00] to-[#28d2d9] text-transparent bg-clip-text p-2">
            Riaz !
          </span>
        </p>

      </div>
      <p className={`text-lg text-gray-400`}>
        I'm a software engineer, mainly into machine learning and full stack dev, but also interested in low level systems and graphics programming.
      </p>

      
    </div>
  );
}