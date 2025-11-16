<template>
  <div class="container">
    <h2 class="text-center fw-bold mb-4">Skill</h2>

    <div v-for="skill in skills" :key="skill.name" class="mb-3">
      <label class="fw-semibold">{{ skill.name }}</label>
      <div class="progress">
        <div class="progress-bar" role="progressbar"
             :style="{width: skill.level + '%'}">
          {{ skill.level }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Vue.js", level: 85 },
        { name: "Laravel", level: 90 },
        { name: "UI/UX Design", level: 75 },
        { name: "JavaScript", level: 88 },
      ]
    }
  }
}
</script>
