<script lang="ts">
	import MailIcon from "../../assets/mail.svg";
	import Resume from "../../assets/Resume.pdf";

	import PrimaryButton from "../components/PrimaryButton.svelte";
	import SecondaryButton from "../components/SecondaryButton.svelte";
	import SectionTitle from "../components/SectionTitle.svelte";

	import ParticlesCanvas from "../components/ParticlesCanvas.svelte";
</script>

<div class="contact" id="contact">
	<ParticlesCanvas />
	<div data-aos="fade-up" data-aos-delay="100">
		<SectionTitle titleNum="04." title="contact" />
	</div>
	<div class="main" data-aos="fade-up" data-aos-delay="150">
		<div class="question">
			<p>Have a question or want to work together?</p>
		</div>
		<div class="buttons-container">
			<PrimaryButton
				text="Say hi!"
				icon={MailIcon}
				link="mailto:lucademenego99@gmail.com"
			/>
			<div class="divider" />
			<SecondaryButton text="Check my Resume" icon="" link={Resume} />
		</div>
	</div>
</div>

<style>
	.contact {
		font-family: "Jockey-One";
		color: var(--secondary-text-color);
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 300px 0;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.question {
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

	.divider {
		width: 20%;
		height: 1px;
		background-color: #838383;
	}

	.buttons-container {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
</style>
