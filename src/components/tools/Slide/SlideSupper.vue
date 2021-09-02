<template>
    <div>
        <div id="slider">
            <div v-for="(item, i) in imgBG" :key="i" class="item" :class="{ active: pointActice==i ? true: false  }">
                <img :src="item.img" />
                <div class="slide-text">
                    <div class="slide-text__icon"><i :class="item.fas"></i></div>
                    <div class="slide-text__title">{{ item.title | uppercase}}</div>
                    <div class="slide-text__subTitle">{{ item.detail | uppercase}}</div>
                </div>
            </div>
            <div>
                <a type='button' v-on:click="clickPrev()" ><i class="btnPrev fas fa-angle-left "></i></a>
                <a type='button' v-on:click="clickNext()" ><i class="btnNext fas fa-angle-right"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
    name: 'SlideSupper',
    props: {
        picture: Array
    },
    data () {
        return {
            pointActice: 0,
            imgBG: this.picture || [
                {
                    title: 'Noname',
                    detail: 'Expected indentation',
                    fas: 'fab fa-ups',
                    img: require('./../../../assets/img/bg1.jpg')
                },
                {
                    title: 'Noname1',
                    detail: 'Expected indentation',
                    fas: 'fas fa-shipping-fast',
                    img: require('./../../../assets/img/bg2.jpg')
                },
                {
                    title: 'Noname2',
                    detail: 'Expected indentation',
                    fas: 'fab fa-ups',
                    img: require('./../../../assets/img/bg3.jpg')
                }

            ]
        }
    },
    methods: {
        clickPrev () {
            this.pointActice = this.pointActice + this.imgBG.length - 1
            this.pointActice = this.pointActice % this.imgBG.length
        },
        clickNext () {
            this.pointActice++
            this.pointActice = this.pointActice % this.imgBG.length
            gsap.timeline()
                .fromTo('.slide-text__icon', { opacity: 0, duration: 0.4 }, { opacity: 1, duration: 0.5, delay: 0.5, ease: 'power3.in' })
                .fromTo('.slide-text__title', { opacity: 0 }, { duration: 0.3, opacity: 1, ease: 'power3.in' })
                .fromTo('.slide-text__subTitle', { opacity: 0 }, { duration: 0.3, opacity: 1, ease: 'power3.in' })
        }
    },
    computed: {

    },
    created () {

    }
}
</script>

<style lang="scss" scoped>
#slider{
    position: relative;
    width: 100%;
    min-height: 500px;
    .item{
        width: 100%;
        height: 100%;
        background-size: cover;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 2s;
        img{
            object-fit: cover;
            /* height: 100%; */
        }
    }
    .active{
        visibility: visible;
        opacity: 1;
        transform: opacity 2s;
    }
}
.btnPrev{
    font-size: 50px !important;
    position: absolute;
    color: aliceblue;
    cursor: pointer;
    left: 5%;
    top: 50%;
}
.btnNext{
    font-size: 50px !important;
    position: absolute;
    color: aliceblue;
    cursor: pointer;
    right: 5%;
    top: 50%;
}
.slide-text{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(0, -60%);
    transition: all .6s ease;
    text-align: center;
    // opacity: 0;
    &__title{
        color: #fff;
        font-size: 7rem;
        font-weight: 800;
    }
    &__subTitle{
        color: #fff;
        font-size: 4rem;
        font-weight: 300;
    }
    &__icon{
        color: #fff;
        font-size: 8rem;
        font-weight: 300;
    }
}
@media screen and (max-width: 900px) {
    .slide-text{
        transform: translate(-50%, -50%);
        transition: all .6s ease;
    }
}
</style>
