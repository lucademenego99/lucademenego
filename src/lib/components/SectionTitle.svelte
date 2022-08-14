<!-- Title of every section of the site, having a number and the actual title -->

<script lang="ts">
    export let titleNum;
    export let title;
</script>

<div class="title-container" data-aos="fade-up" data-aos-delay="100">
    <h1 class="title-num">{titleNum}</h1>
    <h2 class="title">{title}</h2>
</div>

<style>
    .title-container {
		font-family: "K2D Medium Regular";
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
</style>