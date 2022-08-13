<script lang="ts">
	import MailIcon from "../../assets/mail.svg";

	import PrimaryButton from "../components/PrimaryButton.svelte";
	import SecondaryButton from "../components/SecondaryButton.svelte";

	import Resume from "../../assets/Resume.pdf";
</script>

<div class="contact" id="contact">
    <div class="title-container" data-aos="fade-up" data-aos-delay="100">
		<h1 class="title-num">04.</h1>
		<h2 class="title">contact</h2>
	</div>
	<div class="main" data-aos="fade-up" data-aos-delay="150">
		<div class="question">
			<p>Have a question or want to work together?</p>
		</div>
		<div class="buttons-container">
			<PrimaryButton text="Say hi!" icon="{MailIcon}" link="mailto:lucademenego99@gmail.com" />
			<div class="divider"></div>
			<SecondaryButton text="Check my Resume" icon="" link="{Resume}" />
		</div>
	</div>
</div>

<style>
    .contact {
		font-family: "Jockey-One";
		color: var(--secondary-text-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 300px 0;
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