/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Component
 */
class Shortener extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    inputUrl: PropTypes.string.isRequired,
    generatedUrl: PropTypes.string.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
  };

  /**
   * State
   */
  state = {
    errorAnimation: false,
  }


  /**
   * Actions
   */
  onChange = (evt) => {
    this.props.actions.changeInputUrl(evt.target.value);
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    const { inputUrl, actions } = this.props;
    const reg = /^https?:\/\/[\w.-]{2,}\.[a-z]{2,8}[\w.\-&?=/]*$/i;

    if (reg.test(inputUrl)) {
      actions.submitUrl();
    }
    else {
      this.setState({ errorAnimation: true });
    }
  };

  doCopy = () => {
    document.getElementById('shortened-url').select();
    document.execCommand('copy');
  };


  /**
   * Vue
   */
  render() {
    const { onSubmit, onChange, doCopy } = this;
    const { inputUrl, generatedUrl } = this.props;
    const { errorAnimation } = this.state;

    return (
      <div id="shortener">
        <div id="shortener-container">

          <form
            id="shortener-container-form"
            className={errorAnimation && 'error'}
            onAnimationEnd={() => this.setState({ errorAnimation: false })}
            onSubmit={onSubmit}
          >
            <input
              placeholder="Collez votre url ici"
              onChange={onChange}
              onFocus={evt => evt.target.select()}
              value={inputUrl}
            />
            <button>Raccourcir</button>
          </form>

          <div id="shortener-container-result">
            <input
              id="shortened-url"
              value={generatedUrl}
              placeholder="L'url raccourcie apparaitra ici"
              onChange={() => 'can\'t touch this !'}
              onFocus={evt => evt.target.select()}
            />
            <button onClick={doCopy}>Copier</button>
          </div>

        </div>
      </div>
    );
  };
};


/**
 * Export default
 */
export default Shortener;
