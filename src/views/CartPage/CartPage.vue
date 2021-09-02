<template>
    <div class="card page">
        <HeaderComponent/>
        <div class="cardBody">
            <div class="cardBody__title">Cart</div>
            <div class="cardBody__img">
                <img src="~@/assets/img/cart.png" alt="">
            </div>
            <div class="cardBody__empty">
               <span> Your cart is currently empty</span>
            </div>
           <div class="cardBody__btn">
                <router-link :to="{name: 'ShopPage'}" ><span>Return to shop</span></router-link>
                <!-- <a>Return to shop</a> -->
           </div>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import FooterComponent from '../../components/FooterComponent/FooterComponent.vue'
import HeaderComponent from '../../components/header/HeaderComponent.vue'
export default {
    components: { HeaderComponent, FooterComponent },
    name: 'CartPage',
    data () {
        return {

        }
    },
    methods: {

    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
.cardBody{
    width: 100%;
    padding: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    &__title{
        font-size: 6rem;
        color: #fff;
        font-weight: 700;
        display: flex;
        justify-content: center;
        padding-bottom: 50px;
        text-transform: uppercase;
    }
    &__img{
        display: flex;
        justify-content: center;
        flex-flow: row;
        img{
            width: 30%;
            height: 30%;
            object-fit: cover;
        }
    }
    &__empty{
        display: flex;
        justify-content: center;
        flex-flow: row;
        font-size: 4rem;
    }
    &__btn{
        color: black  !important;;
        font-size: 2rem;
        font-weight: 500;
        padding: 50px;
        text-align: center;
        display: flex;
        flex-flow: row;
        justify-content: center;
        a{
            width: 200px;
            background-color: #fff;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        a:hover{
            background-color: rgb(179,179,179);

        }
    }
}
</style>
