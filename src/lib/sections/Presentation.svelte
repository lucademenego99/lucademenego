<script lang="ts">
	import DownArrowIcon from "../../assets/down-arrow.svg";
</script>

<div class="presentation">
	<!-- Title -->
	<div class="text-title">
		<h1 data-aos="fade" data-aos-delay="550">Luca De Menego</h1>
		<p data-aos="fade" data-aos-delay="600">Backend, Frontend, App Developer</p>
	</div>
	<!-- Scroll down arrow -->
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
		padding: 10%;
	}

	h1 {
		font-weight: 100;
		font-size: 9.5vw;
		margin: 0;
		padding: 0;
		line-height: 100%;
		text-align: center;
	}

	p {
		letter-spacing: 4px;
		font-size: 1.7vw;
		padding: 0;
		margin: 0;
		line-height: 100%;
		text-align: left;
		position: relative;
		left: 5px;
	}

	.about-arrow {
		position: relative;
		top: calc(50% - (var(--header-height) / 2));
		transition: transform 0.2s ease-in-out;
		cursor: pointer;
		-webkit-animation: arrow-anim 1.5s infinite;
		animation: arrow-anim 1.5s infinite;
	}

	/**
		Drop-down arrow animation keyframes
	*/
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

	@media (max-width: 980px) {
		.text-title {
			padding: 5%;
		}

		h1 {
			font-size: 13vw;
		}

		p {
			font-size: 3vw;
		}
	}
</style>
