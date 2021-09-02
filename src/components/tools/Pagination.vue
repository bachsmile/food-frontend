<template>
    <div class="pagination">
        <ul id="pagination">
            <li class="btn prev" v-if="page > 1" @click="element(totalPage, page - 1)"><span><i class="fas fa-angle-left"></i>Prev</span></li>
            <li class="numb" v-if="page > 2" value="1" @click="element(totalPage, 1)"><span>1</span></li>
            <li class="dots" v-if="page > 3"><span>...</span></li>
            <li class="numb" v-for="(item, i) in pageLoad" :key="i"
                :value="pageLength + i" :class="i === point ? 'active' : ''"
                @click="element(totalPage, pageLength +i)"
            ><span>{{pageLength + i}}</span></li>
            <li class="dots" v-if="page < totalPage - 2"><span>...</span></li>
            <li class="numb" v-if="page < totalPage - 1" :value="totalPage" @click="element(totalPage, totalPage)"><span>{{totalPage}}</span></li>
            <li class="btn next"  v-if="page < totalPage" @click="element(totalPage, page + 1)"><span>Next<i class="fas fa-angle-right"></i></span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    data () {
        return {
            page: 5,
            totalPage: 20,
            pageLoad: 3,
            pageLength: 0,
            point: 1,
            beforPage: 0,
            afterPage: 0
        }
    },
    methods: {
        element (totalPage, page) {
            this.page = page
            this.pageLength = this.page - 1
            if (page + 1 > totalPage) {
                this.pageLoad = 4
                this.point = 3
                this.pageLength = this.pageLength - 2
            } else if (this.pageLength === 0) {
                this.pageLength = this.pageLength + 1
                this.point = 0
                this.pageLoad = 4
            } else {
                this.point = 1
                this.pageLength = this.page - 1
                this.pageLoad = 3
            }
            console.log(page)
        }
    },
    mounted () {
        this.element(20, 5)
        this.pageLength = this.page - 1
        this.point = 1
        this.beforPage = this.page - 1
        this.afterPage = this.page + 1
        console.log(this.beforPage)
    }
}
</script>

<style lang='scss'>
.pagination{
    width: 100%;
    display: flex;
    justify-content: center;
    // background: #20b2aa;
    ul{
        background: #fff;
        display: flex;
        border-radius: 50px;
        padding: 5px;
    }
    li{
        color: #20b2aa;
        list-style: none;
        line-height: 45px;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        transition: all .3s ease;
    }
    li.numb{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        margin: 0 3px ;
    }
    li.dots{
        cursor: default;
        font-size: 22px;
    }
    li.btn{
        // background: #20b2aa;
        padding: 0 20px;
    }
    li.prev{
        border-radius: 25px 5px 5px 25px;
    }
    li.next{
        border-radius: 5px 25px 25px 5px;
    }
    li.active, li.numb:hover, li.btn:hover{
        background: #20b2aa;
        color: #fff;
    }
    #li{
        display: flex;
    }
}
</style>
