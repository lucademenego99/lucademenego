<!-- Primary Button, containing a text, an icon and a link -->

<script lang="ts">
    export let text;
    export let icon;
    export let link;
</script>

<a href="{link}" target="_blank">
    <div class="primary-button">
        <div class="icon-container">
            <img src={icon} alt="" />
        </div>
        <p>{text}</p>
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .primary-button {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
        align-items: center;
        padding: 16px;
        background-color: transparent;
        font-family: "K2D Light Regular";
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 0.08em;
        color: var(--primary-color-dark);
    }

    .primary-button .icon-container {
        transition: all 0.2s ease-in-out;
        background-color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        padding: 10px;
        border-radius: 50%;
        margin: 0;
    }

    .primary-button p {
        margin: 0;
        padding: 0;
    }

    .icon-container:hover {
        border-radius: 0;
        background-color: var(--primary-color-alpha);
    }

    .primary-button img {
        max-width: 27px;
        max-height: 27px;
    }
</style>
