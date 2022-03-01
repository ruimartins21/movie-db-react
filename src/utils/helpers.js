import * as fetcher from '../fetcher';
import debounce from 'lodash.debounce';
import { CONSTANTS } from './constants';

export const fetchSearchResults = async (keyword, year, callback) => {
  const response = await fetcher.searchMovies(keyword, year, 1);

  callback(response);
};

export const debouncedFetchData = debounce((keyword, year, cb) => {
  fetchSearchResults(keyword, year, cb);
}, 500);

export const getLocalStorage = () => {
  const saved = localStorage.getItem(CONSTANTS.STORAGE);
  const initialValue = JSON.parse(saved);
  
  return initialValue;
};

export function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // this is still commented because it was use for reading / reporting performance data
  // console.log(`ID: ${id} \nphase: ${phase} \nactualDuration: ${actualDuration} \nbaseDuration: ${baseDuration}
  // startTime: ${startTime} \ncommitTime: ${commitTime} \n`);
}