import React from "react";
import { useImmerReducer } from "use-immer";

type State = {
  openComposeMessage: boolean;
};

type Action = {
  type: "openComposeMessage" | "closeComposeMessage";
  payload?: any;
};

const initialState: State = {
  openComposeMessage: false,
};

const mailReducer = (draft: State, action: Action) => {
  switch (action.type) {
    case "openComposeMessage": {
      draft.openComposeMessage = true;
      return;
    }
    case "closeComposeMessage": {
      draft.openComposeMessage = false;
      return;
    }
  }
};

const useMailReducer = () => useImmerReducer(mailReducer, initialState);

// TODO: Maybe Move this somewhere else?/
const MailContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export { useMailReducer, MailContext };
