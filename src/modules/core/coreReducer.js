/* eslint no-console: "off" */
import { ActionsRoot } from '../rootReducer';
import { apiGetNews } from '../../service/newsapi';

const initialState = {
  allNews: null,
  news: null,
};


const SET_ALL_NEWS = 'core/SET_ALL_NEWS';
const SET_NEWS = 'core/SET_NEWS';


export const ActionsCore = dispatch => ({
  onGetAllNews: () => dispatch(getAllNews()),
  setAllNews: value => dispatch({
    type: SET_ALL_NEWS,
    payload: value,
  }),

  setNews: value => dispatch({
    type: SET_NEWS,
    payload: value,
  }),
});

const getAllNews = () => async (dispatch) => {
  dispatch(ActionsRoot).setStateDataGetting(true);
  apiGetNews()
    .then((result) => {
      dispatch(ActionsCore).setAllNews(result.data.articles);
      dispatch(ActionsRoot).setStateDataGetting(null);
    })
    .catch((error) => {
      console.log(error);
      dispatch(ActionsRoot).setStateDataGetting(false);
    });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_NEWS:
      return {
        ...state,
        allNews: action.payload,
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default: return state;
  }
};
export default reducer;
