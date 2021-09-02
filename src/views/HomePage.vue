<template>
    <div class="home page">
        <HeaderComponent :positionProp="positionProp"/>
        <SlideSupper/>
        <div class="content-card">
            <CardPerson/>
        </div>
        <div class="content-adv">
            <AdvertisingBanners :bannerProp="banner"/>
        </div>
        <div class="content-pattern">
            <Pattents />
            <div class="talk">
                <span class="talk-title">Ready to get started?</span>
                <router-link to="/shop-page"  class="talk-desc">Let's Go</router-link>
            </div>
        </div>
        <footer-component/>
    </div>
</template>
<script>
import FooterComponent from '../components/FooterComponent/FooterComponent.vue'
import HeaderComponent from '../components/header/HeaderComponent.vue'
import AdvertisingBanners from '../components/tools/AdvertisingBanners.vue'
import CardPerson from '../components/tools/CardPerson.vue'
import Pattents from '../components/tools/Pattents.vue'
import SlideSupper from '../components/tools/Slide/SlideSupper.vue'
export default {
    name: 'Home',
    data () {
        return {
            imgBG: [require('../assets/img/bg1.jpg'), require('../assets/img/bg2.jpg'), require('../assets/img/bg3.jpg')],
            pointActice: 0,
            positionProp: false,
            banner: {
                left: {
                    img: require('../assets/img/tea.png'),
                    subtitle: 'Milk tea',
                    title: 'Bubble tea'
                },
                right: {
                    img: require('../assets/img/foodcus.jpg'),
                    subtitle: 'pick food',
                    title: 'Menu'
                }
            }
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
        }
    },
    components: {
        HeaderComponent,
        FooterComponent,
        CardPerson,
        AdvertisingBanners,
        Pattents,
        SlideSupper
    },
    mounted () {
        this.$store.commit('setToken')
        console.log(this.$store.state.token)
    }
}
</script>
<style lang = 'scss' >
#slider{
    position: relative;
    width: 100%;
    height: 100vh;
    .item{
        width: 100%;
        height: 100vh;
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
.content-pattern{
    position: relative;
    .talk{
        position: absolute;
        bottom: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 3rem;
        transition: all 0.5s ease;
        .talk-title{
            cursor: pointer;
        }
        .talk-desc{
            margin-left: 30px;
            position: relative;
            border-bottom: 2px solid #414141;
            cursor: pointer;
            color: white;
        }
        .talk-desc::before{
            content: '';
            width: 30%;
            border: 2px #e82064 solid ;
            position: absolute;
            display: flex;
            justify-content: center;
            bottom: -8%;
            left: 50%;
            transform-origin: center center;
            transform: translateX(-50%);
            box-shadow: 0 0 6px #e82064;
            background-color: #e82064;
            border-radius: 20px;
            cursor: pointer;
        }
         .talk-desc:hover::before {
            width: 100%;
            transition: .3s ease;
        }
    }
}
@keyframes showBG {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes hiddenBG {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
@media screen and (max-width: 720px) {
    .talk{
        position: absolute;
        bottom: 65px !important;
        transition: all 0.5s ease;
    }
}

</style>
