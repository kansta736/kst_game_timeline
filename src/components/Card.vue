<script setup>
// 親コンポーネントから渡された値を利用する
defineProps(['item','index'])
// emitで子コンポーネントに渡された値を親コンポーネントに渡して更新する
const emit = defineEmits(['changeShow'])

const changeShow = (item, index) => {
    //emitを実行する時に設定するイベント名と親コンポーネントに渡す変数を渡す
    emit('changeShow', {show:!item.show, index:index})
}
</script>

<template>
    <v-card width="600">
        <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title :class="['text-h6', `bg-${item.color}`]">
                Lorem Ipsum Dolor
            </v-card-title>
        </v-img>
        <v-card-subtitle>
            1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
                Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="changeShow(item,index )"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="item.show">
                <v-divider></v-divider>
                <v-card-text>{{ item.text }}</v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>