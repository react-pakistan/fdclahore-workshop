import * as types from '../constants';

export function testAction (data) {
  return {
    type: types.TEST,
    payload: data
  };
};
