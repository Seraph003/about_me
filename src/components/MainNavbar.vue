<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="item in menu" :key="item.href">
            <a class="nav-link" @click.prevent="scrollToSection(item.href)">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#AboutMe" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
      ]
    }
  },
  methods: {
    scrollToSection(id) {
      const el = document.querySelector(id)
      if (!el) return

      const elementPosition = el.getBoundingClientRect().top + window.scrollY
      const elementHeight = el.offsetHeight
      const screenCenter = window.innerHeight / 2

      const scrollTo = elementPosition - (screenCenter - elementHeight / 2)

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth"
      })
    }
  }
}
</script>

