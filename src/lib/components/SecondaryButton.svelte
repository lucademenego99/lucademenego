<!-- Secondary Button, containing a text, an icon and a link -->

<script lang="ts">
    export let text;
    export let icon;
	export let link;
</script>

<a href="{link}" target="_blank">
	<div class="secondary-button">
		{text}
		{#if icon != ""}
			<img src={icon} alt="" />
		{/if}
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

    .secondary-button {
        min-width: 150px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
		align-items: center;
		padding: 16px;
		background-color: transparent;
		border: 2px solid white;
		border-radius: 16px;
		font-family: "K2D Light Regular";
		font-size: 16px;
		font-weight: 100;
		letter-spacing: 0.08em;
		color: white;
	}

	.secondary-button:hover {
		border-radius: 0px;
		background-color: var(--primary-color-less-alpha);
	}

	.secondary-button img {
		max-width: 30px;
		max-height: 25px;
	}
</style>
