<template>
    <div class="btnTop" v-if="showBtnTop" @click="scrollToTop">
        <i class="fas fa-chevron-up"></i>
    </div>
</template>

<script>
export default {
    name: 'ScrollTop',
    data () {
        return {
            showBtnTop: false
        }
    },
    mounted () {
        window.addEventListener('scroll', () => this.checkShowBtnTop())
    },
    methods: {
        checkShowBtnTop () {
            this.$store.commit('setScroll')
            if (this.$store.state.scrollY > 100) {
                this.showBtnTop = true
            } else {
                this.showBtnTop = false
            }
        },
        scrollToTop () {
            window.scrollTo(0, 0)
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.btnTop{
    cursor: pointer;
    color: #0496f7;
    font-size: 50px;
    position: fixed;
    right: 13px;
    bottom: 15%;
    z-index: 10;
}
</style>
