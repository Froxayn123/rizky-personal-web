import { Skillss } from "../data/Skillss";
import Icon from "../components/Icon";

const Skills = () => {
  const SKILLS = [];

  for (let i = 0; i < Skillss.length; i++) {
    SKILLS.push(<Icon id={Skillss[i].id} id1={`id${Skillss[i].id}`} src={Skillss[i].img} name={Skillss[i].name} level={Skillss[i].level} desc={Skillss[i].desc} color={Skillss[i].color} />);
  }

  return (
    <>
      <section id="skills">
        <div className="pb-8 ps-24 pt-14 pe-24 flex flex-col space-y-8 max-md:p-2 max-lg:p-6">
          <div className="flex flex-col justify-end items-end space-y-5 max-md:justify-center max-md:items-center max-md:space-y-2">
            <h1 className="font-semibold font-['Basic, sans-serif'] uppercase select-none text-4xl text-[#5f5390]">skills</h1>
            <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-7xl text-white max-md:text-4xl">technologies</h1>
          </div>
          <div id="skillsWrapper" data-aos-easing="linear" className="flex justify-evenly items-center flex-wrap max-md:flex-col ">
            {SKILLS}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
