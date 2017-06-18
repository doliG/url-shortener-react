/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Component
import Shortener from 'src/components/Shortener';

// Actions creators
import {
  changeInputUrl,
  submitUrl,
} from 'src/store/reducer';

/**
 * State and actions
 */
const mapStateToProps = state => ({
  inputUrl: state.inputUrl,
  generatedUrl: state.generatedUrl,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    changeInputUrl: value => dispatch(changeInputUrl(value)),
    submitUrl: () => dispatch(submitUrl()),
  },
});

/**
 * Container creation
 */
const ShortenerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shortener);

/**
 * Export
 */
export default ShortenerContainer;
