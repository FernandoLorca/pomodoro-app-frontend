import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="px-5 py-2 bg-slate-900 bg-opacity-20 rounded-lg">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
