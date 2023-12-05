<script lang="ts">
  export let img = "";
  export let noMargin = false;
</script>

<div class="header" class:noMargin>
  {#if img}
    <img src={img} alt="" class="image" />
  {/if}
  <div class="slot">
    <slot />
  </div>
</div>
