<script lang="ts">
	import SpazioDatiIcon from "../../assets/spaziodati-icon.jpg";
	import ThemaOpticalIcon from "../../assets/themaoptical.png";
	import GitIcon from "../../assets/git.svg";
	import GoLanguageIcon from "../../assets/go.svg";
	import DynamoDbIcon from "../../assets/dynamodb.svg";
	import DockerIcon from "../../assets/docker.svg";
	import AwsIcon from "../../assets/aws.svg";
	import DjangoIcon from "../../assets/django.svg";
	import PythonIcon from "../../assets/python.svg";
	import ReactIcon from "../../assets/react.svg";

	import FlutterIcon from "../../assets/flutter.svg";
	import MySqlIcon from "../../assets/mysql.svg";
	import NodeIcon from "../../assets/node.svg";
	import VuejsIcon from "../../assets/vuejs.svg";
	import TypescriptIcon from "../../assets/typescript.svg";
	import JavascriptIcon from "../../assets/javascript.svg";
	import CSharpIcon from "../../assets/csharp.svg";
	import BashIcon from "../../assets/bash.svg";
	import GCPIcon from "../../assets/gcp.svg";
	import CSSIcon from "../../assets/css.svg";
	import HTMLIcon from "../../assets/html5.svg";
	import NginxIcon from "../../assets/nginx.svg";
	import FirebaseIcon from "../../assets/firebase.svg";

	import TrentoIcon from "../../assets/unitn-icon.png";
	import JavaIcon from "../../assets/java.svg";
	import PytorchIcon from "../../assets/pytorch.svg";
	import SvelteIcon from "../../assets/svelte.svg";

	let cardSpaziodati: HTMLElement,
		cardThemaOptical: HTMLElement,
		cardBachelor: HTMLElement,
		cardMaster: HTMLElement;
</script>

