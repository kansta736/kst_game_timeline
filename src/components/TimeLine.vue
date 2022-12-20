<!-- vue3での記法 -->
<script setup>
import Card from './Card.vue'
import SideVar from './SideVar.vue';
import { ref, reactive } from "vue";

// reactiveを記載することで変更をリアクティブに検知する
const items = reactive([
    {
        color: 'red-lighten-2',
        icon: 'mdi-star',
        show: false,
        text: `I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
                            have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go
                            with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do
                            his laundry? I've got to find a way to escape.`,
    },
    {
        color: 'purple-lighten-2',
        icon: 'mdi-book-variant',
        show: false,
        text: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
    },
    {
        color: 'green-lighten-1',
        icon: 'mdi-airballoon',
        show: false,
        text: `I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
                            have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go
                            with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do
                            his laundry? I've got to find a way to escape.`,
    },
    {
        color: 'indigo-lighten-2',
        icon: 'mdi-buffer',
        show: false,
        text: `I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
                            have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go
                            with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do
                            his laundry? I've got to find a way to escape.`,
    },
])

// defineProps と defineEmits は、<script setup> 内でのみ使用可能なコンパイラマクロ
const props = defineProps({
    item: {
        color: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        show: {
            type: Boolean,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
})

const changeShow = (target) => {
    const target_item = items[target.index]
    target_item.show = target.show
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" xs="4">
                <v-timeline align="start">
                    <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon"
                        fill-dot>
                        <!-- propsとして１つのオブジェクトをコンポーネントに渡す -->
                        <Card :item=item :index=i @changeShow="changeShow" />
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

