<script lang="ts">
  export let suggested = false;
  export let disabled = false;
  export let fun: () => any;
</script>

<button class="action" on:click={fun} class:suggested {disabled}>
  <slot />
</button>
