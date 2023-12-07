<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ARCOS_MODE } from "$ts/metadata";
  import { StateHandler } from "$ts/states";
  import { State } from "$types/state";
  import { firstTimeSetupStates } from "../ts/store";
  import ProgressState from "./Progress/ProgressState.svelte";

  let current: State;

  export let handler: StateHandler;

  handler.current.subscribe((v) => (current = v));
</script>

{#if current}
  <div class="progress" class:hidden={!current.image}>
    {#each [...firstTimeSetupStates] as [key, state]}
      <ProgressState {key} {state} current={current.key} />
    {/each}
    <div class="build">
      v{ArcOSVersion}-{ARCOS_MODE}
    </div>
  </div>
{/if}
