import PropTypes from "prop-types";
import Star from "../assets/Star";

const Link = (props) => {
  return (
    <>
      <div className="m-2 flex justify-center items-center space-x-2 cursor-pointer" onClick={() => (window.location.href = props.href)}>
        <Star />
        <h1 className="hover:underline transition ease-in-out duration-300">{props.text}</h1>
      </div>
    </>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
