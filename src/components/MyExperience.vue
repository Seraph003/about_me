<template>
  <div class="container">
    <h2 class="text-center fw-bold mb-4">Pengalaman</h2>

    <ul class="list-group">
      <li class="list-group-item" v-for="exp in list" :key="exp.title">
        <h5 class="fw-bold">{{ exp.title }}</h5>
        <small class="text-muted">{{ exp.year }}</small>
        <p>{{ exp.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "PT Eska Link — Fullstack Web Developer (Internship) ", year: "2024 – 2025", desc: "Mengembangkan aplikasi web menggunakan Laravel (backend) dan Vue.js (frontend)." },
        { title: "Universitas Kristen Krida Wacana — Assistant Lecturer", year: "2022 – 2024", desc: "Mendampingi pengajaran praktikum pemrograman menggunakan Greenfoot untuk SMAK Mater Dei dan SMAK Kalam Kudus" }
      ]
    }
  }
}
</script>
