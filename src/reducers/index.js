import { combineReducers } from 'redux';
import { showBanners} from './banners';
import { showStories, viewStorie } from './stories';
import { showAlliances } from './alliances';
import {showTeachers} from './teachers';
import {showResolutions, searchResolutions} from './resolutions';
import {postsReducer} from './contact';
import {showCalls} from './calls';
import {showNews} from './news';
import {showQuotations} from './quotations';
import {showActivities} from './activities';
import {showResponsibilities} from './responsibilities';
import {configuration} from './configuration';
const rootReducer = combineReducers({
  banner: showBanners,
  storie: showStories,
  view: viewStorie,
  alliance: showAlliances,
  teachers: showTeachers,
  resolutions: showResolutions,
  resultResolutions: searchResolutions,
  posts: postsReducer,
  calls: showCalls,
  news: showNews,
  quotations: showQuotations,
  activities: showActivities,
  responsibilities: showResponsibilities,
  configuration:configuration
});

export default rootReducer;
