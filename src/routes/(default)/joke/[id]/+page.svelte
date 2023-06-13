<script lang="ts">
  import { faRandom } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../../../../lib/Icon.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="mb-2">{data.joke.value}</div>

<a href="/joke/">
  <Icon icon={faRandom} />
  <span class="mr-1">Random Joke</span>
</a>
