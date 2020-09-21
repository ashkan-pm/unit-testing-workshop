const UPDATE_USER = 'unit-testing-workshop/UPDATE_USER';

interface UserState {
  name: string;
  email: string;
}

interface UpdateUserPayload {
  name?: string;
  email?: string;
}

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: UpdateUserPayload;
}

type UserActionTypes = UpdateUserAction;

const initialState: UserState = {
  name: '',
  email: ''
};

export default function reducer(state = initialState, action: UserActionTypes) {
  const { payload } = action;
  const actions = {
    [UPDATE_USER]: () => ({ ...state, ...payload }),
    default: () => state
  };

  return (actions[action.type] || actions.default)();
}

export function updateUser(user: UpdateUserPayload): UpdateUserAction {
  return {
    type: UPDATE_USER,
    payload: user
  };
}
