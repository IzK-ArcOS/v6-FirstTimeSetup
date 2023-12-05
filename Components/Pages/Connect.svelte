<script lang="ts">
  import { ConnectIcon } from "$ts/images/general";
  import { StateHandler } from "$ts/states";
  import Actions from "../Actions.svelte";
  import Action from "../Actions/Action.svelte";
  import Header from "../Header.svelte";

  export let handler: StateHandler;

  function community() {}
  function custom() {
    handler.navigate("connect-custom");
  }
</script>

<div class="connect-content">
  <Header img={ConnectIcon}>
    <h1>Connect to ArcAPI</h1>
    <p class="subheader">Quite a useful thing</p>
  </Header>
  <p class="spaced">
    Do you want to connect using the Community API, or<br />
    a custom one?
  </p>
  <Actions>
    <Action fun={community} suggested>Use Community</Action>
    <Action fun={custom}>Custom...</Action>
  </Actions>
</div>
