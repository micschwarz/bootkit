<!-- Layout with just a navbar -->

<script>
  import BaseLayout from './BaseLayout.svelte';
  import Navbar from './navbar/Navbar.svelte';
</script>

<BaseLayout>
  <Navbar slot="navbar" />
  <main slot="content" class="overflow-auto">
    <div class="container">
      <slot name="content" />
    </div>
  </main>
</BaseLayout>
