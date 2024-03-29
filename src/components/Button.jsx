import PropTypes from "prop-types";
import RightArrow from "./RightArrow";

const Button = ({ id, text, type, url }) => {
  const onHover = () => {
    document.getElementById(id).style.transform = "translate(10px,0px)";
  };
  const offHover = () => {
    document.getElementById(id).style.transform = "translate(0px,0px)";
  };

  const onClick = () => {
    if (url === undefined) {
      return;
    }

    window.location.href = url;
  };

  return (
    <>
      <button className="p-5 ps-7 pe-7 flex justify-center items-center uppercase font-bold font-['Basic, sans-serif'] rounded-md bg-primary" onMouseEnter={onHover} onMouseLeave={offHover} type={type} onClick={onClick}>
        {text}
        <div id={id} className="ms-2 transition duration-300 ease-in-out">
          <RightArrow />
        </div>
      </button>
    </>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
