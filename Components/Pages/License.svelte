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

  export let handler: StateHandler;

  let license = "";
  let licensePid = 0;

  onMount(async () => {
    try {
      const response = await axios.get("/LICENSE");

      license = response.data;
    } catch {
      license = "404 NOT FOUND";
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
      true
    );
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
  <textarea value={license} class="license" spellcheck="false" readonly />
  <div class="bottom">
    <button class="material-icons-round" on:click={help}>info</button>
    <Actions inline>
      <Action fun={back}>Go Back</Action>
      <Action fun={accept} suggested>I Accept</Action>
    </Actions>
  </div>
</div>
