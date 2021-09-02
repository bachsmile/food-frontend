<template>
    <div class="pageAdmin page">
        <div class="headerAdmin">
            <HeaderContact :linkAdminProp="true"/>
        </div>
        <div class="bodyAdmin row">
            <div class="leffPage col-md-2 col-xl-2 ">Admin</div>
            <div class="rightPage col-10">
               <router-view/>
            </div>
        </div>
        <div class="footerAdmin"></div>
    </div>
</template>

<script>
import HeaderContact from '../../components/header/header-contact/HeaderContact.vue'
export default {
    components: { HeaderContact },
    name: 'AdminPage',
    data () {
        return {
            linkAdminProp: false
        }
    },
    mounted () {

    },
    methods: {

    },
    beforeRouteLeave (to, from, next) {
        console.log(123)
        next()
    }
}
</script>

<style lang="scss" scoped>
.pageAdmin{

}
.bodyAdmin{
    height: 100%;
}
.rightPage{
    height: 100%;
    padding: 50px;
    background-color: cadetblue;
}
</style>
