import { combineReducers } from 'redux';
import { showBanners} from './banners';
import { showStories, viewStorie } from './stories';
import { showAlliances } from './alliances';
import {showTeachers} from './teachers';
import {showResolutions} from './resolutions';

const rootReducer = combineReducers({
  banner: showBanners,
  storie: showStories,
  view: viewStorie,
  alliance: showAlliances,
  teachers: showTeachers,
  resolutions: showResolutions
});

export default rootReducer;
