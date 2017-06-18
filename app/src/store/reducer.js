/**
 * Import
 */
import shortid from 'shortid';

/*
 * Types
 */
const URL_CHANGE_INPUT = 'URL_CHANGE_INPUT';
const URL_SUBMIT = 'SUBMIT_URL';


/*
 * initialState
 */
const initialState = {
  inputUrl: '',
  generatedUrl: '',
  shortenedUrls: {
    allIds: [],
    byId: {},
  },
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case URL_CHANGE_INPUT:
      return {
        ...state,
        inputUrl: action.value,
      };

    case URL_SUBMIT:
      {
        const id = shortid.generate();
        return {
          ...state,
          shortenedUrls: {
            allIds: [
              id,
              ...state.shortenedUrls.allIds,
            ],
            byId: {
              ...state.shortenedUrls.byId,
              [id]: {
                url: state.inputUrl,
                generatedAt: Date.now(),
              },
            },
          },
          generatedUrl: `http://exam.ple/${id}`,
        };
      }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const changeInputUrl = value => ({
  type: URL_CHANGE_INPUT,
  value,
});

export const submitUrl = () => ({
  type: URL_SUBMIT,
});
