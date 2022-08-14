<!-- Primary Button, containing a text, an icon and a link -->

<script lang="ts">
    export let text;
    export let icon;
    export let link;
</script>

<a href="{link}" target="_blank">
    <div class="primary-button">
        {text}
        <img src={icon} alt="" />
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .primary-button {
        min-width: 200px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        align-items: center;
        padding: 16px;
        background-color: var(--primary-color);
        font-family: "K2D Light Regular";
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 0.08em;
        color: white;
    }

    .primary-button:hover {
        border-radius: 15px;
        background-color: var(--primary-color-alpha);
    }

    .primary-button img {
        max-width: 23px;
        max-height: 23px;
    }
</style>
