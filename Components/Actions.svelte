<script lang="ts">
  export let right = false;
  export let inline = false;
</script>

<div class="actions" class:right class:inline>
  <div class="inner">
    <slot />
  </div>
</div>
