const LOGIN = 'unit-testing-workshop/LOGIN';

interface LoginState {
  email: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: LoginState;
}

type LoginActionTypes = LoginAction;

const initialState: LoginState = {
  email: ''
};

export default function reducer(state = initialState, action: LoginActionTypes) {
  const { payload } = action;
  const actions = {
    [LOGIN]: () => payload,
    default: () => state
  };

  return (actions[action.type] || actions.default)();
}

export function updateLogin(login: LoginState): LoginAction {
  return {
    type: LOGIN,
    payload: login
  };
}
