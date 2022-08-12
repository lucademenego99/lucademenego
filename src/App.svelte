<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import Aside from "./lib/components/Aside.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import Section from "./lib/components/Section.svelte";
  import Presentation from "./lib/pages/Presentation.svelte";
  import About from "./lib/pages/About.svelte";
  import Experience from "./lib/pages/Experience.svelte";
  import Projects from "./lib/pages/Projects.svelte";
  import Contact from "./lib/pages/Contact.svelte";
</script>

<div class="app">
  <Header />
  <main>
    <div class="main">
      <Section content={Presentation} width="100%" height="calc(100vh - var(--header-height))" />
      <Section content={About} width="100%" height="auto" />
      <Section content={Experience} width="100%" height="auto" />
      <Section content={Projects} width="100%" height="auto" />
      <Section content={Contact} width="100%" height="auto" />
    </div>
  </main>
  <Footer />
</div>

<svelte:head>
  <style>
    /* @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;1,400;1,500&display=swap"); */

    
  </style>
</svelte:head>

<style>
  :root {
    --header-height: 100px;
    --aside-width: 25px;
    --main-text-color: white;
    --secondary-text-color: #ccc;
    --darker-text-color: rgb(184, 184, 184);
    --grey-light-color: #6b6e70;
    --grey-color: #474b4f;
    --background-color: #15212c;
    --primary-color: #9B37FF;
    --primary-color-dark: #430D79;
    --primary-color-dark-bright: #4b1383;
    --primary-color-bright: #a850ff;
    --primary-color-alpha: #9b37ffb0;
    --primary-color-less-alpha: #9b37ff2f;
    --secondary-color: #00489b;
    --secondary-color-bright: #0c53a5;
    --small-font-size: 14px;
    --medium-font-size: 16px;
    --large-font-size: 20px;
    --x-large-font-size: 50px;
    --xx-large-font-size: 60px;
    --divider-height: 80px;
  }

  .app {
    width: 100%;
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 100%;
    height: calc(100% - var(--header-height));
    box-sizing: border-box;
    position: relative;
    right: 0;
  }

  main .main {
    width: 100%;
    /* margin-left: calc(var(--aside-width) * 3 / 2); */
    box-sizing: border-box;
    position: relative;
    right: 0;
    display: flex;
    flex-direction: column;
  }

  main .main * {
    margin: 0;
  }
</style>
