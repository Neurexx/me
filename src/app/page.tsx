import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    
    <div className="mx-auto mt-12 flex flex-col gap-24">
    <About/>
    <Projects/>
    </div>
    </>
  );
}
