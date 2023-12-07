<script lang="ts">
  import { StateHandler } from "$ts/states";
  import { State } from "$types/state";

  export let key: string;
  export let state: State;
  export let current: string;
</script>

{#if state.image}
  <div class="progress-state" class:active={current == key}>
    <img src={state.image} alt={key} />
    <span>{state.name}</span>
  </div>
{/if}
