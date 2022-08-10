<script lang="ts">
    import { onMount } from 'svelte';
    
    export let content;
    export let width, height;

    let sectionElement: HTMLElement;

    onMount(() => {
        sectionElement.style.width = width + "%";
        sectionElement.style.minHeight = "100vh";
        sectionElement.style.left = (95 - width) + "%";
        sectionElement.style.top = (90 - height) + "vh";
    });  
</script>

<div class="section" bind:this="{sectionElement}">
    <svelte:component this={content}></svelte:component>
</div>

<style>
    .section {
		position: relative;
        padding-bottom: 10%;
	}
</style>