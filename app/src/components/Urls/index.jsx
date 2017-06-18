/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


/**
 * Local import
 */
import momentConfig from './moment.config';


/**
 * Moment config
 */
moment.locale('fr', momentConfig);


/**
 * Component
 */
const Urls = ({ shortenedUrls }) => (
  <div id="urls">
    <div id="urls-container">

      {shortenedUrls.allIds.map(id => (
        <div key={id} className="url">
          <div className="url-date">
            {moment(shortenedUrls.byId[id].generatedAt).calendar()}
          </div>
          <div className="url-original">
            <span>Url originale :</span>
            <a href={shortenedUrls.byId[id].url}>
              {shortenedUrls.byId[id].url}
            </a>
          </div>
          <div className="url-shortened">
            <span>Url raccourcie :</span>
            <a href={`http://exam.ple/${id}`}>
              {`http://exam.ple/${id}`}
            </a>
          </div>
        </div>
      ))}

    </div>
  </div>
);

Urls.propTypes = {
  shortenedUrls: PropTypes.shape({
    allIds: PropTypes.array.isRequired,
    byId: PropTypes.object.isRequired,
  }).isRequired,
};


/**
 * Export default
 */
export default Urls;
