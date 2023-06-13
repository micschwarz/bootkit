<!-- 
	This layout just tells the server to not do ssr and includes styles.
	Tracking or cookie stuff may be included here,
	as every page in the app should use this layout
-->

<script lang="ts">
  import '../app.scss';
</script>

<slot />
