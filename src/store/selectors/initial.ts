import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { TestInfoTypes } from '@/store/reducers/initial';

const selectInitial = (state: State) => state.initialReducer;

export const selectTestData: Selector<State, TestInfoTypes | null> = createSelector(
  selectInitial,
  ({ testInfo }) => testInfo,
);
