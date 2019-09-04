<template>
    <div class="intro pb-5 pt-3" :style="{ backgroundImage: `url('${backgroundImg}')` }">
        <b-row>
            <b-col>
            </b-col>
            <b-col cols="8">
                <b-card class="specialCard mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>{{ title }}</center></h4>
                    <b-card-text>
                        {{ text }}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </div>
</template>


<script>
export default {
    props: ['backImg', 'introTitle', 'introText'],
    data() {
        return {
            backgroundImg: process.env.BASE_URL + this.backImg,
            title: this.introTitle,
            text: this.introText
        }
    },
    methods: {
        imageLoadError (img) {
            console.log('Image failed to load: ' + img)
        },
        getImgUrl(pic) {
            if (pic){
                //return require('../assets/img/' + pic)
                return this.publicPath + pic
            }
            return ""
            
        }
    }
}
</script>

<style>

.specialCard {
    opacity: .8;
}

</style>