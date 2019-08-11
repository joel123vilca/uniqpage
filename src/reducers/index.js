import { combineReducers } from 'redux';
import { showBanners} from './banners';
import { showStories, viewStorie } from './stories';
import { showAlliances } from './alliances';

const rootReducer = combineReducers({
  banner: showBanners,
  storie: showStories,
  view: viewStorie,
  alliance: showAlliances
});

export default rootReducer;
