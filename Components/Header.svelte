<script lang="ts">
  export let img = "";
  export let noMargin = false;
  export let flex = false;
</script>

<div class="header" class:noMargin>
  {#if img}
    <img src={img} alt="" class="image" />
  {/if}
  <div class="slot" class:flex>
    <slot />
  </div>
</div>
