<script lang="ts">
	import GithubIcon from "../../assets/github.svg";
	import TiddlywikiIcon from "../../assets/tiddlywiki.svg";
	import JupyterIcon from "../../assets/jupyter.svg";
	import DocumentIcon from "../../assets/document.svg";

	import SectionTitle from "../components/SectionTitle.svelte";
	import Project from "../components/Project.svelte";

	import ICPImage from "../../assets/icp.png";
	import UDAImage from "../../assets/uda.png";
	import MLCImage from "../../assets/mlc.png";
	import PEGImage from "../../assets/peg.png";
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
		primaryText="View it on Github"
		secondaryIcon={TiddlywikiIcon}
		secondaryLink="https://lucademenego99.github.io/icp-tiddlywiki/"
		secondaryText="Tiddlywiki"
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
		primaryText="View it on Github"
		secondaryIcon={JupyterIcon}
		secondaryLink="https://github.com/lucademenego99/uda/blob/master/uda/notebook/notebook.ipynb"
		secondaryText="Notebook"
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
		primaryText="View it on Github"
		secondaryIcon={DocumentIcon}
		secondaryLink="https://github.com/lucademenego99/multilevel-cache/blob/master/doc/Report.pdf"
		secondaryText="Report"
		keywords={["Java", "Akka", "JUnit Tests"]}
	/>

	<Project
		isFlipped={true}
		image={PEGImage}
		aosDelay="400"
		title="Evader and Pursuer Game"
		description="This project contains a set of devised algorithms allowing to find collision-free Dubins shortest paths for a robot moving in an environment filled with obstacles. Finally, two robots compete between each other in an evader-pursuer game."
		primaryIcon={GithubIcon}
		primaryLink="https://github.com/lucademenego99/AppliedRoboticsStudentInterface"
		primaryText="View it on Github"
		secondaryIcon={DocumentIcon}
		secondaryLink="https://github.com/lucademenego99/AppliedRoboticsStudentInterface/blob/master/Paper.pdf"
		secondaryText="Report"
		keywords={["C++", "ROS", "Clipper"]}
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
