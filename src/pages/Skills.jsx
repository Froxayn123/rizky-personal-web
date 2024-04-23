import { skills } from "../data/skills";
import Icon from "../components/Icon";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="pb-8 ps-24 pt-14 pe-24 flex flex-col space-y-8 max-md:p-2 max-lg:p-6">
          <div className="flex flex-col justify-end items-end space-y-5 max-md:justify-center max-md:items-center max-md:space-y-2">
            <h1 className="font-semibold font-['Basic, sans-serif'] uppercase select-none text-4xl text-[#5f5390]">skills</h1>
            <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-7xl text-white max-md:text-4xl">technologies</h1>
          </div>
          <div id="skillsWrapper" data-aos-easing="linear" className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 ">
            {skills.map((skill) => {
              return <Icon key={skill.id} id={skill.id} id1={`id${skill.id}`} src={skill.img} name={skill.name} level={skill.level} desc={skill.desc} color={skill.color} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
