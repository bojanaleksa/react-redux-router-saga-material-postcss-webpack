import { createSelector } from 'reselect';

const path = (state) => state.routing.locationBeforeTransitions.pathname;

export const getPath = createSelector(
  [ path ],
  path => path
)