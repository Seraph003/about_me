<template>
  <div class="container">
    <h2 class="text-center fw-bold mb-4">Proyek Saya</h2>

    <div class="row">
      <div v-for="p in projects" :key="p.title" class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <img :src="p.image" class="card-img-top" alt="project-img">
          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>
            <p>{{ p.desc }}</p>
            <a :href="p.link" class="btn btn-dark btn-sm" target="_blank">Lihat</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Portfolio from '../assets/Portfolio.png'

export default {
  data() {
    return {
      projects: [
        { title: "Portfolio Website", desc: "Website pribadi", image: Portfolio, link: "#" },
        { title: "???", desc: "???", image: "", link: "#" },
        { title: "???", desc: "???", image: "", link: "#" },
      ]
    }
  }
}
</script>
