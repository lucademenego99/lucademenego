<script lang="ts">
	import GithubIcon from "../../assets/github.svg";
	import TiddlywikiIcon from "../../assets/tiddlywiki.svg";
	import TiddlywikiBlackIcon from "../../assets/tiddlywiki-black.svg";
	import JupyterIcon from "../../assets/jupyter.svg";
	import JupyterBlackIcon from "../../assets/jupyter-black.svg";
	import DocumentIcon from "../../assets/document.svg";
	import DocumentBlackIcon from "../../assets/document-black.svg";

	import SectionTitle from "../components/SectionTitle.svelte";
	import Project from "../components/Project.svelte";

	import ICPImage from "../../assets/icp.png";
	import UDAImage from "../../assets/uda.png";
	import MLCImage from "../../assets/mlc.png";
	import SDNImage from "../../assets/sdn-slicing.png";
</script>

<div class="projects" id="projects">
	<!-- Title -->
	<div data-aos="fade-up">
		<SectionTitle titleNum="03." title="projects" />
	</div>

	<!-- Projects -->
	<Project
		isFlipped={false}
		image={ICPImage}
		aosDelay="100"
		title="Interactive Code Playgrounds"
		description="A front-end web technology that integrates executable code in HTML slideshows.  This incremental evolution of traditional slideshows aims to reduce friction in learning to code, and enables more scaffolded and active teaching."
		primaryIcon={GithubIcon}
		primaryLink="https://github.com/lucademenego99/icp-bundle"
		primaryText="Source Code"
		primarySmallText="Github"
		secondaryIcon={TiddlywikiIcon}
		secondarySmallIcon={TiddlywikiBlackIcon}
		secondaryLink="https://lucademenego99.github.io/icp-tiddlywiki/"
		secondaryText="TW notebook"
		keywords={["Svelte", "Typescript", "Pyodide", "TeaVM"]}
	/>

	<Project
		isFlipped={true}
		image={UDAImage}
		aosDelay="200"
		title="Unsupervised Domain Adaptation"
		description="Collection of methods concerning unsupervised domain adaptation techniques, namely: Deep Domain Confusion, Domain Adversarial NN, Domain Separation Networks, Entropy Minimization vs. Diversity Maximization."
		primaryIcon={GithubIcon}
		primaryLink="https://github.com/lucademenego99/uda"
		primaryText="Source Code"
		primarySmallText="Github"
		secondaryIcon={JupyterIcon}
		secondarySmallIcon={JupyterBlackIcon}
		secondaryLink="https://github.com/lucademenego99/uda/blob/master/uda/notebook/notebook.ipynb"
		secondaryText="Jupyter"
		keywords={["Python", "PyTorch", "Adaptiope"]}
	/>

	<Project
		isFlipped={false}
		image={MLCImage}
		aosDelay="300"
		title="Distributed Multi-level cache"
		description="Implementation of a distributed architecture consisting of multiple caches, guaranteeing client-centric consistency in an environment in which caches may fail by crashing."
		primaryIcon={GithubIcon}
		primaryLink="https://github.com/lucademenego99/multilevel-cache"
		primaryText="Source Code"
		primarySmallText="Github"
		secondaryIcon={DocumentIcon}
		secondarySmallIcon={DocumentBlackIcon}
		secondaryLink="https://github.com/lucademenego99/multilevel-cache/blob/master/doc/Report.pdf"
		secondaryText="Documentation"
		keywords={["Java", "Akka", "JUnit Tests"]}
	/>

	<Project
		isFlipped={true}
		image={SDNImage}
		aosDelay="400"
		title="On-demand SDN slicing"
		description="The project involves the development of a solution based on ComNetsEmu allowing to activate and de-activate SDN slices on-demand. The slicing approach is topology-based, and QoS settings can be configured when creating virtual networks."
		primaryIcon={GithubIcon}
		primaryLink="https://github.com/lucademenego99/on-demand-sdn-slices"
		primaryText="Source Code"
		primarySmallText="Github"
		secondaryIcon={DocumentIcon}
		secondarySmallIcon={DocumentBlackIcon}
		secondaryLink="https://github.com/lucademenego99/on-demand-sdn-slices/blob/main/report_and_slides/Report.pdf"
		secondaryText="Documentation"
		keywords={["Python", "Ryu", "MiniNet"]}
	/>
</div>

<style>
	.projects {
		font-family: "Jockey-One";
		color: var(--secondary-text-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 150px;
	}
</style>
