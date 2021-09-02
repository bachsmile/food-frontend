<template>
    <div class="pattents">
        <div class="box">
            <div class="box-1" v-for="(item, i) in listImg" :key="i" :id="item.id">
                <div class="box-detail">
                    <span class="number">{{item.number}}</span>
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                </div>
                <div class="box-img">
                    <div class="img"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { EventBus } from './../../service/eventBus'
export default {
    name: 'Pattents',
    props: {
        // start: Boolean
    },
    data () {
        return {
            listImg: [
                {
                    id: 'i1',
                    number: '01',
                    img: require('../../assets/img/angle-box.svg'),
                    title: 'people',
                    desc: 'aaaaaaaaaaaaaaaaaaaaaaaa'
                },
                {
                    id: 'i2',
                    number: '02',
                    img: require('../../assets/img/diagonal-box.svg'),
                    title: 'people',
                    desc: 'aaaaaaaaaaaaaaaaaaaaaaaa'
                },
                {
                    id: 'i3',
                    number: '03',
                    img: require('../../assets/img/circles-box.svg'),
                    title: 'people',
                    desc: 'aaaaaaaaaaaaaaaaaaaaaaaa'
                }
            ],
            start: true
        }
    },
    methods: {
        setImg () {
            const box = document.getElementsByClassName('img')
            for (let i = 0; i < box.length; i++) {
                console.log(this.listImg[0])
                box[i].style.backgroundImage = `url(${this.listImg[i].img})`
            }
        },
        showBox () {
            console.log(1)
            for (let i = 0; i < this.listImg.length; i++) {
                console.log(`#${this.listImg[i].id}`)
                gsap.timeline()
                    .fromTo(`#${this.listImg[i].id}`, { opacity: 0, duration: 0.4, x: -10, y: 20 }, { opacity: 1, duration: 0.5, delay: 0 + i * 0.25, ease: 'power3.in', x: 0, y: 0 })
            }
        }
    },
    computed: {

    },
    mounted () {
        this.setImg()
        EventBus.$on('scrollShowPattents', offsetY => {
            console.log(`Nhận được ${offsetY} click từ component A`)
            if (offsetY > 1800) {
                if (this.start) {
                    this.showBox()
                    this.start = false
                }
            }
        })
    },
    updated () {
        console.log(1)
    }
}
</script>

<style lang='scss' scoped>
    .pattents{
        width: 100%;
        height: auto;
        padding: 50px;
        .box{
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            flex-wrap: wrap;
            padding-bottom: 15%;
            .box-1{
                width: 350px;
                height: 500px;
                background: black;
                border: 1px solid  #414141;
                transition: all .6s ease;
                opacity: 0;
                cursor: pointer;
                margin: 10px;
            }
            .box-1:hover{
                color: #fff;
                border: 1px solid #fff;
                box-shadow: 0 0 6px #fff;
                transition: all .6s ease;
                .box-img .img{
                    transform: scale(1.4);
                    transition: all .6s ease;
                    opacity: 1;
                }
            }
            .box-detail{
                height: 70%;
                padding: 30px;
                .number{
                    font-size: 1.5rem;
                    padding: 10 0px;
                }
                .title{
                    font-size: 4rem;
                    margin: 50px 0 20px 0;
                }
            }
            .box-img{
                // background-image: url('~@/assets/img/angle-box.svg');

                width: 100%;
                height: 30%;
                overflow: hidden;
                .img{
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-origin: center;
                    background-position: 50%;
                    opacity: .3;
                    transition: all .6s ease;
                }
            }

        }
    }
</style>
