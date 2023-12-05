<script lang="ts">
  import "./css/fts.css";
  import StateRenderer from "$lib/StateRenderer.svelte";
  import { StateHandler } from "$ts/states";
  import { onMount } from "svelte";
  import { firstTimeSetupStates } from "./ts/store";
  import { sleep } from "$ts/util";

  let handler: StateHandler;
  let show = false;

  onMount(async () => {
    handler = new StateHandler("fts", firstTimeSetupStates, "welcome");

    await sleep(1000);

    show = true;
  });
</script>

{#if handler}
  <div class="fts-content fullscreen" class:show>
    <div class="content">
      <StateRenderer {handler} />
    </div>
  </div>
{/if}
