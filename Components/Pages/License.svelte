<script lang="ts">
  import { SecureIcon } from "$ts/images/general";
  import { StateHandler } from "$ts/states";
  import axios from "axios";
  import { onMount } from "svelte";
  import Actions from "../Actions.svelte";
  import Action from "../Actions/Action.svelte";

  export let handler: StateHandler;

  let license = "";

  onMount(async () => {
    try {
      const response = await axios.get("/LICENSE");

      license = response.data;
    } catch {
      license = "404 NOT FOUND";
    }
  });

  function back() {
    handler.navigate("welcome");
  }

  function accept() {
    handler.navigate("connect");
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
    <button class="material-icons-round">help</button>
    <Actions inline>
      <Action fun={back}>Go Back</Action>
      <Action fun={accept} suggested>I Accept</Action>
    </Actions>
  </div>
</div>
