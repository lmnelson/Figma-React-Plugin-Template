import {AppStoreType} from './types/app';

export type AdjustmentAction = {
  type: 'UPDATE_STORE';
  payload: any;
};

export const reducer = (state: AppStoreType, action: AdjustmentAction): AppStoreType => {
  if (action.type === 'UPDATE_STORE') {
    return {...state};
  }
  return state;
};
