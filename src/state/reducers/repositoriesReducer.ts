import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  err: string | null;
  data: string[];
}

const repositoriesInitialState = {
  loading: false,
  err: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = repositoriesInitialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES: {
      return {
        loading: true,
        err: null,
        data: [],
      };
    }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS: {
      return {
        loading: false,
        err: null,
        data: action.payload,
      };
    }
    case ActionType.SEARCH_REPOSITORIES_ERROR: {
      return {
        loading: false,
        err: action.payload,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
