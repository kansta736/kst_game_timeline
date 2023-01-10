<template>
    <v-card class="mx-auto" color="grey-lighten-3">
        <v-layout>
            <v-app-bar color="teal-darken-4" image="dist\assets\スクリーンショット 2022-12-31 232218.png">
                <template v-slot:image>
                    <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
                </template>
                <v-app-bar-title>かんすたのゲーム年表
                </v-app-bar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-twitch</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <template v-slot:extension>
                    <v-tabs centered>
                        <v-tab v-for="item in items" :key=item.index :value=item @click=changeTitle(item.title)>
                            {{ item.title }}
                        </v-tab>
                    </v-tabs>
                </template>

            </v-app-bar>
            <v-main></v-main>
        </v-layout>
    </v-card>
</template>

<script setup>
import { inject } from 'vue';

const items = inject('articles')
const article_title = inject('article_title')
const changeTitle = inject('changeTitle')

</script>