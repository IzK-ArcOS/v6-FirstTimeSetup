<script lang="ts">
  import { FlagIcon } from "$ts/images/general";
  import Actions from "../Actions.svelte";
  import Action from "../Actions/Action.svelte";
  import Header from "../Header.svelte";

  function finish() {
    location.reload();
  }
</script>

<Header img={FlagIcon}>
  <h1>All finished!</h1>
  <p>We have everything we need</p>
</Header>
<p class="spaced">
  We've collected all the info we need. <br />
  Click <b>Let's go!</b> to start using ArcOS.
</p>

<Actions>
  <Action fun={finish} suggested>Let's go!</Action>
</Actions>
