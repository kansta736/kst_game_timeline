<!-- vue3での記法 -->
<script setup>
import Card from './Card.vue'
import { ref, reactive, onMounted } from "vue";
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref as storageRef } from "firebase/storage";
import { db } from '../main.js'

const data = ref()
const fire = ref()
const error = ref()

const img = ref()

const getCardItems = async () => {
    console.log("getCardItems")
    try {
        const usersCollection = collection(db, 'card-items');
        const usersSnapshot = await getDocs(usersCollection);
        data.value = usersSnapshot.docs.map(doc => doc.data());
        for (var i = 0; i < data.value.length; i++) {
            console.log(data.value[i])
            const storage = getStorage();
            fire.value = storageRef(storage, data.value[i].imgPath);
            // console.log(fire.value)
            getDownloadURL(fire.value).then(url => {
                console.log(url)
            })
        }

    } catch (e) {
        error.value = e
        console.log(error.value)
    }
}

onMounted(() => {
    getCardItems()
})

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
    const target_item = data.value[target.index]
    target_item.show = target.show
}




</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" xs="4">
                <v-timeline  align="start">
                    <v-timeline-item v-for="(item, i) in data" :key="i" :dot-color="item.color" :icon="item.icon"
                        fill-dot>
                        <!-- propsとして１つのオブジェクトをコンポーネントに渡す -->
                        <Card :item=item :index=i @changeShow="changeShow" />
                    </v-timeline-item>
                </v-timeline>
                <!-- <v-timeline side="end" align="start">
                    <v-timeline-item v-for="(item, i) in data" :key="i" :dot-color="item.color" :icon="item.icon"
                        fill-dot>
                        <Card :item=item :index=i @changeShow="changeShow" />
                    </v-timeline-item>
                </v-timeline> -->
            </v-col>
        </v-row>
    </v-container>
</template>

