<script setup>
import TimeLine from './TimeLine.vue';
import AddData from './AddData.vue';
import Pickup from './Pickup.vue';
import { onMounted, inject, ref, reactive } from 'vue';

const items = inject('articles')
const article_title = inject('article_title')
const changeTitle = inject('changeTitle')


</script>

<template>

    <!-- タブによって表示を切り替えたい場合はそのコンポーネントをdiv単位で切り分ける
        error : Runtime directive used on component with non-element root node. The directives will not function as intended.
    -->
    <v-parallax src="dist\assets\image (2).jpg">
        <div v-show="(article_title === 'Timeline')">
            <TimeLine  />
        </div>
        <!--  -->
        <div v-show="(article_title === 'Adddata')">
            <AddData  />
        </div>
        <div v-show="(article_title === 'Pickup')">
            <Pickup  />
        </div>
    </v-parallax>
        
        
        
        <!-- <v-btn @click=changeTitle>dddd</v-btn> -->

</template>



