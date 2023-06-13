<script lang="ts">
  import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
  import { icon as getIcon } from '@fortawesome/fontawesome-svg-core';

  export let icon: IconDefinition;
</script>

{@html getIcon(icon).html}
