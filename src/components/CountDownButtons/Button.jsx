import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-opacity-100">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
