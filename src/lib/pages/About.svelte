<div class="about-me" id="about">
    <div class="title">
        <h3>About me</h3>
    </div>
    <div class="row">
        <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin eget vehicula nulla, non posuere lorem. Cras sed
            interdum metus, quis feugiat tellus. Ut sodales massa
            eget consequat hendrerit. Ut et metus turpis. Nullam eu
            urna venenatis, euismod ante ac, bibendum ligula.
            Pellentesque in maximus ligula. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nunc ante lorem, eleifend sed quam
            mattis, volutpat lacinia odio. Cras vulputate dolor in
            nibh tristique pretium. Sed nec odio ac urna maximus
            semper in dapibus diam. Etiam lacinia lorem a lectus
            laoreet convallis. Nulla pulvinar vel ante at vulputate.
            Vivamus vitae enim nulla. Nunc turpis nisi, posuere sit
            amet magna vel, gravida finibus arcu. Morbi molestie
            elit a felis consequat ultrices. Nam consequat sed elit
            vitae dictum. Pellentesque tempor ante in blandit
            facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
            Nullam sagittis arcu a ex ultrices, vulputate cursus
            erat dignissim. Duis ut iaculis purus. Vestibulum vel
            accumsan orci, et mollis metus. Sed metus risus, viverra
            non tortor id, vestibulum rutrum ante.
        </div>
        <img
            src="https://picsum.photos/500/500"
            alt="Myself"
        />
    </div>
</div>

<style>
    .about-me {
		color: var(--secondary-text-color);
	}

    .about-me .row {
		display: flex;
		flex-direction: row;
		gap: 4rem;
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

    img {
        object-fit: contain;
    }

    @media (max-width: 1200px) {
		.about-me .row {
            flex-direction: column;
            align-items: center;
        }

        img {
            width: 60%;
        }
	}

    @media (max-width: 750px) {
		.about-me .row {
            flex-direction: column;
            align-items: center;
        }

        img {
            width: 100%;
        }
	}
</style>