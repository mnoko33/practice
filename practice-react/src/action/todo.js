import { createAction } from 'redux-actions';

export const CREATE = 'todo/CREATE';
export const CHANGE_ISDONE = 'todo/CHANGE_ISDONE';

export const create = createAction(CREATE);
export const changeIsDone = createAction(CHANGE_ISDONE);