import { createActionCreators } from 'immer-reducer';
import { push } from 'connected-react-router';

import { initialReducer } from '@/store/reducers/initial';
import TokensLocalStorage from '@/local-storage/TokensLocalStorage';
import { AsyncAction } from '@/store/actions/common';

export const initialActions = createActionCreators(initialReducer);

export type InitialActions =
| ReturnType<typeof initialActions.setTestInfo>;

export const getTestInfo = (): AsyncAction => async (
  dispatch,
  _,
  { mainProtectedApi },
) => {
  try {
    const response = await mainProtectedApi.getTestInfo();
    dispatch(initialActions.setTestInfo(response));
  } catch (e) {
    console.log(e);
  }
};
