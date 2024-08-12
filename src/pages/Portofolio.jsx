import Card from "../components/Card";
import { projects } from "../data/projects";

const Portofolio = () => {
  return (
    <>
      <section id="portofolio">
        <div className="ps-24 pt-14 pe-24 flex flex-col space-y-8 max-md:p-2 max-md:pt-6 max-lg:p-6">
          <div className="space-y-5 max-md:text-center max-md:space-y-2">
            <h1 className="font-semibold font-['Basic, sans-serif'] uppercase select-none text-4xl text-[#5f5390]">portofolio</h1>
            <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-7xl text-white max-md:text-4xl">Launched</h1>
          </div>
          <div className="flex">
            <div id="cardWrapper" className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3">
              {projects.map((project, i) => {
                return <Card key={project.id} idS1={`idS1${i}`} idS2={`idS2${i}`} src={project.img} name={project.name} desc={project.desc} url={project.url} part={project.part} workFor={project.workFor} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
