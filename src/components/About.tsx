

export default function About() {
  return (
    <div className="flex flex-col gap-6 font-sg text-4xl" id="about" >
      <div className="flex justify-between">
        <p
          className={` text-black dark:text-white `}
        >
          Hi, I&apos;m 
          <span className="bg-gradient-to-r from-[#eeff00] to-[#28d2d9] text-transparent bg-clip-text p-2">
            Riaz !
          </span>
        </p>

      </div>
      <p className={`text-lg text-gray-400`}>
        I&apos;m a software engineer, mainly into machine learning and full stack dev, but also like to play around with game dev and low level systems.
      </p>

      
    </div>
  );
}