<template>
    <div class="banner">
        <div class="banner__line">
            <div class="banner__line__left">
                <div class="banner__img"><img :src="banner.left.img" alt=""></div>
                <div class="banner__line__left__title banner__text">
                    <div class="banner__text__subTitle">{{banner.left.subtitle}}</div>
                    <div class="banner__text__title">{{banner.left.title}}</div>
                </div>
            </div>
            <div class="banner__line__right">
                <div class="banner__img"><img :src="banner.right.img" alt=""></div>
                <div class="banner__line__left__title banner__text">
                    <div class="banner__text__subTitle">{{banner.right.subtitle}}</div>
                    <div class="banner__text__title">{{banner.right.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdvertisingBanners',
    props: {
        bannerProp: Object
    },
    data () {
        return {
            banner: {
                left: this.bannerProp.left || {
                    img: require('../../../src/assets/img/tea.png'),
                    subtitle: 'subTitle',
                    title: 'subTitle'
                },
                right: this.bannerProp.right || {
                    img: require('../../../src/assets/img/foodcus.jpg'),
                    subtitle: 'subTitle',
                    title: 'subTitle'
                }
            }
        }
    }
}
</script>

<style lang='scss'>
.banner{
    padding: 10px 0px 50px 0px;
    width: 100%;
    height: auto;
    cursor: pointer;
    &__img{
        overflow: hidden;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s ease-out;
        }
    }
    &__text{
        color: #fff;
        position: absolute;
        top: 50%;
        right: 30%;
        transform: translate(+50%,-30%);
        text-shadow: 2px 2px 10px #fff;
        background-color: gainsboro;
        opacity: 0.8;
        z-index: 1;
        color: black;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px 10px #fff;
        transition: all .5s ease;
        &__title{
            font-size: 3.5rem;
            font-weight: 800;
        }
        &__subTitle{
            font-size: 2rem;
        }
    }
    &__line{
        width: 80%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        padding: 10px;
        overflow: hidden;
        flex-wrap: wrap;
        transition: all .5s ease;
        &__left{
            padding: 10px;
            width: 35%;
            height: 270px;
            min-height: 270px;
            position: relative;
            transition: all .5s ease;
        }
        &__right{
            padding: 10px;
            width: 65%;
            height: 270px;
            min-height: 270px;
            position: relative;
            transition: all .5s ease;
        }
        &__left:hover img, &__right:hover img{
            object-fit: cover;
            -ms-transform: scale(1); /* IE 9 */
            -webkit-transform: scale(1); /* Safari 3-8 */
            transform: scale(1.5);
            transition: 0.5s ease-out;
        }
    }
}
@media screen and (max-width: 1666px) {
    .banner__text{
        right: 50%;
        transition: all .5s ease;
        &__title{
            font-size: 2.5rem;
        }
    }
}
@media only screen and (max-width: 800px) {
    .banner__line__left{
        width: 100%;
        transition: all .5s ease;
    }
    .banner__line__right{
        width: 100%;
        transition: all .5s ease;
    }
}
</style>
/* props
banner: {
    left: {
        img: require('../assets/img/img.png'),
        subtitle: string,
        title: string
    },
    right: {
        img: require('../assets/img/img.jpg'),
        subtitle: string,
        title: 'string
    }
}
*/
