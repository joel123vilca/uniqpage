import { combineReducers } from 'redux';
import { showBanners } from './banners'

const rootReducer = combineReducers({
  banner: showBanners
});

export default rootReducer;
