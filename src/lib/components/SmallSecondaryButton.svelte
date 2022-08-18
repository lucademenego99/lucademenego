<!-- Secondary Button, containing a text, an icon and a link -->

<script lang="ts">
    export let text;
    export let icon;
	export let link;
</script>

<a href="{link}" target="_blank">
	<div class="secondary-button">
		<div class="icon-container">
			<img src={icon} alt="" />
		</div>
		<p>{text}</p>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

    .secondary-button {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2px;
		align-items: center;
		padding: 16px;
		background-color: transparent;
		border-radius: 16px;
		font-family: "K2D Light Regular";
		font-size: 16px;
		font-weight: 100;
		letter-spacing: 0.08em;
		color: var(--background-color);
	}

	.secondary-button .icon-container {
		transition: all 0.2s ease-in-out;
		border: 2px solid var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        height: 100%;
        padding: 10px;
        border-radius: 8px;
        margin: 0;
    }

	.icon-container:hover {
		border-radius: 0px;
		background-color: var(--primary-color-less-alpha);
	}

	.secondary-button p {
		margin: 0;
		padding: 0;
	}

	.secondary-button img {
		max-width: 30px;
		max-height: 25px;
	}
</style>
