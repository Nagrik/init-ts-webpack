import { createReducerFunction, ImmerReducer } from 'immer-reducer';

export interface TestInfoTypes {
  color: string
  id: number
  name: string
  pantone_value: string
  year: number
}

export interface InitState {
  testInfo: null | TestInfoTypes
}

const initialState: InitState = {
  testInfo: null,
};

export class initialReducer extends ImmerReducer<InitState> {
  setTestInfo(testInfo:TestInfoTypes) {
    this.draftState.testInfo = testInfo;
  }
}

export default createReducerFunction(initialReducer, initialState);
