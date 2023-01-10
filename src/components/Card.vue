<script setup>
// 親コンポーネントから渡された値を利用する
defineProps(['item', 'index'])
// emitで子コンポーネントに渡された値を親コンポーネントに渡して更新する
const emit = defineEmits(['changeShow'])

const changeShow = (item, index) => {
    //emitを実行する時に設定するイベント名と親コンポーネントに渡す変数を渡す
    emit('changeShow', { show: !item.show, index: index })
    console.log(11111)
}
</script>

<template>
    <v-card width="600">
        <v-img class="align-end text-white" height="200" :src=item.imgURL cover>
            <v-card-title class="['text-h6', `bg-${item.color}`]">
                {{ item.title }}
            </v-card-title>
        </v-img>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-card-subtitle class="pt-4">
                        やりこみ度 :
                        <v-icon size="x-small" v-for="(score) in item.reviewscore" :key="score">mdi-star</v-icon>
                    </v-card-subtitle>
                </v-col>
                <v-col cols="6">
                    <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="changeShow(item, index)"></v-btn>
        </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
        
        <v-expand-transition>
            <div v-show="item.show">
                <v-divider></v-divider>
                <v-card-text>{{ item.text }}</v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>