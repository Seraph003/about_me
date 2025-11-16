<template>
  <Navbar />

  <section id="home">
    <Hero />
  </section>

  <section id="AboutMe" class="py-5 bg-light">
    <AboutMe />
  </section>

  <section id="skills" class="py-5" data-aos="fade-up" data-aos-duration="2000">
    <Skills />
  </section>

  <section id="projects" class="py-5 bg-light" data-aos="fade-right" data-aos-duration="2000">
    <Projects />
  </section>

  <section id="experience" class="py-5" data-aos="fade-up" data-aos-duration="2000">
    <Experience />
  </section>

  <section id="contact" class="py-5 bg-light">
    <Contact />
  </section>
</template>

<script>
import Navbar from './components/MainNavbar.vue'
import Hero from './components/MyHero.vue'
import AboutMe from './components/AboutME.vue'
import Skills from './components/MySkills.vue'
import Projects from './components/MainProjects.vue'
import Experience from './components/MyExperience.vue'
import Contact from './components/ContactMe.vue'

export default {
  components: {
    Navbar, Hero, AboutMe, Skills, Projects, Experience, Contact
  }
}
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
