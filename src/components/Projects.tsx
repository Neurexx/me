import Link from "next/link";


const projectsData=[
    {
      name: "TestVault",
      description: "Platform for college students to take online exams, download papers, keep track of progress, discuss with community and much more",
      deployed: "testvault.vercel.app",
      github: "https://github.com/Neurexx/testvault",
      tech: [
        "Next.js",
        "Tailwind",
        "MongoDB",

        
      ],
      image: "https://raw.githubusercontent.com/Neurexx/testvault/refs/heads/main/src/app/favicon.ico"
    },
    {
      name: "Klum",
      description: "Whiteboard app with realtime collaboration",
      deployed: "klum.vercel.app",
      github: "https://github.com/Neurexx/kiti",
      tech: [
        "React",
        "Go",
        
      ],
      image: "https://raw.githubusercontent.com/Neurexx/kiti/e3991ad25769f755de377780f56f6e7045432bee/public/klum.svg"
    },
    {
        name: "Kinohunt",
        description: "A place to discover films, share reviews and recommendations, have watch parties with friends",
        
    
        tech: [
          "React",
          "Go",
          "Postgres",
          "Pytorch"
          
        ],
        image: "https://raw.githubusercontent.com/Neurexx/testvault/refs/heads/main/src/app/favicon.ico"
      }
  ]

export default function Projects() {
  return (
    <div id="projects" className="font-sg">
      <p
        className={` text-4xl text-black dark:text-white`}
      >
        Projects
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2   gap-6">
      {projectsData.map((project: any, i: number) => {
  return (
    <div
      key={i}
      className="p-4 rounded-md border rounded-tr-none border-t-4 hover:border-blue-200 dark:border-neutral-900 dark:hover:border-neutral-800 dark:hover:shadow-sm dark:hover:shadow-fuchsia-950 duration-300 group"
    >
      <div className="grid grid-rows-[auto_1fr_auto_auto] h-full gap-4">
        <div className="flex justify-between items-center">
          <img
            src={project.image}
            width={500}
            height={500}
            alt="logo"
            className="w-12 h-12 rounded-full bg-white"
          />{project.github && <Link href={project.github} className="hover:text-gray-400 w-8 h-8">
          <img src="/github-mark.svg" alt="gh" />
          </Link>
          }
          
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold text-black dark:text-white">
            {project.name}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {project.description}
          </p>
        </div>

        <Link
          href={`https://${project.deployed}`}
          className="text-sm text-gray-400 flex gap-2 items-center group-hover:text-blue-500"
          target="_blank"
        >
          <p>{project.deployed}</p>
        </Link>

        <div className="flex gap-2 flex-wrap">
          {project.tech.map((t: string, i: number) => (
            <p
              key={i}
              className="border dark:border-neutral-800 rounded-lg p-2 w-fit text-gray-400 text-xs bg-slate-200 dark:bg-transparent"
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
})}
      </div>

      
    </div>
  );
}