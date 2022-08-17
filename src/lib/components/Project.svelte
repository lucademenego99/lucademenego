<!-- Element for showcasing a certain project. It contains various elements that must be provided -->

<script lang="ts">
    import PrimaryButton from "./PrimaryButton.svelte";
    import SecondaryButton from "./SecondaryButton.svelte";

    export let isFlipped;
    export let image;
    export let aosDelay;
    export let title;
    export let description;
    export let primaryIcon;
    export let primaryLink;
    export let primaryText;
    export let secondaryIcon;
    export let secondaryLink;
    export let secondaryText;
    export let keywords;
</script>

<div
    class="project"
    class:flipped={isFlipped}
    data-aos="fade-up"
    data-aos-delay={aosDelay}
>
    <img src={image} alt="Project's screenshot" />
    <div class="project-main" class:flipped={isFlipped}>
        <h3 class="project-title" class:flipped={isFlipped}>{title}</h3>
        <div class="description" class:flipped={isFlipped}>
            <p>{description}</p>
        </div>
        <div class="buttons">
            <PrimaryButton
                text={primaryText}
                icon={primaryIcon}
                link={primaryLink}
            />
            <SecondaryButton
                text={secondaryText}
                icon={secondaryIcon}
                link={secondaryLink}
            />
        </div>
    </div>
    <div class="keywords">
        <ul class:flipped={isFlipped}>
            {#each keywords as keyword}
                <li>{keyword}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .project {
        width: 95%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1rem 0 6rem 0;
    }

    .project img {
        width: 600px;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

    .project.flipped {
        flex-direction: row-reverse;
    }

    .project-main {
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
    }

    .project-main.flipped {
        align-items: flex-end;
        justify-content: flex-end;
    }

    .project-title {
        font-size: 30px;
        font-weight: 100;
        color: white;
        padding: 0;
        margin: 0;
        letter-spacing: 0.08em;
    }

    .project-title::after {
        content: "";
        display: block;
        width: 105%;
        border-radius: 17px;
        height: 7px;
        z-index: -1;
        background-color: var(--secondary-color);
        margin: 0 0 15px 0;
        position: relative;
        bottom: 17px;
    }

    .project-title.flipped::after {
        left: -5%;
    }

    .description {
        position: relative;
        left: -100px;
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
        max-width: 100%;
    }

    .description.flipped {
        left: 100px;
    }

    .buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        gap: 15px;
    }

    .keywords {
        position: relative;
        font-family: "K2D Thin Regular";
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 0.2em;
        color: #a5a5a5;
    }

    .keywords ul {
        display: grid;
        gap: 10px;
        list-style-type: none;
    }
    .keywords ul::before {
        content: "";
        display: block;
        width: 1px;
        height: 200px;
        background-color: #a5a5a5;
        position: absolute;
        left: 25px;
    }

    .keywords ul.flipped::before {
        display: none;
    }
    .keywords ul.flipped::after {
        content: "";
        display: block;
        width: 1px;
        height: 200px;
        background-color: #a5a5a5;
        position: absolute;
        left: calc(100% + 10px);
    }

    @media (max-width: 1460px) {
        .project-main {
            order: 1;
        }

        img {
            order: 2;
        }

        .keywords {
            order: 3;
        }

        .keywords ul, .keywords ul.flipped {
            display: inline-block;
        }

        .keywords ul > li, .keywords ul.flipped > li{
            display: inline-block;
            margin: 5%;
        }

        .keywords ul::before, .keywords ul.flipped::after {
            display: none;
        }

        .description, .description.flipped {
            left: 0;
        }
    }
</style>
