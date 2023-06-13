<script lang="ts">
  import { faLink } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../../../lib/Icon.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="mb-2">{data.joke.value}</div>

<!-- Svelte Kits preload data from "load function" on hover -->
<a href="/joke/{data.joke.id}/">
  <Icon icon={faLink} />
  <span class="mr-1">Permalink</span>
</a>
