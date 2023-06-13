<script lang="ts">
  import { page } from '$app/stores';

  const links = [
    {
      name: 'One',
      href: '/one',
    },
    {
      name: 'Two',
      href: '/two',
    },
    {
      name: 'Joke',
      href: '/joke',
    },
    {
      name: 'Profile',
      href: '/profile',
    },
  ];
</script>

<nav class="navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid navbar-grid gap-2" class:has-middle={$$slots.middle}>
    <!-- Left side of navbar -->
    <div class="left d-flex justify-content-start gap-2">
      <slot name="left" />
      <a class="navbar-brand" href="/">Home</a>
    </div>

    <!-- Middle of navbar -->
    {#if $$slots.middle}
      <div class="middle d-flex justify-content-center gap-2">
        <slot name="middle" />
      </div>
    {/if}

    <!-- Right side of navbar -->
    <div class="right d-flex justify-content-end gap-2">
      <slot name="right" />
      <!-- Include some navbar links -->
      <ul class="navbar-nav d-flex flex-row gap-2">
        {#each links as { name, href }}
          <li class="nav-item">
            <a class="nav-link" class:active={$page.url.pathname.includes(href)} {href}>
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  @import '../../bootstrap/media.scss';

  .navbar-grid {
    // Display all parts (left, middle, left in a row)
    display: grid;
    grid-template-rows: 1fr;
    // The middle sections takes what it needs, but max a third (1fr)
    grid-template-columns: 1fr min(max-content, 1fr) 1fr;
    grid-template-areas: 'left middle right';

    .left {
      grid-area: left;
    }

    .middle {
      grid-area: middle;
    }

    .right {
      grid-area: right;
    }
  }

  // On mobile: Move the middle second down in a separate row
  @include media-breakpoint-down(md) {
    // Include check if middle even exists, otherwise the "gap" would increase bottom spacing
    .has-middle {
      grid-template-rows: 1fr max(max-content, 1fr);
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'left right' 'middle middle';
    }
  }
</style>
