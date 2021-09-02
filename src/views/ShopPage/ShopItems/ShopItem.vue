<template>
    <div class="shopPage darkMode">
        <HeaderComponent/>
        <SlideSupper/>
        <div class="page-container body-shop ">
            <div class="body-shop__header">
                <span>{{idRouterProduct ? idRouterProduct : 'SHOP'}}</span>
            </div>
            <div class="row">
                <div class="body-shop__left">
                    <div class="search">
                        <Search :listData="dataProducts" @outListData="setListData" @outRSListData="getListProduct"/>
                    </div>
                    <div class="filterTab">
                        <FilterTool/>
                    </div>
                </div>
                <div class="body-shop__right">
                    <div class="body-shop__right__header">aa</div>
                    <div class="body-shop__right__body">
                        <div v-for="(item, i) in dataProducts" :key="i">
                            <Card :dataProduct="item"/>
                        </div>
                    </div>
                    <div class="pagination">
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-container body-shop__slide">
            <SlideCustom :loopProp="true"/>
        </div>
        <AdvertisingBanners :bannerProp="banner"/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '../../../components/header/HeaderComponent.vue'
import FooterComponent from '../../../components/FooterComponent/FooterComponent.vue'
import AdvertisingBanners from '../../../components/tools/AdvertisingBanners.vue'
import Card from '../../../components/tools/Card.vue'
import FilterTool from '../../../components/tools/FilterTool.vue'
import SlideCustom from '../../../components/tools/Slide/SlideCustom.vue'
import SlideSupper from '../../../components/tools/Slide/SlideSupper'
import Search from '../../../components/tools/Search.vue'
import searchFn from '../../../stores/reuses/users/searchFn'
import Pagination from '../../../components/tools/Pagination.vue'
export default {
    components: { HeaderComponent, FooterComponent, AdvertisingBanners, SlideCustom, Card, FilterTool, SlideSupper, Search, Pagination },
    name: 'ShopItem',
    data () {
        return {
            banner: {
                left: {
                    img: 'https://i.pinimg.com/originals/24/dc/bd/24dcbd4482f7c8afe9eda5d2c03cee5b.jpg',
                    subtitle: 'Milk tea',
                    title: 'Bubble tea'
                },
                right: {
                    img: require('../../../assets/img/foodcus.jpg'),
                    subtitle: 'pick food',
                    title: 'Menu'
                }
            },
            dataProducts: [],
            idRouterProduct: ''
        }
    },
    async mounted () {
        this.getParamsRouter()
    },
    watch: {
        $route: 'getParamsRouter'
    },
    methods: {
        getParamsRouter () {
            this.$store.commit('setParamsRouter')
            this.getListProduct()
        },
        async getListProduct () {
            console.log(this.$store.state.paramRouter)
            this.idRouterProduct = this.$store.state.paramRouter
            this.dataProducts = ''
            const { it } = searchFn(this.$store.state.productList.product, 'productCate', this.$store.state.paramRouter)
            this.dataProducts = it
            console.log(this.dataProducts)
        },
        async setListData (e) {
            this.dataProducts = e
            console.log(this.dataProducts)
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
.body-shop{
    &__header{
        font-size: 7rem;
        font-weight: 700;
        color: #fff;
        display: flex;
        justify-content: center;
        padding: 50px;
        text-transform: uppercase;
    }
    &__left{
        width: 30%;
        transition: all .6s ease;
    }
    &__right{
        width: 70%;
        transition: all .6s ease;
        &__body{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }
}
@media screen and (max-width: 976px) {
.body-shop{
    &__left{
        width: 100%;
        transition: all .6s ease;
    }
    &__right{
        width: 100%;
        transition: all .6s ease;
    }
}
}
@media screen and (max-width: 724px) {
.body-shop{
    // &__left{
    //     width: 100%;
    //     transition: all .5s ease;
    // }
    // &__right{
    //     width: 100%;
    //     transition: all .5s ease;
    // }
}
}
</style>
