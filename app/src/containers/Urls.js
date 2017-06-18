/**
 * Npm import
 */
import { connect } from 'react-redux';


/**
 * Local import
 */
import Urls from 'src/components/Urls';


/**
 * State and actions
 */
const mapStateToProps = state => ({
  shortenedUrls: state.shortenedUrls,
});

/**
 * Container creation
 */
const UrlsContainer = connect(mapStateToProps)(Urls);

/**
 * Export default
 */
export default UrlsContainer;
