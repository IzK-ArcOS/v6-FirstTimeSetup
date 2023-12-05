import { States } from "$types/state";
import License from "../Components/Pages/License.svelte";
import Welcome from "../Components/Pages/Welcome.svelte";

export const firstTimeSetupStates: States = new Map([
  [
    "welcome",
    {
      attribs: {},
      content: Welcome,
      key: "welcome",
      name: "Welcome",
    },
  ],
  [
    "license",
    {
      attribs: {},
      content: License,
      key: "license",
      name: "License Agreement",
    },
  ],
]);
