<template>
  <v-app>
    <v-main>
      <Header />
      <Body />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';
import {onMounted, provide, reactive, ref} from 'vue';

const props = defineProps({
    items: {
        title: {
            type: String,
            // required: true
        }
    },
    article_title : {
      type: String,
      // required: true
    }
})

const items = ref([
    { title: 'Timeline' },
    { title: 'Pickup' },
    // { title: 'Architecture' },
    // { title: 'Adddata' },
])

const article_title = ref('Timeline')

const changeTitle = (title) => {
    console.log(title)
    article_title.value = title 
}

provide('articles', items)
provide('article_title', article_title)
provide('changeTitle', changeTitle)

</script>
