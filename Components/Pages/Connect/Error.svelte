<script lang="ts">
  import { WarningIcon } from "$ts/images/dialog";
  import Actions from "../../Actions.svelte";
  import Action from "../../Actions/Action.svelte";
  import Header from "../../Header.svelte";

  export let errored: boolean;

  async function retry() {
    errored = false;
  }
</script>

<Header img={WarningIcon}>
  <h1>Couldn't connect</h1>
  <p class="subheader">We didn't hear back from our server</p>
</Header>
<p class="spaced">
  Connecting to our Community API failed. Please check your<br />
  internet connection, and then try again.
</p>
<Actions>
  <Action fun={retry}>Retry</Action>
</Actions>
