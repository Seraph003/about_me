<template>
  <div class="container">
    <h2 class="text-center fw-bold mb-4">Kontak</h2>

    <form @submit.prevent="sendMessage" class="col-md-6 mx-auto">
    <!-- <form @submit.prevent="sendToWhatsApp" class="col-md-6 mx-auto"> -->
      <input v-model="form.name" type="text" class="form-control mb-3" placeholder="Nama" required>
      <input v-model="form.email" type="email" class="form-control mb-3" placeholder="Email" required>
      <textarea v-model="form.message" rows="5" class="form-control mb-3" placeholder="Pesan" required></textarea>
      <button class="btn btn-dark w-100">Kirim</button>
    </form>

    <p v-if="success" class="text-center text-success mt-3">Pesan berhasil dikirim!</p>

    <div class="text-center mt-4">
      <h5 class="fw-bold mb-3">Kontak Langsung</h5>
      <div class="d-flex justify-content-center gap-4">
        <!-- Email -->
        <a href="mailto:erikmasduki003@gmail.com" class="text-dark fs-4">
          <i class="bi bi-envelope-fill"></i>
        </a>
        <!-- WhatsApp -->
        <a href="https://wa.me/6281807766884" target="_blank" class="text-success fs-4">
          <i class="bi bi-whatsapp"></i>
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/erik_m_j_s" target="_blank" class="text-danger fs-4">
          <i class="bi bi-instagram"></i>
        </a>
        <!-- Github -->
        <a href="https://github.com/Seraph003" target="_blank" class="text-dark fs-4">
          <i class="bi bi-github"></i>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "", email: "", message: "" },
      phone: "+6281807766884",
      success: false
    }
  },
  methods: {
    sendMessage() {
      let messages = JSON.parse(localStorage.getItem("messages")) || [];

      messages.push({
        name: this.form.name,
        email: this.form.email,
        message: this.form.message,
        date: new Date().toLocaleString()
      });

      localStorage.setItem("messages", JSON.stringify(messages));

      this.success = true;
      setTimeout(() => {
        this.success = false;
        this.form = { name: "", email: "", message: "" };
      }, 2000)
    },

    sendToWhatsApp() {
      const text = 
        `Halo, saya *${this.form.name}* %0A` +
        `Email: ${this.form.email}%0A%0A` +
        `Pesan:%0A${this.form.message}`;

      const url = `https://wa.me/${this.phone}?text=${text}`;

      window.open(url, "_blank");

      this.form = { name: "", email: "", message: "" };
    }
  }
}
</script>
