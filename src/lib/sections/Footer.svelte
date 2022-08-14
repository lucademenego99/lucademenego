<!-- Footer of the page -->

<script lang="ts">
    import LinkedinIcon from '../../assets/linkedin.svg';
    import GithubIcon from '../../assets/github-2.svg';
    import InstagramIcon from '../../assets/instagram.svg';
</script>

<div class="footer">
    <p>Luca De Menego, ©2022</p>
    <div class="social">
        <a href="https://it.linkedin.com/in/luca-de-menego-7a3085229" target="_blank"><img src="{LinkedinIcon}" alt="Linkedin Link"></a>
        <a href="https://github.com/lucademenego99" target="_blank"><img src="{GithubIcon}" alt="Github link"></a>
        <a href="https://www.instagram.com/lucademe_99/" target="_blank"><img src="{InstagramIcon}" alt="Instagram link"></a>
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

    a {
        text-decoration: none;
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