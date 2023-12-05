import { StateHandler } from "$ts/states";
import { firstTimeSetupStates } from "./store";

export const FirstTimeSetupState = new StateHandler(
  "fts",
  firstTimeSetupStates,
  "welcome"
);
