<template>
    <div class="ProductAdmin">
        <div class="headerProduct"></div>
        <div class="bodyProduct">
            <div class="listProduct" v-for="(item,i) in listProduct.product" :key="i">
                <div class="row border">
                    <div class="col-xs-2 listProduct__img border">
                        <img :src="item.productImg" alt="">
                    </div>
                    <div class="col-xs-2">
                        {{item.productName}}
                    </div>
                </div>
            </div>
            <div class="formAdd">
                <button @click="postProduct()">Add product</button>
            </div>
            <div>
                <a type="button" v-for="(item, i) in this.listProduct.pages" :key="i" @click="check(i+1)"> {{i+1}} </a>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsAPi from './../../../service/productApi'
export default {
    name: 'ProductAdmin',
    data () {
        return {
            listProduct: ''
        }
    },
    async mounted () {
        await ProductsAPi.getListProduct({ page: 1, limit: 6 })
            .then((res) => {
                console.log(res)
                this.listProduct = res.data
                console.log(this.listProduct)
                this.$store.commit('setProductList', this.listProduct.product)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        async postProduct () {
            const product = {
                productId: 1,
                productTitle: 'shoes adidas',
                productImg: 'https://placeimg.com/200/200/any?1',
                productDate: new Date(),
                productName: 'adidas opink',
                productSale: 30,
                productPrice: 2223333,
                productCate: 'adidas',
                productGroupCate: 'shose',
                productColor: 'white',
                productSize: '43',
                productSex: 'men',
                productSold: 156,
                productDes: 'String',
                productVote: 2
            }
            const res = await ProductsAPi.postProduct(product)
            console.log(res)
            this.updateListProduct()
        },
        async updateListProduct () {
            await ProductsAPi.getAll()
                .then((res) => {
                    this.listProduct = res.data
                    console.log(this.listProduct)
                    this.$store.commit('setProductList', this.listProduct)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async check (i) {
            await ProductsAPi.getListProduct({ page: i, limit: 6 })
                .then((res) => {
                    this.listProduct = res.data
                    this.$store.commit('setProductList', this.listProduct)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.listProduct{
    &__img{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
