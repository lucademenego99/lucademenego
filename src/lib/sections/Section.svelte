<!-- Parent of any section of the webpage -->

<script lang="ts">
    import { onMount } from 'svelte';
    
    export let content;
    export let width, height;

    let sectionElement: HTMLElement;

    onMount(() => {
        sectionElement.style.width = width;
        sectionElement.style.height = height;
    });  
</script>

<div class="section" bind:this="{sectionElement}">
    <svelte:component this={content}></svelte:component>
</div>

<style>
    .section {
		position: relative;
	}
</style>