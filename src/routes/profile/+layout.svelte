<!-- Use a different layout for everything under /profile/ -->

<script lang="ts">
  import Sidebar from '../../lib/layout/sidebar/Sidebar.svelte';
  import SidebarLayout from '../../lib/layout/SidebarLayout.svelte';
</script>

<SidebarLayout>
  <Sidebar slot="sidebar">Profile Sidebar</Sidebar>
  <slot slot="content" />
</SidebarLayout>
