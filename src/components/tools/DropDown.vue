<template>
    <div>
        <div class="dropdowns">
            <div class="dropdowns__btn">
                <router-link :to="dropdown.txtBtn.link" >{{dropdown.txtBtn.drop}}</router-link>
            </div>
            <div class="dropdowns__content" v-if="dropdown.txtItem != null" >
                <div class="dropdowns__item"  v-for="(item,i) in dropdown.txtItem" :key="i"  @click="$emit(item.event ? item.event : '')">
                    <router-link v-if="item.link" class="textWhite fullWith dropdowns__item__link"  :to="item.link"><span>{{item.item}}</span></router-link>
                    <a v-else class="textWhite fullWith dropdowns__item__link">
                        {{item.item}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDown',
    props: {
        dataDrop: Object
    },
    data () {
        return {
            dropdown: this.dataDrop || {
                txtBtn: { drop: 'Dropdown1', link: '/' },
                txtItem: [
                    { item: 'item1', link: '/' }
                ]
            }
        }
    },
    methods: {
        ks (e) {
            // this.$emit('hand')
            console.log(e)
        }
    }
}
</script>

<style lang= 'scss'>
.dropdowns{
    position: relative;
    display: inline-block;
    &__btn{
        padding: 15px 10px !important;
        width: 0 auto;
        color: white !important;
        font-size: 1rem;
        cursor: pointer;
        a{
            color: white;
        }
    }
    &__btn:active{
        opacity: 0.7;
    }
    &__content{
        position: absolute;
        display: none;
        background: #1A212E;
        color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        min-width: 160px;
    }
    &__item{
        width: 100%;
        display: inline-block;
        color: white;
        cursor: pointer;
        &__link{
            display: block;
            width: 100%;
            padding: 5px 10px;
        }
    }
    &__item:hover{
        background: #212440;
        color: white;
        opacity: 0.7;
    }
    &:hover  &__content{
        display: block;
    }
    &:hover  &__btn{
        text-shadow: 0px 0px 10px #fff;
    }
}
</style>

/*
prop
    dataDrop: {
        txtBtn: { drop: 'name drop' | string, link: '/link '| link router },
        txtItem: null || [
            { item: 'name link item' | string, link: '/link' | link router }
        ]
    }
*/
