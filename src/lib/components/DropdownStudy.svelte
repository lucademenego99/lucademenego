<!-- Interactive Dropdown, with a title and a slot for the content -->

<script lang="ts">
    import DownIcon from "../../assets/down-arrow.svg";

    export let tabTitle;

    let showTab = false;
</script>

<div>
    <div class="study" class:shown={showTab} on:click={() => (showTab = !showTab)}>
        <p class="tab-item-title">{tabTitle}</p>
        <img src={DownIcon} alt="" class:rotate={showTab} />
    </div>
    <div class="study-drop" class:shown={showTab}>
        <slot />
    </div>
</div>

<style>
    .study {
		color: black;
		background-color: var(--secondary-color);
		transition: all 0.2s ease-in-out;
		border-radius: 37px;
		width: 450px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		margin: 0;
		cursor: pointer;
		box-sizing: border-box;

		font-family: "K2D ExtraLight Regular";
		color: rgb(223, 223, 223);
		letter-spacing: 0.08em;
		font-weight: bold;
		font-size: 16px;
	}

	.study.shown {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		background-color: var(--secondary-color-bright);
	}

	.study:hover {
		background-color: var(--secondary-color-bright);
	}

	.study.shown:hover {
		background-color: var(--secondary-color-brighter);
	}

	.study-drop {
		width: 450px;
		background-color: #430d7962;
		padding: 0px 15px;
		margin: 0;
		max-height: 0;
		transition: max-height 0.4s ease-out;
		overflow: hidden;
		font-family: "K2D ExtraLight Regular";
		box-sizing: border-box;
	}

	.study-drop {
		background-color: #00489b62;
	}

	.study-drop.shown {
		max-height: 500px;
		transition: max-height 0.4s ease-in;
	}

	.study img {
		max-width: 20px;
		max-height: 20px;
		transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.study img.rotate {
		transform: rotate(-540deg);
		-webkit-transform: rotate(-540deg);
	}

	.tab-item-title {
		margin: 0;
		padding: 10px 0px;
	}

	@media (max-width: 540px) {
        .study {
			width: 100%;
			font-size: 3vw;
			padding: 0.7vw 4vw;
		}

		.study-drop {
			width: 100%;
			font-size: 3vw;
		}

		.study img {
			max-width: 3.6vw;
			max-height: 3.6vw;
		}
    }
</style>