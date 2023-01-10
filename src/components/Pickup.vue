<script setup>

const messages = [
    {
        from: 'You',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple-lighten-1',
    },
    {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
    },
    {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1',
    },
]


</script>



<template>
    <v-container>
        <v-row justify="space-around">
            <v-col cols="12">
                <v-card>
                    <v-carousel>
                        <v-carousel-item src="dist\assets\Fk5syP4akAA8VJr.jpg" cover></v-carousel-item>

                        <v-carousel-item src="dist\assets\名称未設定_4.2.1.jpg" cover></v-carousel-item>

                        <v-carousel-item src="dist\assets\46E1844D-A4A1-4B0D-BFC2-A6C5013F21D4.jpeg"
                            cover></v-carousel-item>
                    </v-carousel>

                    <v-card-text>
                        <v-timeline direction="horizontal">
                            <v-timeline-item>
                                <template v-slot:opposite>
                                    <v-card color="#1F7087" theme="dark">
                                        <div class="d-flex flex-no-wrap justify-space-between">
                                            <div>
                                                <v-card-title class="text-h6">
                                                    動画編集に挑戦
                                                </v-card-title>
                                                <v-card-subtitle>2022-07-25</v-card-subtitle>
                                            </div>
                                            <v-avatar class="ma-3" size="150" rounded="0">
                                                <v-img src="dist\assets\名称未設定_4.2.1.jpg"></v-img>
                                            </v-avatar>
                                        </div>
                                    </v-card>
                                </template>
                                <v-container>
                                    <v-row class="justify-center">
                                        <v-col cols="9">
                                            <div>
                                                ライズ時代に投稿はしていたものの、編集はろくにしていなかったのでサンブレイクが発売されたタイミングでいざ挑戦。
                                                サムネも内容もてんでダメで継続もできなかったけど、編集者の大変さや血ににじむ努力が少し感じ取れた気がする。
                                            </div>
                                            <div>
                                                作業時は楽しかったので、趣味程度に少しずつ勉強していきたい。
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-timeline-item>

                            <v-timeline-item>
                                <template v-slot:opposite>
                                    <v-card color="#1F7087" theme="dark">
                                        <div class="d-flex flex-no-wrap justify-space-between">
                                            <div>
                                                <v-card-title class="text-h6">
                                                    TGS単独参戦
                                                </v-card-title>
                                                <v-card-subtitle>2022-09-18</v-card-subtitle>
                                            </div>
                                            <v-avatar class="ma-3" size="150" rounded="0">
                                                <v-img
                                                    src="dist\assets\5B37A3A1-BC4E-4E40-801E-7F83C4DE04E9.jpeg"></v-img>
                                            </v-avatar>
                                        </div>
                                    </v-card>
                                </template>
                                <v-container>
                                    <v-row class="justify-center">
                                        <v-col cols="9">
                                            <div>
                                                初めてゲーム関連？のイベントに足を運んでみた。
                                                当日の気温、大雨による湿気と混雑で体験の列に並ぶ気になれず、結果的に翔丸(shomaru7)さんとじゃんけんだけして帰宅した。
                                            </div>
                                            <div>
                                                でも見て回るだけでも楽しかった!!
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-timeline-item>

                            <v-timeline-item>
                                <template v-slot:opposite>
                                    <v-card color="#1F7087" theme="dark">
                                        <div class="d-flex flex-no-wrap justify-space-between">
                                            <div>
                                                <v-card-title class="text-h6">
                                                    Twitchで記念企画
                                                </v-card-title>
                                                <v-card-subtitle>2022-11-13~15</v-card-subtitle>
                                            </div>
                                            <v-avatar class="ma-3" size="150" rounded="0">
                                                <v-img src="dist\assets\FhbQolVaAAgj5Uh (1).jpg"></v-img>
                                            </v-avatar>
                                        </div>
                                    </v-card>
                                </template>
                                <v-container>
                                    <v-row class="justify-center">
                                        <v-col cols="9">
                                            <div>
                                                Twitchで趣味程度に配信をするようになった。
                                                フォロワー50人達成企画で参加型マインクラフト(エンドラ討伐)をプレイ。
                                                VPC構築から環境を準備した結果、ネザー移動や実績達成、死亡時などにクラッシュする問題が多発し、
                                                参加者がまともにプレイできない事態に...
                                            </div>
                                            <div>
                                                劣悪な環境でも諦めず、何とかクリアしたがよくよく見たらイージーモードだった。
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-timeline-item>
                            <v-timeline-item>
                                <template v-slot:opposite>
                                    <v-card color="#1F7087" theme="dark">
                                        <div class="d-flex flex-no-wrap justify-space-between">
                                            <div>
                                                <v-card-title class="text-h6">
                                                    初めての推し事
                                                </v-card-title>
                                                <v-card-subtitle>2022-12-25</v-card-subtitle>
                                            </div>
                                            <v-avatar class="ma-3" size="150" rounded="0">
                                                <v-img src="dist\assets\Fk5syP4akAA8VJr.jpg"></v-img>
                                            </v-avatar>
                                        </div>
                                    </v-card>
                                </template>
                                <v-container>
                                    <v-row class="justify-center">
                                        <v-col cols="9">
                                            <div>
                                                大好きなSPYGEAさんからのビッグなクリスマスプレゼント。
                                                ゴリゴリFPSする姿はもちろん、デバイスやグッズ紹介などときより見せるゆったりした雰囲気も好き。
                                                今年はギアパーカーで納めます。
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <!-- <div>
                                    <div class="text-h6">Content title</div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div> -->
                                <!-- 2年前くらいから気になっていたゲーム。狭い拠点に無理やり大きいオブジェクトを設置しようとして、オブジェクト付近のあったチェストが消失。マップ異動によるNPC消失やスタックなど様々な問題に悩まされ継続を断念。内容自体はめちゃくちゃ面白かったのでまたいつかやる。 -->
                            </v-timeline-item>
                        </v-timeline>


                    </v-card-text>
                </v-card>

            </v-col>

        </v-row>
    </v-container>
</template>