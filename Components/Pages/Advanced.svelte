<script lang="ts">
  import { advancedOptions } from "$state/FirstTimeSetup/ts/store";
  import { StateHandler } from "$ts/states";
  import Header from "../Header.svelte";
  import AdvancedOption from "./Advanced/AdvancedOption.svelte";
  export let handler: StateHandler;
</script>

<div class="advanced-content">
  <Header noMargin>
    <h1>Advanced Options</h1>
    <p>Choose one of the following options to continue:</p>
  </Header>
  <div class="options">
    {#each advancedOptions as option}
      <AdvancedOption {option} {handler} />
    {/each}
  </div>
</div>
