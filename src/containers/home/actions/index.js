import * as types from '../constants';

export const loadHomeDataAction = data => ({
  type: types.LOAD_HOME_DATA,
  payload: data
});
