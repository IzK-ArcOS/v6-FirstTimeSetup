<script lang="ts">
  import { StateHandler } from "$ts/states";
  import { State } from "$types/state";

  let current = "";

  export let handler: StateHandler;
  export let key: string;
  export let state: State;

  handler.current.subscribe((v) => (current = v.key));
</script>

{#if state.image}
  <div class="progress-state" class:active={current == key}>
    <img src={state.image} alt={key} />
    <span>{state.name}</span>
  </div>
{/if}
