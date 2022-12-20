<template>
    <v-card class="mx-auto" color="grey-lighten-3">
        <v-layout>
            <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
                <template v-slot:image>
                    <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
                </template>

                <v-menu>
                    <template v-slot:activator="{ props }">
                        
                            <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                        
                        
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-app-bar-title>Title</v-app-bar-title>

                <v-spacer></v-spacer>


                <v-btn icon>
                    <v-icon>mdi-twitch</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>

                <template v-slot:extension>
        <v-tabs
          v-model="model"
          centered
        >
          <v-tab
            v-for="item in items"
            :key=item.index
            :value=item
          >
            {{item.title}}
          </v-tab>
        </v-tabs>
      </template>

            </v-app-bar>
            <v-main></v-main>
        </v-layout>
    </v-card>
</template>

<script>
import HeartButton from './HeartButton.vue';
import VerticalButton from './VerticalButton.vue'

export default {
    name: 'Header',

    data: () => ({
        items: [
            { title: 'Recent' },
            { title: 'Favorites' },
            { title: 'Architecture' },
        ],
    }),

    components: {
        HeartButton, VerticalButton
    }
}


</script>