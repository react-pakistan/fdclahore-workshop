import { TEST } from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case TEST:
    default:
      return state;
  };
};
