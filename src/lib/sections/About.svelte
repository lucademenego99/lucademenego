<script lang="ts">
	import SectionTitle from "../components/SectionTitle.svelte";
</script>

<div class="about-me" id="about" data-aos="fade-up">
	<!-- Title -->
	<SectionTitle titleNum="01." title="about me" />
	
	<!-- About me text and image -->
    <div class="row">
		<p class="about">Hi, I'm Luca. I'm a 23 years old guy who lives in Laggio di Cadore. Never heard of it? It's a small village amongst the Dolomites in Italy, quite little-known, but it has a lot to offer. I spent my childhood here, went to school, made some friends... the usual life you would expect. <br> I have always been fond of computers, I built my own one when I was a kid, and I started my coding journey during high-school as a self-taught Java Developer. Then I finally went to the University of Trento, bachelor's degree in Computer Science. The path has actually been quite straightforward, and in no time I found a job, I graduated and I started the Master's degree. <br> And here we are. One year's left, the first went pretty well, I'm on vacation and I'm celebrating by creating this Portfolio. Maybe I should take advantage of this period to take a break, but I'm having fun :)</p>
        <img
            src="https://picsum.photos/500/500"
            alt="Myself"
        />
    </div>
</div>

<style>
    .about-me {
		color: rgb(212, 212, 212);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 300px;
	}

    .row {
        width: 60%;
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

	.about {
		font-family: "K2D Light Regular";
		letter-spacing: 0.04em;
		font-weight: 100;
		font-size: 16px;
	}

	img {
		filter: opacity(50%) blur(2px) drop-shadow(18px 18px 5px var(--primary-color));
		transition: filter 0.2s ease-in-out;
		max-width: 90vw;
	}
	img:hover {
		filter: none;
	}

	@media (max-width: 1320px) {
		.row {
			flex-direction: column;
		}
	}
</style>