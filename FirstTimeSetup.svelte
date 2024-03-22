<script lang="ts">
  import StateRenderer from "$lib/StateRenderer.svelte";
  import { StartCoreProcesses } from "$ts/process/startup";
  import { ArcSoundBus } from "$ts/soundbus";
  import { StateHandler } from "$ts/states";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore, UserName, defaultUserData } from "$ts/stores/user";
  import { sleep } from "$ts/util";
  import { onMount } from "svelte";
  import Progress from "./Components/Progress.svelte";
  import "./css/fts.css";
  import { firstTimeSetupStates } from "./ts/store/state";

  let handler: StateHandler;
  let show = false;

  onMount(async () => {
    UserName.set("");
    UserDataStore.set(defaultUserData);

    ArcSoundBus.playSound("arcos.system.logon");

    ProcessStack.processes.set(new Map([]));

    await StartCoreProcesses();

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
    <Progress {handler} />
  </div>
{/if}
