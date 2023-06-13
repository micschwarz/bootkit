<!-- Base layout used for other layouts -->

<div id="layout" class="overflow-hidden">
  <div>
    <slot name="navbar" />
  </div>

  <div class="overflow-hidden">
    <slot name="content" />
  </div>
</div>

<style lang="scss">
  #layout {
    // Make page at least 100% of the dynamic viewport height
    // The dynamic viewport adjusts to dynamic browser elements on mobile
    height: 100dvh;

    // Give the navbar the space it needs, the rest is for content
    display: grid;
    grid-template-rows: max-content 1fr;
  }
</style>
