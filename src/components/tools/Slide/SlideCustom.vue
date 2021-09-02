<template>
    <div>
        <carousel class="slide-panel" :responsive="dataE">
           <Card  v-for="(item, i) in dataProduct" :key="i" :dataProduct="item"/>
        </carousel>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Card from '../Card.vue'
export default {
    name: 'SlideCustom',
    components: {
        carousel,
        Card
    },
    data () {
        return {
            dataS: {
                smartSpeed: 2000,
                nav: true,
                loop: true,
                autoplay: true,
                dots: false,
                margin: 20,
                navText: ['&#10094;', '&#10095'],
                autoplayHoverPause: true
            },
            response: {
                0: { items: 1 }, 320: { items: 2 }, 480: { items: 3 }, 768: { items: 4 }, 1024: { items: 4 }
            },
            dataProduct: [
                {
                    productId: 1,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 0,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 2,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'Chicken Chow Mein',
                    productSale: 0,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 3,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 4,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 80,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 5,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 50,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 6,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 7,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 8,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 9,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 10,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 11,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 12,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                },
                {
                    productId: 13,
                    productTitle: 'String',
                    productImg: 'https://placeimg.com/200/200/any?1',
                    productDate: 'Date',
                    productName: 'String',
                    productSale: 10,
                    productPrice: 2223333,
                    productCate: 'String',
                    productGroupCate: 'String',
                    productColor: 'String',
                    productSize: '50',
                    productSex: 'String',
                    productSold: 156,
                    productDes: 'String',
                    productVote: 2
                }
            ]
        }
    },
    methods: {
    },
    computed: {
        dataE () {
            var responses = {
                ...this.response,
                0: { ...this.response[0], ...this.dataS },
                320: { ...this.response[320], ...this.dataS },
                480: { ...this.response[480], ...this.dataS },
                768: { ...this.response[768], ...this.dataS },
                1024: { ...this.response[1024], ...this.dataS }
            }
            return responses
        }
    }
}
</script>

<style lang="scss">
.owl-nav{
    color: #fff;
    z-index: 5;
}
.owl-prev{
    position:absolute ;
    font-size: 30px !important;
    top: 50%;
    left: 0;
    opacity: 0.6;
    transform: translate(10%,-100%);
}
.owl-next{
    position:absolute ;
    font-size: 30px !important;
    top: 50%;
    right: 0;
    opacity: 0.6;
    transform: translate(-10%,-100%);
}
.tag{
    width: 150px;
    height: 50px;
    position: absolute;
    top: 140px;
    right: -2%;
    &__tagShow{
        position: absolute;
        top: 50px;
        right: 54px;
        font-size: 2rem;
        transform: rotate(-12deg);
        font-weight: 500;
        color: #fff;
        text-shadow: 2px 1px 0px orange;
    }
    &__title{
        position: absolute;
        top: 22px;
        right: 70px;
        font-size: 2rem;
        transform: rotate(-15deg);
        font-weight: 500;
        color: #fff;
        text-shadow: 2px 1px 0px orange;
    }
    &__title::before{
        content: ' ';
        box-shadow: 24px 0 35px 29px #fff;
    }
}
.dataCard{
    font-family: "Roboto Condensed",sans-serif !important;
    font-weight: 700 !important;
    &__name{
        color: #fff;
        font-size: 2rem;
        padding: 10px 0;
    }
    &__price{
        display: flex;
        justify-content: space-between;
        color: #fff;
        align-items: center;
        &__origin{
            text-decoration: line-through;
        }
        &__sale{
            color: chocolate;
            font-size: 2.5rem;
        }
    }
}
.slide-panel{
    padding: 10px 20px;
}
.slide-item{
    padding: 10px 20px;
}
.slide-item:hover{
    // border: 1px solid #fff;
}
</style>
