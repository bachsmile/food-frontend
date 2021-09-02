<template>
    <div class="cardFz" @mouseover="checkShowBtn()" @mouseleave="checkHideBtn()">
        <div class="cardFz__img">
            <img :src="product.productImg" alt="">
            <div v-if="product.productSale>0" class="tag">
                <img src="~@/assets/img/sale.png">
                <span class="tag__title">SALE</span>
                <span class="tag__tagShow">- {{product.productSale}}%</span>
            </div>
        </div>
        <div class="cardFz__body">
            <div class="cardFz__body__title">{{product.productName}}</div>
            <div class="cardFz__body__detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate cumque ipsam ratione voluptatem quasi veniam laborum autem fugiat neque magni consectetur voluptate omnis, iusto animi ab in, aut, fuga deleniti.</div>
            <div class="cardFz__body__footer">
                <div class="cardFz__body__footer__title">{{product.productPrice - product.productPrice*product.productSale/100 | vnd}}</div>
                <div class="cardFz__body__footer__subtitle">{{product.productPrice | vnd}}</div>
            </div>
            <div :class="showBtn ? 'cardFz__btn' : 'cardFz__btnHide'">
                <span><i class="fas fa-shopping-bag"></i></span>
                <a> Add to card</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        dataProduct: Object
    },
    data () {
        return {
            showBtn: false,
            product: this.dataProduct ? this.dataProduct : {
                productId: 1,
                productTitle: 'Fried chicken ',
                productImg: 'https://placeimg.com/200/200/any?1',
                productDate: new Date(),
                productName: 'Chicken Chow Meinssssssssssss',
                productSale: 10,
                productPrice: 2223333,
                productCate: 'chicken',
                productGroupCate: 'food',
                productColor: 'white',
                productSize: 'x',
                productSex: 'Men',
                productSold: 156,
                productDes: 'no data',
                productVote: 0
            }
        }
    },
    mounted () {
        // console.log(123)
    },
    methods: {
        checkShowBtn () {
            this.showBtn = true
        },
        checkHideBtn () {
            this.showBtn = false
        }
    },
    computed: {
    },
    watch: {
        dataProduct: {
            handler () {
                this.product = this.dataProduct
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.cardFz{
    color: #fff;
    padding: 10px;
    width: 270px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.6s ease;
    &__img{
        position: relative;
        img{
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    &__body{
        padding: 10px 10px;
        font-family: "Roboto Condensed",sans-serif !important;
        position: relative;
        &__title{
            padding: 10px 0;
            font-size: 2rem;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: all 0.6s ease;
        }
        // &__title:hover{
        //     overflow: visible;
        //     word-wrap: break-word;
        //     white-space: initial;
        // }
        &__detail{
            padding: 10px 0;
            font-size: 1rem;
            opacity: 0.8;
            transition: all 0.6s ease;
        }
        &__footer{
            padding: 10px 0;
            &__title{
                font-size: 2.5rem;
                font-weight: 700;
                color: chocolate;
                transition: all 0.6s ease;
            }
            &__subtitle{
                font-size: 1rem;
                color: red;
                font-weight: 700;
                text-decoration: line-through;
            }
        }
    }
    &__btn{
        background-color: #64A74C;
        padding: 10px 30px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        // transition: .2s ease-in-out;
    }
    &__btnHide{
        background-color: #64A74C;
        padding: 10px 30px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        visibility: hidden;
    }
}
.cardFz:hover {
    outline: auto;
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
@media screen and (max-width: 724px) {
    .cardFz{
        width: 100%;
        padding: 50px;
        transition: all 0.6s ease;
        &__body{
            &__title{
                font-size: 5rem;
                transition: all 0.6s ease;
            }
            &__detail{
                padding: 10px 0;
                font-size: 2rem;
                transition: all 0.6s ease;
            }
            &__footer{
                &__title{
                    font-size: 3.5rem;
                    transition: all 0.6s ease;
                }
            }
        }
    }
}
</style>
