<script lang="ts">
  import { Logo } from "$ts/branding";
  import { StateHandler } from "$ts/states";
  import Actions from "../Actions.svelte";
  import Action from "../Actions/Action.svelte";
  import Header from "../Header.svelte";
  export let handler: StateHandler;

  function getStarted() {
    handler.navigate("license");
  }
  function advanced() {
    handler.navigate("advanced");
  }
</script>

<Header img={Logo()}>
  <h1>Welcome</h1>
  <p class="subheader">Let's get ArcOS set up.</p>
</Header>

<p class="spaced">To set up this installation of ArcOS, click Get Started.</p>

<Actions>
  <Action fun={getStarted} suggested>Get Started</Action>
  <Action fun={advanced}>Advanced...</Action>
</Actions>
