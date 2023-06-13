<div class="sidebar bg-light overflow-y-auto h-100">
  <slot />
</div>

<style lang="scss">
  // Use var(--sidebar-width) as a baseline width
  .sidebar {
    width: var(--sidebar-width);
  }
</style>
