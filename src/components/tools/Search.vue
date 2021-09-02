<template>
  <div>
     <input class="search" type="text" v-model="dataInput" @keyup="onSearch">
  </div>
</template>

<script>
import searchFn from '../../stores/reuses/users/searchFn'
export default {
    name: 'Search',
    props: {
        listData: Array
    },
    data () {
        return {
            dataInput: ''
        }
    },
    methods: {
        onSearch () {
            this.$emit('outRSListData')
            console.log(this.listData)
            const { it } = searchFn(this.$store.state.productList.product, 'productName', this.dataInput)
            this.$emit('outListData', it)
            console.log(it)
        },
        onOut () {
            console.log(1)
        }
    },
    computed: {
    },
    mounted () {
    }
}
</script>

<style lang='scss' scoped>
.search{
    width: 200px;
    height: 30px;
    border-radius: 20px;
    padding: 0 10px;
    font-size: 1.2rem;
}
.search:focus{
    outline: none;
}
</style>
