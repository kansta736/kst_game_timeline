<template>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
        </div>

        <div class="['pt-0','text-h6']">
          好きな時間に好きなゲームを好きなだけ
        </div>

        <v-divider></v-divider>

        <div>
            <!-- {{ new Date().getFullYear() }} —  -->
            <div>かんすた</div>
        </div>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>