<script lang="ts">
  import { attemptConnection } from "$state/FirstTimeSetup/ts/connect";
  import { ConnectIcon } from "$ts/images/general";
  import { StateHandler } from "$ts/states";
  import Actions from "../Actions.svelte";
  import Action from "../Actions/Action.svelte";
  import Header from "../Header.svelte";

  export let handler: StateHandler;
  let host = "";
  let ac = "";
  let connecting = false;
  let errored = false;

  function back() {
    handler.navigate("connect");
  }

  async function connect(e?: SubmitEvent) {
    if (e) e.preventDefault();

    if (!host) return;

    connecting = true;

    const success = await attemptConnection(host, ac);

    connecting = false;

    if (!success) return (errored = true);

    handler.navigate("finish");
  }

  function checkSubmit(e: KeyboardEvent) {
    const key = (e.key || "").toLowerCase();

    if (key !== "enter") return;

    connect();
  }
</script>

<div class="connect-custom-content">
  <Header img={ConnectIcon} flex={errored}>
    {#if errored}
      <span class="material-icons-round">error</span>
    {/if}
    <p>
      {errored
        ? "That didn't work! Please try entering the information again."
        : "Enter the following information to connect to your server"}
    </p>
  </Header>
  <form on:submit={connect} autocomplete="off">
    <div class="input" class:errored>
      <input
        type="text"
        placeholder="Server"
        autocomplete="off"
        bind:value={host}
        disabled={connecting}
        on:input={() => (errored = false)}
        on:keydown={checkSubmit}
      />
      <span class="icon material-icons-round">dns</span>
    </div>
    <div class="input" class:errored>
      <input
        type="password"
        placeholder="Authentication Code"
        autocomplete="new-password"
        bind:value={ac}
        disabled={connecting}
        on:input={() => (errored = false)}
        on:keydown={checkSubmit}
      />
      <span class="icon material-icons-round">vpn_key</span>
    </div>
  </form>
  <Actions>
    <Action fun={back} disabled={connecting}>Go Back</Action>
    <Action fun={connect} suggested disabled={!host || connecting}>
      {connecting ? "Connecting..." : "Connect"}
    </Action>
  </Actions>
</div>
