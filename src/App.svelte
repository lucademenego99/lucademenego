<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import Aside from "./lib/components/Aside.svelte";
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
    <Aside />
    <div class="main">
      <Section content={Presentation} width="80" height="70" />
      <Section content={About} width="73" height="80" />
      <Section content={Experience} width="80" height="70" />
      <Section content={Projects} width="73" height="80" />
      <Section content={Contact} width="80" height="70" />
    </div>
  </main>
</div>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;1,400;1,500&display=swap");

    /* Main body element */
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      background-color: var(--background-color);
    }

    /* Scrollbar */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: var(--background-color);
    }

    ::-webkit-scrollbar {
      width: 6px;
      background-color: var(--background-color);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: var(--primary-color);
    }
  </style>
</svelte:head>

<style>
  :root {
    --header-height: 75px;
    --aside-width: 25px;
    --main-text-color: white;
    --secondary-text-color: #ccc;
    --darker-text-color: rgb(184, 184, 184);
    --grey-light-color: #6b6e70;
    --grey-color: #474b4f;
    --background-color: #222629;
    --primary-color: #86c232;
    --secondary-color: #61892f;
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
    width: calc(100%);
    margin-left: calc(var(--aside-width) * 3 / 2);
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
