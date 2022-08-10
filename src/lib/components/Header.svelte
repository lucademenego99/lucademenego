<header>
    <nav>
        <div class="resume">
            <a href="/resume.pdf">Resume</a>
        </div>
        <div class="nav">
            <ol>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ol>
        </div>
    </nav>
</header>

<style>
    header {
		height: var(--header-height);
		display: flex;
		align-items: center;
		width: 100%;
	}

	nav {
		width: 100%;
		padding: 0 3rem 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		font-family: "monospace";
	}

	.nav {
		display: flex;
		flex-direction: row;
		gap: 5rem;
		align-items: center;
	}

	.nav ol {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}

	.nav ol li {
		counter-increment: item 1;
	}

	.nav ol li a {
		padding: 10px;
		font-size: var(--small-font-size);
		text-decoration: none;
		color: var(--secondary-text-color);
		transition: color 0.5s ease-in-out;
	}

	.nav ol li a:hover {
		padding: 10px;
		font-size: var(--small-font-size);
		text-decoration: none;
		color: var(--primary-color);
	}

	.nav ol li a::before {
		content: "✦" counter(item) ".";
		padding-right: 5px;
		color: var(--primary-color);
	}

	nav .resume {
		cursor: pointer;
		padding: 10px;
		border: 2px solid var(--primary-color);
		border-radius: 6px;
	}

	nav .resume a {
		text-decoration: none;
		color: var(--primary-color);
	}
</style>