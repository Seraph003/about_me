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
        { title: "Fullstack Developer Freelance", year: "2022 - Sekarang", desc: "Membuat website berbagai perusahaan" },
        { title: "Intern Programmer", year: "2021", desc: "Membantu develop sistem internal" }
      ]
    }
  }
}
</script>
