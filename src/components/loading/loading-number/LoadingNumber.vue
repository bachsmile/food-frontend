<template>
    <div :class="numberLoad <100? 'panel-loader':  (numberLoad >140? 'loader-hides':'loader-hide' )">
        <div class= 'loader'>
            <span v-for="(item, i) in 20" :key="i"></span>
            <div class="loader-number" v-if="numberLoad<100">{{numberLoad}}%</div>
            <div class="loader-number" v-if="numberLoad===100">100%</div>
            <div class="rocket" ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingNumber',
    data () {
        return {
            interval: '',
            numberLoad: 0
        }
    },
    mounted () {
        let count = 0
        this.interval = setInterval(() => {
            count = count + 1
            this.numberLoad = count
            if (count === 145) {
                clearInterval(this.interval)
                console.log('ok')
            }
        }, 60)
    },
    destroyed () {
        clearInterval(this.interval)
    }
}
</script>

<style lang='scss'>

$lenght: 20;
.panel-loader{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:  url(~@/assets/img/bg.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.loader-hide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-image:  url(~@/assets/img/bg.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 2s ease-in-out;
    z-index: 9999;
}
.loader-hides{
    display: none;
    transition: 2s ease-in-out;
}
.loader{
    position: relative;
    width: 120px;
    height: 120px;
}
@for $i from 1 through $lenght {
    .loader span:nth-child(#{$i}){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
        transform: rotate(calc(18deg * #{$i}));
    }
    .loader span:nth-child(#{$i})::before{
        content: "\f004";
        font-family: "Font Awesome 5 Free";
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        animation: run 2s linear  infinite;
        animation-delay: calc(0.1s *  #{$i});
    }
}
.rocket{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: rotating 2s linear infinite;
    animation-delay: -1.5s;
}
.rocket::before{
    content: "\f3dc";
    font-family: "Font Awesome 5 Brands";
    position: absolute;
    top: 0;
    left: 80px;
    color: burlywood;
    font-size: 40px;
    transform: rotate(180deg);

}
.loader-number{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    font-size: 3rem;

}

@keyframes run {
    0%{
        transform: scale(0);
    };
    10%{
        transform: scale(1.2);
        font-size: 10px
    };
    80%,100%{
        transform: scale(0);
    }

}
@keyframes rotating{
    0%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(370deg);
    }
}
</style>
