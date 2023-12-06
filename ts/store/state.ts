import Advanced from "$state/FirstTimeSetup/Components/Pages/Advanced.svelte";
import Connect from "$state/FirstTimeSetup/Components/Pages/Connect.svelte";
import CustomServer from "$state/FirstTimeSetup/Components/Pages/CustomServer.svelte";
import Finish from "$state/FirstTimeSetup/Components/Pages/Finish.svelte";
import License from "$state/FirstTimeSetup/Components/Pages/License.svelte";
import Welcome from "$state/FirstTimeSetup/Components/Pages/Welcome.svelte";
import {
  ConnectIcon,
  FlagIcon,
  SecureIcon,
  SettingsIcon,
  WaveIcon,
} from "$ts/images/general";
import { States } from "$types/state";

export const firstTimeSetupStates: States = new Map([
  [
    "welcome",
    {
      attribs: {},
      content: Welcome,
      key: "welcome",
      name: "Welcome",
      image: WaveIcon,
    },
  ],
  [
    "advanced",
    {
      attribs: {},
      content: Advanced,
      key: "advanced",
      name: "Advanced Options",
      image: SettingsIcon,
    },
  ],
  [
    "license",
    {
      attribs: {},
      content: License,
      key: "license",
      name: "License Agreement",
      image: SecureIcon,
    },
  ],
  [
    "connect",
    {
      attribs: {},
      content: Connect,
      key: "connect",
      name: "Connect to ArcAPI",
      image: ConnectIcon,
    },
  ],
  [
    "connect-custom",
    {
      attribs: {},
      content: CustomServer,
      key: "connect-custom",
      name: "Connect to Custom Server",
    },
  ],
  [
    "finish",
    {
      attribs: {},
      content: Finish,
      key: "finish",
      name: "All finished!",
      image: FlagIcon,
    },
  ],
]);
