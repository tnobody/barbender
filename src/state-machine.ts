export type Action<Name extends string, T = any> = { type: Name; data: T };

export const stateMachine = <A extends Action<string>, State>(
  initialState: State,
  reducer: (state: State, action: A) => State
) => {
  let state = initialState;
  return (onChange: (newState: State) => void) => {
    const dispatch = (action: A) => {
      state = reducer(state, action);
      onChange?.(state);
    };

    return dispatch;
  };
};
