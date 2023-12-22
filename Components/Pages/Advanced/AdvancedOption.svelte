<script lang="ts">
  import { AdvancedOption } from "$state/FirstTimeSetup/types/advanced";
  import { StateHandler } from "$ts/states";

  export let option: AdvancedOption;
  export let handler: StateHandler;
</script>

{#if option}
  <button
    class="advanced-option"
    on:click={async () => await option.action(handler)}
  >
    <img src={option.image} alt="" />
    <div>
      <p class="title">{option.name}</p>
      <p class="description">{option.description}</p>
    </div>
  </button>
{/if}
