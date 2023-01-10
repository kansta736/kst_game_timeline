<script setup>
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, reactive, onMounted } from "vue";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { db } from '../main.js'

const data = ref()
const fire = ref()
const error = ref()
const snackbar = ref(false)
const url_list = reactive([])

const input_image = ref('')
const img_path = ref('')
const img_url = ref()

const item = ref({
    color: '',
    icon: '',
    title: '',
    play_number: '',
    reviewscore: ''
})

const getCardItems = async () => {
    try {
        const usersCollection = collection(db, 'card-items');
        const usersSnapshot = await getDocs(usersCollection);
        data.value = usersSnapshot.docs.map(doc => doc.data());
        for (var i = 0; i < data.value.length; i++) {
            const storage = getStorage();
            fire.value = storageRef(storage, data.value[i].imgPath);
            getDownloadURL(fire.value).then(url => {
                url_list.push(url)
            })
        }
    } catch (e) {
        error.value = e
        console.log(error.value)
    }
}

const upload = async (file, item) => {
    snackbar.value = true
    const storage = getStorage();
    const stRef = storageRef(storage, `/card-img/${file[0].name}`);
    // メタデータを追加しないとjpegとして認識してくれない
    const metadata = {
        contentType: 'image/jpg',
    };
    await uploadBytesResumable(stRef, file[0], metadata)
        .then(async() => {
            img_path.value = `gs://gamers-timeline.appspot.com/card-img/${file[0].name}`
            await getDownloadURL(stRef).then(url => {
                img_url.value = url
            })
        })
        .then(async() => {
            const usersCollection = collection(db, 'card-items');
            const add_data = {
                color: item.color,
                icon: 'mdi-' + item.icon,
                imgPath: img_path.value,
                imgURL: img_url.value,
                show: false,
                text: 'aaaa',
                title: item.title,
                play_number: Number(item.play_number),
                reviewscore: Number(item.reviewscore)
            };
            await addDoc(usersCollection, add_data)
        })
        .catch((error) => {
            console.log(error);
        });
}

const onImagePicked = (file, item) => {
    input_image.value = file
}

onMounted(() => {
    getCardItems()
})
</script>

<template>
    <v-list>
        <v-list-item v-for="(item, i) in url_list" :key=i>
            imgURL: {{ item }}
        </v-list-item>
    </v-list>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="item.color" label="Color" required></v-text-field>
                    <v-text-field v-model="item.icon" label="Icon" required></v-text-field>
                    <v-text-field v-model="item.title" label="Title" required></v-text-field>
                    <v-text-field v-model="item.reviewscore" label="Reviewscore" required></v-text-field>
                    <v-text-field v-model="item.play_number" label="Play_number" required></v-text-field>

                    <v-file-input v-model="input_image" accept="image/*" show-size label="画像ファイルをアップロードしてください"
                        prepend-icon="mdi-image" @change="onImagePicked(input_image, item)"></v-file-input>

                    <v-btn width="200" max-width="200" large @click="upload(input_image, item)">投 稿</v-btn>
                    <v-snackbar v-model="snackbar" vertical>
                        <div class="text-subtitle-1 pb-2">投稿完了</div>
                        <p>投稿完了</p>
                        <template v-slot:actions>
                            <v-btn color="indigo" variant="text" @click="snackbar = false">
                                Close
                            </v-btn>
                        </template>
                    </v-snackbar>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>



