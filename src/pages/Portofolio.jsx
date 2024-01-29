import Card from "../components/Card";
import projects from "../data/projects";

const Portofolio = () => {
  const Projects = [];

  for (let i = 0; i < projects.length; i++) {
    Projects.push(<Card id={projects[i].id} idH1={`idH1${i}`} src={projects[i].img} name={projects[i].name} desc={projects[i].desc} url={projects[i].url} part={projects[i].part} workFor={projects[i].workFor} />);
  }

  return (
    <>
      <section id="portofolio">
        <div className="ps-24 pt-14 pe-24 flex flex-col space-y-8 max-md:p-2 max-md:pt-6 max-lg:p-6">
          <div className="space-y-5 max-md:text-center max-md:space-y-2">
            <h1 className="font-semibold font-['Basic, sans-serif'] uppercase select-none text-4xl text-[#5f5390]">portofolio</h1>
            <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-7xl text-white max-md:text-4xl">Launched</h1>
          </div>
          <div className="flex max-md:flex-col ">
            <div id="cardWrapper" className="flex justify-evenly items-center flex-wrap ">
              {Projects}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
