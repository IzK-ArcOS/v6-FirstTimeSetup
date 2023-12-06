<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ARCOS_MODE } from "$ts/metadata";
  import { StateHandler } from "$ts/states";
  import { firstTimeSetupStates } from "../ts/store";
  import ProgressState from "./Progress/ProgressState.svelte";

  export let handler: StateHandler;
</script>

<div class="progress">
  {#each [...firstTimeSetupStates] as [key, state]}
    <ProgressState {key} {handler} {state} />
  {/each}
  <div class="build">
    v{ArcOSVersion}-{ARCOS_MODE}
  </div>
</div>
