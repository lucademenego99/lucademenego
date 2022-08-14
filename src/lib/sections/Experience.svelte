<script lang="ts">
	import GoIcon from "../../assets/go.svg";
	import VueIcon from "../../assets/vuejs.svg";
	import FlutterIcon from "../../assets/flutter.svg";

	import SectionTitle from "../components/SectionTitle.svelte";
	import Card from "../components/Card.svelte";
	import WorkTab from "../components/WorkTab.svelte";
	import StudyTab from "../components/StudyTab.svelte";
</script>

<div class="experience" id="experience">
	<!-- Title -->
	<div data-aos="fade-up">
		<SectionTitle titleNum="02." title="experience" />
	</div>
	<!-- Expertise cards -->
	<div class="expertise" data-aos="fade-right" data-aos-delay="200">
		<Card
			title="Software Development"
			icon={GoIcon}
			description="Worked on different projects based on OOP - C#, Go, Python,
		Node.js. Developed RESTful APIs, remote procedure calls
		based on gRPC and microservices architectures."
		/>

		<Card
			title="Frontend Development"
			icon={VueIcon}
			description="Competent in basic HTML, CSS, JS/TS, as well as web
			frameworks like Vue.js, Svelte and Yii2. Implemented 3D web
			applications using Three.js."
		/>

		<Card
			title="Mobile Applications"
			icon={FlutterIcon}
			description="Developed various Flutter applications for both iOS and
			Android. Worked with ARKit and ARCore Flutter plugins, while
			extending them with new features."
		/>
	</div>
	<!-- Work and studies -->
	<div class="work-studies">
		<WorkTab />
		<StudyTab />
	</div>
</div>

<style>
	.experience {
		font-family: "Jockey-One";
		color: var(--secondary-text-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 300px;
	}

	.expertise {
		width: 80%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 35px;
		margin-bottom: 7rem;
	}

	.work-studies {
		width: 90%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: 50px;
	}
</style>
