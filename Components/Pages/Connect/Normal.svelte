<script lang="ts">
  import { attemptConnection } from "$state/FirstTimeSetup/ts/connect";
  import { ConnectIcon } from "$ts/images/general";
  import { StateHandler } from "$ts/states";
  import Actions from "../../Actions.svelte";
  import Action from "../../Actions/Action.svelte";
  import Header from "../../Header.svelte";

  export let errored: boolean;
  export let handler: StateHandler;

  let connecting = false;

  async function community() {
    connecting = true;

    const success = await attemptConnection("community.arcapi.nl", "");

    connecting = false;

    if (!success) return (errored = true);

    handler.navigate("finish");
  }

  function custom() {
    handler.navigate("connect-custom");
  }
</script>

<Header img={ConnectIcon}>
  <h1>Connect to ArcAPI</h1>
  <p class="subheader">Quite a useful thing</p>
</Header>
<p class="spaced">
  Do you want to connect using the Community API, or<br />
  a custom one?
</p>
<Actions>
  <Action fun={community} disabled={connecting} suggested
    >{connecting ? "Connecting..." : "Use Community"}</Action
  >
  <Action fun={custom} disabled={connecting}>Custom...</Action>
</Actions>
