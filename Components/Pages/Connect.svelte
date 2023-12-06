<script lang="ts">
  import { StateHandler } from "$ts/states";
  import Error from "./Connect/Error.svelte";
  import Normal from "./Connect/Normal.svelte";

  export let handler: StateHandler;

  let errored = false;
</script>

<div class="connect-content">
  {#if !errored}
    <Normal {handler} bind:errored />
  {:else}
    <Error bind:errored />
  {/if}
</div>
