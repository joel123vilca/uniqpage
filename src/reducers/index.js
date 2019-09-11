import { combineReducers } from 'redux';
import { showBanners} from './banners';
import { showStories, viewStorie } from './stories';
import { showAlliances } from './alliances';
import {showTeachers} from './teachers';
import {showResolutions, searchResolutions} from './resolutions';
import {postsReducer} from './contact';
import {showCalls} from './calls';

const rootReducer = combineReducers({
  banner: showBanners,
  storie: showStories,
  view: viewStorie,
  alliance: showAlliances,
  teachers: showTeachers,
  resolutions: showResolutions,
  resultResolutions: searchResolutions,
  posts: postsReducer,
  calls: showCalls
});

export default rootReducer;
