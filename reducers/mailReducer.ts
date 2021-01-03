import React from "react";
import { useImmerReducer } from "use-immer";

type State = {
  openComposeMessage: boolean;
  selectedMail: any | null; // TODO: Proper typing for selectedMail
  user: any | null; // TODO: Proper typing for user
};

type Action =
  | { type: "openComposeMessage" | "closeComposeMessage" }
  | { type: "selectMail"; payload: any } // TODO: Proper typing for payload
  | { type: "login"; payload: any } // TODO: Proper typing for payload
  | { type: "logout" };

const initialState: State = {
  openComposeMessage: false,
  selectedMail: null,
  user: null,
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
    case "selectMail": {
      draft.selectedMail = action.payload;
      return;
    }
    case "login": {
      draft.user = action.payload;
      return;
    }
    case "logout": {
      draft.user = null;
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
