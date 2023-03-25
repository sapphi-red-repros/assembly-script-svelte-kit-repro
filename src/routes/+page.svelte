<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const wasmUrl = (await import("asc:../core/add.as")).default;

    WebAssembly.instantiateStreaming(fetch(wasmUrl)).then(({ instance }) =>
      console.log(instance.exports.add(40, 2))
    );
  });
</script>
