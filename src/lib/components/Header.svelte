<header>
    <nav>
        <!-- <div class="resume">
            <a href="/resume.pdf">Resume</a>
        </div> -->
        <div class="nav">
            <ol>
                <li>
                    <a href="#about">about me</a>
                </li>
                <li>
                    <a href="#experience">experience</a>
                </li>
                <li>
                    <a href="#projects">projects</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ol>
        </div>
		<div class="divider"></div>
    </nav>
</header>

<style>
    header {
		font-family: "Jockey-One";
		letter-spacing: 1px;
		height: var(--header-height);
		display: flex;
		align-items: center;
		width: 100%;
	}

	nav {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 5rem;
		align-items: center;
		justify-content: center;
	}

	.nav ol {
		width: 35%;
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
		font-size: 20px;
		text-decoration: none;
		color: white;
		transition: color 0.5s ease-in-out;
	}

	.nav ol li a:hover {
		color: var(--primary-color);
	}

	.nav ol li a::before {
		transition: color 0.5 ease-in-out;
		content: "0" counter(item) ".";
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

	.divider {
		width: 50%;
		height: 1px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
</style>