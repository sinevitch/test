import { ActionsCore } from '../modules/core/coreReducer';
import { ActionsRoot } from '../modules/rootReducer';

export const Actions = (reducer) => {
  switch (reducer) {
    case 'core':
      return ActionsCore;
    case 'root':
      return ActionsRoot;
    default:
      return false;
  }
};
