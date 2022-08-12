<script lang="ts">
    import LinkedinIcon from '../../assets/linkedin.svg';
    import GithubIcon from '../../assets/github-2.svg';
    import InstagramIcon from '../../assets/instagram.svg';
</script>

<div class="footer">
    <p>Luca De Menego, ©2022</p>
    <div class="social">
        <img src="{LinkedinIcon}" alt="">
        <img src="{GithubIcon}" alt="">
        <img src="{InstagramIcon}" alt="">
    </div>
</div>

<style>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "K2D Thin Regular";
        color: white;
    }

    .social {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    img {
        cursor: pointer;
        max-width: 40px;
        max-height: 40px;
        transition: transform 0.2s ease-in-out;
    }

    img:hover {
        transform: scale(1.3);
    }
</style>