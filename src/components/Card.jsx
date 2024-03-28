import PropTypes from "prop-types";

const Card = (props) => {
  const onHover = () => {
    document.getElementById(props.idH1).style.opacity = "1";
  };
  const offHover = () => {
    document.getElementById(props.idH1).style.opacity = "0";
  };

  return (
    <>
      <div id={props.id} data-aos="fade-down" data-aos-duration="2000" className="m-5 flex flex-col outline outline-2 outline-[#5f5390]  rounded-lg">
        <div className="relative" onMouseEnter={onHover} onMouseLeave={offHover}>
          <img src={props.src} alt="" className="rounded-lg hover:opacity-25 transition ease-in-out duration-300 cursor-pointer" onClick={() => (window.location.href = props.url)} />
          <div className="absolute inset-20 flex justify-center items-center">
            <h1 id={props.idH1} className="font-bold font-['Basic, sans-serif'] uppercase cursor-pointer text-white transition opacity-0 duration-300 ease-in-out">
              Click to View
            </h1>
          </div>
        </div>
        <div className="p-5">
          <h1 className="font-bold font-['Basic, sans-serif'] capitalize select-none text-white">
            {props.name} <span className="font-semibold font-['Basic, sans-serif'] normal-case  select-none text-slate-400"> | </span> {props.part}{" "}
            <span className="font-semibold font-['Basic, sans-serif'] normal-case select-none text-slate-400"> | </span> {props.workFor}
          </h1>
          <p className="font-['Basic, sans-serif']  select-none text-slate-400">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  idH1: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  workFor: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
