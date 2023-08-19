<script lang="ts">
  import Header from "./lib/sections/Header.svelte";
  import Footer from "./lib/sections/Footer.svelte";
  import Section from "./lib/sections/Section.svelte";
  import Presentation from "./lib/sections/Presentation.svelte";
  import About from "./lib/sections/About.svelte";
  import Experience from "./lib/sections/Experience.svelte";
  import Projects from "./lib/sections/Projects.svelte";
  import Contact from "./lib/sections/Contact.svelte";

  import AOS from "aos";

  // Initialize Animate on Scroll package - all animations will be performed only once
  AOS.init({
    once: true
  });
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
  <title>Luca De Menego | Full Stack Developer | Flutter Enthusiast</title>
  <meta name="description" content="I'm Luca, a versatile full stack developer proficient in C#, Python, Node.js, and more. Experienced in RESTful APIs, gRPC, and microservices. Skilled in Vue.js, Svelte, and Yii2 for web frameworks. Adept at crafting 3D web apps with Three.js. Expert in Flutter for mobile apps with ARKit and ARCore. Contributed to infrastructure enhancements leveraging SAP B1. IT Head at Thema Optical.">
  <meta name="keywords" content="full stack developer, Flutter mobile app, C#, Python, Node.js, Vue.js, Svelte, Yii2, ARKit, ARCore, Three.js, gRPC, Firebase Cloud Messaging, AWS DynamoDB, software monitoring, IT head, Thema Optical">
  <meta property="og:title" content="Luca De Menego | Full Stack Developer | Flutter Enthusiast">
  <meta property="og:description" content="I'm Luca, a versatile full stack developer proficient in C#, Python, Node.js, and more. Experienced in RESTful APIs, gRPC, and microservices. Skilled in Vue.js, Svelte, and Yii2 for web frameworks. Adept at crafting 3D web apps with Three.js. Expert in Flutter for mobile apps with ARKit and ARCore. Contributed to infrastructure enhancements leveraging SAP B1. IT Head at Thema Optical.">
  <meta property="og:image" content="/og-thumbnail.jpg">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://lucademenego99.github.io/lucademenego/">
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
    --primary-color-dark-brighter: #59179c;
    --primary-color-bright: #a850ff;
    --primary-color-alpha: #9b37ffb0;
    --primary-color-less-alpha: #9b37ff2f;
    --secondary-color: #00489b;
    --secondary-color-bright: #0c53a5;
    --secondary-color-brighter: #0d5cb6;
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
