<!-- Header of the page -->

<script lang="ts">
    import SecondaryButton from "../components/SecondaryButton.svelte";
	import Resume from "../../assets/Resume.pdf";

	let checkButton: HTMLInputElement;

	function uncheck() {
		checkButton.checked = false;
	}
</script>

<header>
	<input class="menu-btn" type="checkbox" id="menu-btn" name="menu-btn" bind:this="{checkButton}" />
	<label class="menu-icon" for="menu-btn"><span class="navicon" /></label>
	<nav>
		<div class="align-right">
			<SecondaryButton text="Check my Resume" icon="" link={Resume} />
		</div>
		<div class="nav">
			<div class="nav-content">
				<ol class="nav-list">
					<li data-aos="fade" data-aos-delay="300" on:click={uncheck}>
						<a href="#about">about me</a>
					</li>
					<li data-aos="fade" data-aos-delay="350" on:click={uncheck}>
						<a href="#experience">experience</a>
					</li>
					<li data-aos="fade" data-aos-delay="400" on:click={uncheck}>
						<a href="#projects">projects</a>
					</li>
					<li data-aos="fade" data-aos-delay="450" on:click={uncheck}>
						<a href="#contact">contact</a>
					</li>
				</ol>
			</div>
		</div>
		<!-- <div class="divider" data-aos="fade" data-aos-delay="450" /> -->
	</nav>
</header>

<style>
	header {
		font-family: "Jockey-One";
		letter-spacing: 1px;
		height: var(--header-height);
		display: flex;
		align-items: center;
		width: 100%;
	}

	nav {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 5rem;
		align-items: center;
		justify-content: center;
	}

	.nav-content {
		width: 40%;
	}

	.nav-list {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		box-sizing: border-box;
		padding: 0;
	}

	.nav-list li {
		counter-increment: item 1;
	}

	.nav-list li a {
		padding: 10px;
		font-size: 20px;
		text-decoration: none;
		color: white;
		transition: color 0.5s ease-in-out;
	}

	.nav-list li a:hover {
		color: var(--primary-color);
	}

	.nav-list li a::before {
		transition: color 0.5 ease-in-out;
		content: "0" counter(item) ".";
		padding-right: 5px;
		color: var(--primary-color);
	}

	nav .resume a {
		text-decoration: none;
		color: var(--primary-color);
	}

	.divider {
		width: 30%;
		height: 1px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	header .menu-btn {
		display: none;
	}

	header .menu-icon {
		cursor: pointer;
		display: inline-block;
		display: none;
		padding: 28px 20px;
		position: absolute;
		user-select: none;
		z-index: 10;
	}

	header .menu-icon .navicon {
		background: white;
		display: none;
		height: 2px;
		position: relative;
		transition: background 0.2s ease-out;
		width: 18px;
	}

	header .menu-icon .navicon:before,
	header .menu-icon .navicon:after {
		background: white;
		content: "";
		display: block;
		height: 100%;
		position: absolute;
		transition: all 0.2s ease-out;
		width: 100%;
	}

	header .menu-icon .navicon:before {
		top: 5px;
	}

	header .menu-icon .navicon:after {
		top: -5px;
	}

	.align-right {
		position: absolute;
		right: 3em;
		top: 2em;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
	}

	@media (max-width: 1260px) {
		.nav-content {
			width: 50%;
		}
	}

	@media (max-width: 1020px) {
		.nav-content {
			width: 70%;
		}

		.align-right {
			top: 6em;
		}
	}

	@media (max-width: 768px) {
		header .menu-btn {
			display: block;
		}

		header .menu-icon .navicon {
			display: block;
		}

		header .menu-icon {
			display: inline-block;
		}

		.nav {
			transition: all cubic-bezier(.77,0,.175,1) ease;
			position: absolute;
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 5;
		}

		.nav::before, .nav::after {
			content: "";
			position: absolute;
			width:100%;
			height:300px;
			max-height: 100vh;
			background-color: rgba(234, 234, 234, .2);
			z-index: -1;
			transition: transform cubic-bezier(.77,0,.175,1) .8s;
			transform: translateX(0%) translateY(-100%);
		}

		.nav::after {
			background-color: rgba(255, 255, 255, 1);
			transition-delay: 0s;
		}

		.nav::before {
			transition-delay: .1s;
		}

		.nav-content{
			position: absolute;
			top: 65px;
			padding-left: 40px;
			box-sizing: border-box;
			width: 100%;
			text-align: center;
			cursor: default;
			pointer-events: none;
		}

		.nav-list {
			width: 100%;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}

		.nav-list li {
			position: relative;
			display: inline-block;
			transition-delay: .8s;
			opacity: 0;
			transform: translate(0%, 100%);
			transition: opacity .2s ease, transform .3s ease;
			margin-bottom: 23px;
		}

		.nav-list li::before {
			content: "";
			position: absolute;
			width: 20px;
			height: 1px;
			top: 100%;
			transform: translate(0%, 0%);
			transition: all .3s ease;
			z-index: -1;
		}

		.nav-list li:hover::before {
			width: 100%;
		}

		.divider {
			display: none;
		}

		/* menu btn */
		header .menu-btn {
			display: none;
		}

		header .menu-btn:checked ~ nav .nav {
			visibility: visible;
		}

		header .menu-btn:checked ~ nav .nav::before {
			transform: translateX(0%) translateY(0%);
			transition-delay: 0s;
		}

		header .menu-btn:checked ~ nav .nav::after {
			transform: translateX(0%) translateY(0%);
			transition-delay: .1s;
		}

		header .menu-btn:checked ~ nav .nav-list li {
			opacity: 1;
			transform: translateX(0%);
			transition: opacity .3s ease, transform .3s ease, color .3s ease;
			transition-delay: 0.7s;
		}

		header .menu-btn:checked ~ nav .nav-list li a {
			color: black;
		}

		header .menu-btn:checked ~ nav .nav-content {
			pointer-events: all;
			cursor: pointer;
		}

		header .menu-btn:checked ~ .menu-icon .navicon {
			background: transparent;
		}

		header .menu-btn:checked ~ .menu-icon .navicon:before {
			transform: rotate(-45deg);
			background-color: var(--primary-color);
		}

		header .menu-btn:checked ~ .menu-icon .navicon:after {
			transform: rotate(45deg);
			background-color: var(--primary-color);
		}

		header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
		header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
			top: 0;
		}

		.align-right {
			right: 1.5em;
			top: 2em;
		}
	}
</style>
