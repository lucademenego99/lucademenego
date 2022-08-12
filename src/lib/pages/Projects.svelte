<script lang="ts">
	import GithubIcon from "../../assets/github.svg";
	import TiddlywikiIcon from "../../assets/tiddlywiki.svg";
	import JupyterIcon from "../../assets/jupyter.svg";

	import PrimaryButton from "../components/PrimaryButton.svelte";
	import SecondaryButton from "../components/SecondaryButton.svelte";
import { text } from "svelte/internal";
</script>

<div class="projects" id="projects">
    <div class="title-container">
		<h1 class="title-num">03.</h1>
		<h2 class="title">projects</h2>
	</div>
	<div class="project">
		<img
            src="https://picsum.photos/500/300"
            alt="Myself"
        />
		<div class="project-main">
			<h3 class="project-title">Interactive Code Playgrounds</h3>
			<div class="description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui lacinia, viverra lacus vitae, ultrices massa. Donec vehicula luctus lorem, ut volutpat eros pellentesque in.</p>
			</div>
			<div class="buttons">
				<PrimaryButton text="View it on Github" icon="{GithubIcon}" />
				<SecondaryButton text="Tiddlywiki" icon="{TiddlywikiIcon}" />
			</div>
		</div>
		<div class="keywords">
			<ul>
				<li>Svelte</li>
				<li>Typescript</li>
				<li>Pyodide</li>
				<li>TeaVM</li>
			</ul>
		</div>
	</div>

	<div class="project flipped">
		<div class="keywords">
			<ul class="flipped">
				<li>Python</li>
				<li>PyTorch</li>
				<li>Adaptiope</li>
			</ul>
		</div>
		<div class="project-main flipped">
			<h3 class="project-title flipped">Unsupervised Domain Adaptation</h3>
			<div class="description flipped">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui lacinia, viverra lacus vitae, ultrices massa. Donec vehicula luctus lorem, ut volutpat eros pellentesque in.</p>
			</div>
			<div class="buttons">
				<PrimaryButton text="View it on Github" icon="{GithubIcon}" />
				<SecondaryButton text="Notebook" icon="{JupyterIcon}" />
			</div>
		</div>
		<img
            src="https://picsum.photos/500/300"
            alt="Myself"
        />
	</div>
</div>

<style>
    .projects {
		font-family: "Jockey-One";
		color: var(--secondary-text-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 300px;
	}

	.title-container {
		width: 100%;
		text-align: center;
		margin-bottom: 2rem;
	}

	.title-num {
		display: inline;
		font-weight: 100;
		font-size: 45px;
		margin: 0;
		padding: 0;
		color: var(--primary-color);
	}

	.title {
		font-weight: 100;
		display: inline;
		font-size: 30px;
		margin: 0;
		padding: 0;
	}

	.project {
		width: 70%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 2rem 0;
	}

	.project.flipped {
		justify-content: flex-end;
	}

	.project-main {
		width: 450px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 20px;
	}

	.project-main.flipped {
		align-items: flex-end;
		justify-content: flex-end;
	}

	.project-title {
		font-size: 30px;
		font-weight: 100;
		color: white;
		padding: 0;
		margin: 0 0 15px 0;
		letter-spacing: 0.08em;
	}

	.description {
		position: relative;
		left: -100px;
		font-family: "K2D Light Regular";
		font-size: 16px;
		font-weight: 100;
		letter-spacing: 0.08em;
		color: white;
		padding: 0 15px;
		margin-bottom: 40px;
		text-align: left;
		background-color: #223345;
		box-shadow: 0px 4px 13px 8px rgba(0, 0, 0, 0.25);
	}

	.description.flipped {
		left: 100px;
	}

	.buttons {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: 0;
	}

	.keywords {
		position: relative;
		font-family: "K2D Thin Regular";
		font-size: 16px;
		font-weight: 100;
		letter-spacing: 0.2em;
		color: #a5a5a5;
	}

	.keywords ul {
		display: grid;
		gap: 10px;
		list-style-type: none;
	}
	.keywords ul::before {
		content: "";
		display: block;
		width: 1px;
		height: 200px;
		background-color: #a5a5a5;
		position: absolute;
		left: 25px;
	}

	.keywords ul.flipped::before {
		display: none;
	}
	.keywords ul.flipped::after {
		content: "";
		display: block;
		width: 1px;
		height: 200px;
		background-color: #a5a5a5;
		position: absolute;
		left: calc(100% + 10px);
	}
</style>