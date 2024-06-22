<script lang="ts">
  import { SecureIcon } from "$ts/images/general";
  import { createErrorDialog } from "$ts/process/error";
  import { StateHandler } from "$ts/states";
  import { ProcessStack } from "$ts/stores/process";
  import axios from "axios";
  import { onMount } from "svelte";
  import Actions from "../Actions.svelte";
  import Action from "../Actions/Action.svelte";
  import Help from "./License/Help.svelte";
  import { ErrorIcon } from "$ts/images/dialog";

  export let handler: StateHandler;

  let license = "";
  let licensePid = 0;
  let errored = false;

  onMount(async () => {
    try {
      const response = await axios.get("./LICENSE");

      license = response.data;
      throw "y";
    } catch {
      errored = true;
    }
  });

  async function back() {
    await ProcessStack.kill(licensePid, true);
    handler.navigate("welcome");
  }

  async function accept() {
    await ProcessStack.kill(licensePid, true);
    handler.navigate("connect");
  }

  async function help() {
    if (licensePid) return;

    licensePid = await createErrorDialog(
      {
        title: "License info",
        component: Help,
        buttons: [
          {
            caption: "Okay",
            action() {
              licensePid = 0;
            },
          },
        ],
        image: SecureIcon,
        sound: "arcos.dialog.info",
      },
      0,
      true,
    );
  }

  function onlineLicense() {
    window.open("https://www.gnu.org/licenses/gpl-3.0-standalone.html", "_blank");
  }
</script>

<div class="license-content">
  <div class="license-header">
    <div class="text">
      <h1>License Agreement</h1>
      <p class="sub">By using ArcOS, you agree to the GPLv3 License.</p>
    </div>
    <div class="right">
      <img src={SecureIcon} alt="" />
    </div>
  </div>
  {#if !errored}
    <textarea value={license} class="license" spellcheck="false" readonly />
  {:else}
    <div class="license-error">
      <img src={ErrorIcon} alt="" />
      <p>
        The license couldn't be found. If you want to view it, click the button to view an online
        version:
      </p>
      <button class="suggested" on:click={onlineLicense}>View Online</button>
    </div>
  {/if}
  <div class="bottom">
    <button class="material-icons-round" on:click={help}>info</button>
    <Actions inline>
      <Action fun={back}>Go Back</Action>
      <Action fun={accept} suggested>I Accept</Action>
    </Actions>
  </div>
</div>
