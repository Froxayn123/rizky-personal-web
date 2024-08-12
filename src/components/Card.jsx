import PropTypes from "prop-types";

const Card = ({ id, idS1, idS2, src, name, desc, url, part, workFor }) => {
  const onHover = () => {
    document.getElementById(idS1).style.opacity = "1";
    document.getElementById(idS2).style.opacity = "0.15";
  };
  const offHover = () => {
    document.getElementById(idS1).style.opacity = "0";
    document.getElementById(idS2).style.opacity = "1";
  };

  return (
    <>
      <div
        id={id}
        data-aos="fade-down"
        data-aos-duration="2000"
        className="m-5 flex flex-col outline outline-2 outline-[#5f5390]  rounded-lg cursor-pointer hover:opacity-25 transition ease-in-out duration-300"
        onClick={() => (window.location.href = url)}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
      >
        <div className="relative">
          <img id={idS2} src={src} alt="" className="rounded-lg transition ease-in-out duration-300" />
          <div className="absolute inset-20 flex justify-center items-center">
            <h1 id={idS1} className="font-bold font-['Basic, sans-serif'] uppercase cursor-pointer text-white transition opacity-0 duration-300 ease-in-out">
              Click to View
            </h1>
          </div>
        </div>
        <div className="p-5">
          <h1 className="font-bold font-['Basic, sans-serif'] capitalize select-none text-white">
            {name} <span className="font-semibold font-['Basic, sans-serif'] normal-case  select-none text-slate-400"> | </span> {part}{" "}
            <span className="font-semibold font-['Basic, sans-serif'] normal-case select-none text-slate-400"> | </span> {workFor}
          </h1>
          <p className="font-['Basic, sans-serif']  select-none text-slate-400">{desc}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  idS1: PropTypes.string.isRequired,
  idS2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  workFor: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
