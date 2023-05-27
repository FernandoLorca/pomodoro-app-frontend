import PropTypes from 'prop-types';

const NavigationButton = ({ text }) => {
  return (
    <button className="rounded-lg px-5 py-2 font-semibold hover:opacity-80">
      {text}
    </button>
  );
};

NavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavigationButton;