<div class="experience" id="experience">
	<div class="title">
		<h3>Experience</h3>
	</div>
	<div class="experiences">
		<div class="card">
			<div class="card__inner is-flipped" style="display: none;" />
			<div
				bind:this={cardSpaziodati}
				class="card__inner"
				on:click={() => cardSpaziodati.classList.toggle("is-flipped")}
			>
				<div class="card__face card__face--front">
					<div class="top">
						<h2>Stage at SpazioDati</h2>
						<p>Feb 2021 - Jun 2021</p>
					</div>
					<div class="languages">
						<img src="{GitIcon}" alt="">
						<img src="{GoLanguageIcon}" alt="">
						<img src="{DynamoDbIcon}" alt="">
						<img src="{DockerIcon}" alt="">
						<img src="{AwsIcon}" alt="">
						<img src="{DjangoIcon}" alt="">
						<img src="{PythonIcon}" alt="">
						<img src="{ReactIcon}" alt="">
					</div>
				</div>
				<div class="card__face card__face--back">
					<div class="card__content">
						<div class="card__header">
							<img src={SpazioDatiIcon} alt="" class="image" />
							<h2>SpazioDati</h2>
						</div>
						<div class="card__body">
							<!-- <h3>The Company</h3> -->
							<p>
								Lorem ipsum <strong>dolor</strong> sit amet,
								consectetur <strong>adipiscing</strong> elit.
								Sed id erat a magna lobortis dictum. Nunc est
								arcu,
								<strong>lacinia</strong>
								quis sapien placerat, <strong>laoreet</strong> tincidunt
								nulla.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card__inner is-flipped" style="display: none;" />
			<div
				bind:this={cardThemaOptical}
				class="card__inner"
				on:click={() => cardThemaOptical.classList.toggle("is-flipped")}
			>
				<div class="card__face card__face--front">
					<div class="top">
						<h2>Thema Optical</h2>
						<p>Jul 2020 - Present</p>
					</div>
					<div class="languages">
						<img src="{GitIcon}" alt="">
						<img src="{FlutterIcon}" alt="">
						<img src="{MySqlIcon}" alt="">
						<img src="{NodeIcon}" alt="">
						<img src="{VuejsIcon}" alt="">
						<img src="{TypescriptIcon}" alt="">
						<img src="{JavascriptIcon}" alt="">
						<img src="{CSharpIcon}" alt="">
						<img src="{DockerIcon}" alt="">
						<img src="{BashIcon}" alt="">
						<img src="{GCPIcon}" alt="">
						<img src="{CSSIcon}" alt="">
						<img src="{HTMLIcon}" alt="">
						<img src="{NginxIcon}" alt="">
						<img src="{FirebaseIcon}" alt="">
					</div>
				</div>
				<div class="card__face card__face--back">
					<div class="card__content">
						<div class="card__header">
							<img src={ThemaOpticalIcon} alt="" class="image" />
							<h2>Thema Optical</h2>
						</div>
						<div class="card__body">
							<!-- <h3>The Company</h3> -->
							<p>
								Lorem ipsum <strong>dolor</strong> sit amet,
								consectetur <strong>adipiscing</strong> elit.
								Sed id erat a magna lobortis dictum. Nunc est
								arcu,
								<strong>lacinia</strong>
								quis sapien placerat, <strong>laoreet</strong> tincidunt
								nulla.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<h2 class="exp-title">Work</h2>
	</div>
	<div class="experiences">
		<h2 class="exp-title">Studies</h2>
		<div class="card">
			<div class="card__inner is-flipped" style="display: none;" />
			<div
				bind:this={cardBachelor}
				class="card__inner"
				on:click={() => cardBachelor.classList.toggle("is-flipped")}
			>
				<div class="card__face card__face--front">
					<div class="top">
						<h2>Bachelor in Computer Science</h2>
						<h4>Grade: 110L</h4>
						<p>Sep 2018 - Jul 2021</p>
					</div>
					<div class="languages">
						<img src="{GitIcon}" alt="">
						<img src="{JavaIcon}" alt="">
						<img src="{MySqlIcon}" alt="">
						<img src="{PytorchIcon}" alt="">
						<img src="{NodeIcon}" alt="">
						<img src="{NginxIcon}" alt="">
						<img src="{PythonIcon}" alt="">
						<img src="{HTMLIcon}" alt="">
						<img src="{CSSIcon}" alt="">
					</div>
				</div>
				<div class="card__face card__face--back">
					<div class="card__content">
						<div class="card__header">
							<img src={TrentoIcon} alt="" class="image" />
							<h2>University of Trento</h2>
						</div>
						<div class="card__body">
							<!-- <h3>The Company</h3> -->
							<p>
								Lorem ipsum <strong>dolor</strong> sit amet,
								consectetur <strong>adipiscing</strong> elit.
								Sed id erat a magna lobortis dictum. Nunc est
								arcu,
								<strong>lacinia</strong>
								quis sapien placerat, <strong>laoreet</strong> tincidunt
								nulla.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card__inner is-flipped" style="display: none;" />
			<div
				bind:this={cardMaster}
				class="card__inner"
				on:click={() => cardMaster.classList.toggle("is-flipped")}
			>
				<div class="card__face card__face--front">
					<div class="top">
						<h2>Master in Computer Science</h2>
						<h4>Grade: ???</h4>
						<p>Sep 2021 - ???</p>
					</div>
					<div class="languages">
						<img src="{GitIcon}" alt="">
						<img src="{DockerIcon}" alt="">
						<img src="{PytorchIcon}" alt="">
						<img src="{JavaIcon}" alt="">
						<img src="{NodeIcon}" alt="">
						<img src="{NginxIcon}" alt="">
						<img src="{PythonIcon}" alt="">
						<img src="{HTMLIcon}" alt="">
						<img src="{CSSIcon}" alt="">
						<img src="{SvelteIcon}" alt="">
					</div>
				</div>
				<div class="card__face card__face--back">
					<div class="card__content">
						<div class="card__header">
							<img src={TrentoIcon} alt="" class="image" />
							<h2>University of Trento</h2>
						</div>
						<div class="card__body">
							<!-- <h3>The Company</h3> -->
							<p>
								Lorem ipsum <strong>dolor</strong> sit amet,
								consectetur <strong>adipiscing</strong> elit.
								Sed id erat a magna lobortis dictum. Nunc est
								arcu,
								<strong>lacinia</strong>
								quis sapien placerat, <strong>laoreet</strong> tincidunt
								nulla.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.experience {
		color: var(--secondary-text-color);
	}

	.title {
		font-size: var(--large-font-size);
		color: var(--primary-color);
		margin-bottom: 3rem;
	}

	.title h3::after {
		content: "";
		display: block;
		width: 50%;
		height: 1px;
		background-color: var(--secondary-color);
	}

	.experiences {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.card {
		width: min(400px, 100vw);
		height: min(400px, 100vw);
		perspective: 1000px;
	}

	.card__inner {
		width: 100%;
		height: 100%;
		transition: transform 1s;
		transform-style: preserve-3d;
		cursor: pointer;
		position: relative;
	}

	.card__inner.is-flipped {
		transform: rotateY(180deg);
	}

	.card__face {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		overflow: hidden;
		border-radius: 16px;
		box-shadow: 5px 5px 20px 1px rgba(var(--primary-color), 0.2);
	}

	.card__face--front {
		/* background-image: linear-gradient(150deg, rgba(134,194,50,1) 0%, rgba(71,75,79,0.7819502801120448) 38%); */
		background-color: rgba(71,75,79,1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		transition: background-image 1s;
		overflow: auto;
	}

	.card__face--front .top {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 40%;
	}

	.card__face--front .languages {
		display: flex;
		flex-flow: row wrap;
		height: 60%;
		width: 80%;
		margin-top: 7%;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.card__face--front .languages img {
		width: 53px;
		height: 53px;
	}

	.card__face--front h2 {
		text-align: center;
		color: #fff;
		font-size: 32px;
		margin: 50px 0 0 0;
		padding: 10px;
	}

	.card__face--front h4 {
		text-align: center;
		color: #fff;
		margin: 7px;
		padding: 0;
	}

	.card__face--front p {
		color: #fff;
		font-size: 17px;
		margin: 0;
		padding: 5px;
	}

	.card__face--back {
		background-color: var(--secondary-text-color);
		transform: rotateY(180deg);
	}

	.card__content {
		width: 100%;
		height: 100%;
	}

	.card__header {
		position: relative;
		padding: 15px 15px 20px;
	}

	.card__header:after {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(
			to bottom left,
			var(--primary-color) 10%,
			var(--secondary-color) 115%
		);
		z-index: -1;
		border-radius: 0px 0px 50% 0px;
	}

	.image {
		display: block;
		width: 64px;
		height: 64px;
		margin: 0 auto 10px;
		border-radius: 50%;
		background-color: #fff;
		border: 5px solid #fff;
		object-fit: contain;
	}

	.card__header h2 {
		color: #fff;
		font-size: 20px;
		font-weight: 900;
		text-transform: uppercase;
		text-align: center;
	}

	.card__body {
		padding: 15px;
	}

	.card__body h3 {
		color: rgb(70, 70, 70);
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 7px;
	}

	.card__body p {
		color: rgb(70, 70, 70);
		font-size: 15px;
		line-height: 1.4;
	}

	@media (max-width: 1278px) {
		.exp-title {
			display: none;
		}
	}
</style>
