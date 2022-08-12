<script lang="ts">
	import GoIcon from "../../assets/go-2.svg";
	import VueIcon from "../../assets/vue-2.svg";
	import FlutterIcon from "../../assets/flutter-2.svg";
	import DownIcon from "../../assets/down-arrow.svg";
	
	let showWork1 = false;
	let showWork2 = false;
	let showStudy1 = false;
	let showStudy2 = false;
</script>

<div class="experience" id="experience">
	<div class="title-container">
		<h1 class="title-num">02.</h1>
		<h2 class="title">experience</h2>
	</div>
	<div class="expertise">
		<div class="card">
			<div class="card-title">
				<h3>Software Development</h3>
				<img src={GoIcon} alt="" />
			</div>
			<div class="card-description">
				<p>
					Worked on different projects based on OOP - C#, Go, Python,
					Node.js.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="card-title">
				<h3>Frontend</h3>
				<img src={VueIcon} alt="" />
			</div>
			<div class="card-description">
				<p>
					Competent in basic HTML, CSS, JS/TS, as well as web
					frameworks like Vue.js and Svelte.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="card-title">
				<h3>Mobile Applications</h3>
				<img src={FlutterIcon} alt="" />
			</div>
			<div class="card-description">
				<p>
					Developed various Flutter applications for both iOS and
					Android
				</p>
			</div>
		</div>
	</div>
	<div class="work-studies">
		<div class="tab">
			<h3>Work.</h3>
			<div class="work" on:click="{() => showWork1 = !showWork1}">
				<p class="tab-item-title">Internship @ SpazioDati (TN)</p>
				<img src="{DownIcon}" alt="" class:rotate="{showWork1}">
			</div>
			<div class="work-drop" class:shown="{showWork1}">
				<p>
					Developed a web application for the SpazioDati platform,
					which allows users to upload and share their data.
				</p>
				<p>
					Worked on the frontend and backend of the application,
					using the following technologies:
				</p>
				<ul>
					<li>
						<strong>Frontend:</strong> Vue.js, Svelte, HTML, CSS,
						JS/TS
					</li>
					<li>
						<strong>Backend:</strong> Node.js, Express, MongoDB,
						GraphQL
					</li>
				</ul>
			</div>
			<div class="work" on:click="{() => showWork2 = !showWork2}">
				<p class="tab-item-title">Developer @ Thema Optical (BL)</p>
				<img src="{DownIcon}" alt="" class:rotate="{showWork2}">
			</div>
			<div class="work-drop" class:shown="{showWork2}">
				<p>
					Developed a web application for the SpazioDati platform,
					which allows users to upload and share their data.
				</p>
				<p>
					Worked on the frontend and backend of the application,
					using the following technologies:
				</p>
				<ul>
					<li>
						<strong>Frontend:</strong> Vue.js, Svelte, HTML, CSS,
						JS/TS
					</li>
					<li>
						<strong>Backend:</strong> Node.js, Express, MongoDB,
						GraphQL
					</li>
				</ul>
			</div>
		</div>
		<div class="tab">
			<h3>Studies.</h3>
			<div class="study" on:click="{() => showStudy1 = !showStudy1}">
				<p class="tab-item-title">Bachelor @ University of Trento (TN)</p>
				<img src="{DownIcon}" alt="" class:rotate="{showStudy1}">
			</div>
			<div class="study-drop" class:shown="{showStudy1}">
				<p>
					Developed a web application for the SpazioDati platform,
					which allows users to upload and share their data.
				</p>
				<p>
					Worked on the frontend and backend of the application,
					using the following technologies:
				</p>
				<ul>
					<li>
						<strong>Frontend:</strong> Vue.js, Svelte, HTML, CSS,
						JS/TS
					</li>
					<li>
						<strong>Backend:</strong> Node.js, Express, MongoDB,
						GraphQL
					</li>
				</ul>
			</div>
			<div class="study" on:click="{() => showStudy2 = !showStudy2}">
				<p class="tab-item-title">Master @ University of Trento (TN)</p>
				<img src="{DownIcon}" alt="" class:rotate="{showStudy2}">
			</div>
			<div class="study-drop" class:shown="{showStudy2}">
				<p>
					Developed a web application for the SpazioDati platform,
					which allows users to upload and share their data.
				</p>
				<p>
					Worked on the frontend and backend of the application,
					using the following technologies:
				</p>
				<ul>
					<li>
						<strong>Frontend:</strong> Vue.js, Svelte, HTML, CSS,
						JS/TS
					</li>
					<li>
						<strong>Backend:</strong> Node.js, Express, MongoDB,
						GraphQL
					</li>
				</ul>
			</div>
		</div>
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

	.expertise {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5%;
		margin-bottom: 7rem;
	}

	.card {
		width: 300px;
		min-height: 200px;
		background-color: transparent;
		border: 2px solid white;
		border-radius: 14px;
		display: flex;
		flex-direction: column;
		padding: 20px;
	}

	.card-title {
		display: flex;
		padding: 20px 0px;
		width: 100%;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		gap: 10px;
	}

	.card-title h3 {
		width: 50%;
		font-family: "K2D Bold";
		color: white;
		letter-spacing: 1px;
		font-weight: bold;
		font-size: 20px;
		margin: 0;
		padding: 0;
	}

	img {
		object-fit: contain;
		max-width: 64px;
		max-height: 64px;
	}

	.card-description {
		letter-spacing: 1px;
		width: 100%;
	}

	.work-studies {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 7%;
	}

	.tab {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: .5rem;
	}

	.tab h3 {
		font-family: "Jockey-One";
		font-weight: 100;
		color: white;
		letter-spacing: 1px;
		font-size: 26px;
		margin: 0;
		padding: 0 0 .8rem 0;
	}

	.work, .study {
		color: black;
		background-color: #430D79;
		border-radius: 37px;
		width: 450px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		margin: 0;
		cursor: pointer;

		font-family: "K2D ExtraLight Regular";
		color: rgb(223, 223, 223);
		letter-spacing: 0.08em;
		font-weight: bold;
		font-size: 16px;
	}

	.work-drop, .study-drop {
		width: 450px;
		background-color: #430d7962;
		padding: 0px 15px;
		margin: 0;
		max-height: 0;
		transition: max-height 0.4s ease-out;
		overflow: hidden;
		font-family: "K2D ExtraLight Regular";
	}

	.study-drop {
		background-color: #00489b62;
	}

	.work-drop.shown, .study-drop.shown {
		max-height: 500px;
		transition: max-height 0.4s ease-in;
	}

	.work img, .study img {
		max-width: 20px;
		max-height: 20px;
		transition: transform 0.2s ease-in;
	}

	.work img.rotate, .study img.rotate {
		transform: rotate(·180deg);
		-webkit-transform: rotate(-180deg);
	}

	.tab-item-title {
		margin: 0;
		padding: 10px 0px;
	}

	.study {
		background-color: #00489b;
	}
</style>
