<!-- Default layout for everything within this "group" -->

<script lang="ts">
  import Sidebar from '../../lib/layout/sidebar/Sidebar.svelte';
  import SidebarLayout from '../../lib/layout/SidebarLayout.svelte';
</script>

<SidebarLayout>
  <Sidebar slot="sidebar">
    Default Sidebar<br />
  </Sidebar>
  <slot slot="content" />
</SidebarLayout>
