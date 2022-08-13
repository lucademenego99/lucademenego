<script lang="ts">
	import DownArrowIcon from "../../assets/down-arrow.svg";
</script>

<div class="presentation">
	<div class="text-title">
		<h1 data-aos="fade" data-aos-delay="550">Luca De Menego</h1>
		<p data-aos="fade" data-aos-delay="600">Backend, Frontend, App Developer</p>
	</div>
	<a href="#about" class="about-arrow"><img src={DownArrowIcon} alt="Go Down" class="down-icon" /></a>
</div>

<style>
	.presentation {
		font-family: "Jockey-One";
		color: white;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding-bottom: var(--header-height);
	}

	.text-title {
		position: relative;
	}

	h1 {
		font-weight: 100;
		font-size: 130px;
		margin: 0;
		padding: 0;
	}

	p {
		position: absolute;
		letter-spacing: 4px;
		bottom: -7px;
		left: 6px;
		font-size: 30px;
		padding: 0;
		margin: 0;
	}

	.about-arrow {
		position: relative;
		top: calc(50% - (var(--header-height) / 2));
		transition: transform 0.2s ease-in-out;
		cursor: pointer;
		-webkit-animation: arrow-anim 1.5s infinite;
		animation: arrow-anim 1.5s infinite;
	}

	@-webkit-keyframes arrow-anim {
		0% {
			-webkit-transform: translate(0, 0);
		}
		20% {
			-webkit-transform: translate(0px, 15px);
		}
		40% {
			-webkit-transform: translate(0, 0);
		}
	}
	@keyframes arrow-anim {
		0% {
			transform: translate(0, 0);
		}
		20% {
			transform: translate(0px, 15px);
		}
		40% {
			transform: translate(0, 0);
		}
	}
</style>
