<div class="about-me" id="about">
    <div class="title-container">
		<h1 class="title-num">01.</h1>
		<h2 class="title">about me</h2>
	</div>
    <div class="row">
        <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui lacinia, viverra lacus vitae, ultrices massa. Donec vehicula luctus lorem, ut volutpat eros pellentesque in. Vestibulum ut dolor at ligula fringilla varius a vel augue. Sed eu dignissim mi, non consequat sapien. Sed massa diam, cursus at posuere nec, ultrices et nisi. Nulla at nisi justo. Fusce sodales nec mauris ut egestas. Integer facilisis leo et tortor elementum, at eleifend odio placerat. Maecenas vestibulum convallis nulla, in eleifend nulla ultricies ut. Praesent mattis libero eu purus accumsan, in fringilla eros consectetur. Integer eu justo dapibus eros fermentum mattis sed ac dolor. Donec erat lectus, imperdiet et erat at, auctor aliquam ante. Aenean feugiat odio a turpis auctor, non venenatis nibh sollicitudin. Aenean efficitur justo quis nunc blandit faucibus.</p>
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

    .row {
        width: 60%;
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
</style>