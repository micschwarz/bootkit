<!-- Layout with a navbar and a sidebar -->

<script lang="ts">
  import Icon from '../Icon.svelte';
  import BaseLayout from './BaseLayout.svelte';
  import Navbar from './navbar/Navbar.svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';

  let isSidebarShown = true;
  const toggleSidebar = () => {
    isSidebarShown = !isSidebarShown;
  };
</script>

<BaseLayout>
  <Navbar slot="navbar">
    <!-- Add a toggle button for the sidebar to the navbar -->
    <button slot="left" class="btn btn-primary" on:click={toggleSidebar}>
      <Icon icon={faBars} />
    </button>
  </Navbar>
  <!--
		Make everything full height, but don't allow scroll (overflow-hidden).
		Scroll is handled by the container and sidebar itself,
		in order to let them both be scrolled independently -->
  <div slot="content" id="sidebar-container" class="h-100 overflow-hidden" class:show={isSidebarShown}>
    <div class="sidebar-container z-1">
      <aside class="h-100 overflow-hidden">
        <slot name="sidebar" />
      </aside>
    </div>

    <main class="overflow-auto">
      <div class="container">
        <slot name="content" />
      </div>
    </main>
  </div>
</BaseLayout>

<style lang="scss">
  // Code based on https://web.dev/building-a-sidenav-component/

  @import '../easing.scss';
  @import '../bootstrap/media.scss';

  #sidebar-container {
    // Size of sidebar
    --sidebar-width: min(17rem, 100dvw);

    // Display sidebar and content side-by-side
    display: grid;
    grid-template-rows: [stack] 1fr;
    grid-template-columns: max-content [stack] 1fr;

    // Make the sidebar container not have any width
    .sidebar-container {
      transition: width 0.15s $easeOutCubic;
      width: 0;
    }

    // When the sidebar is shown, make the sidebar container to have the sidebars width
    &.show .sidebar-container {
      width: var(--sidebar-width);
    }

    // On mobile: Stack sidebar and content on top of each other
    // and make the sidebar column of width 0, in order for the animation to work
    @include media-breakpoint-down(md) {
      grid-template-columns: 0 [stack] 1fr;
      &.show > * {
        grid-area: stack;
      }
    }
  }
</style>
