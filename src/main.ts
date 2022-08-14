import App from './App.svelte'

// Import main css file for the webpage
import './app.css'

// Import AOS's requirements from node_modules
import 'aos/dist/aos.css';
import 'aos/dist/aos';

const app = new App({
  target: document.getElementById('app')
})

export default app
