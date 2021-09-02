<template>
    <div class="panel-loader">
        <div class= 'loader'>
            <span v-for="(item, i) in 20" :key="i"></span>
            <div class="rocket" ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
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
        font-size: 10px;
        transform: rotate(calc(18deg * #{$i}));
    }
    .loader span:nth-child(#{$i})::before{
        content: "\f004";
        font-family: "Font Awesome 5 Free";
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        transform: rotate(45deg);
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
    font-family: "Font Awesome 5 Free";
}
.rocket::before{
    content: "\f3dc";
    font-family: "Font Awesome 5 Brands";
    position: absolute;
    top: 0;
    left: 100px;
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
        transform: scale(0) rotate(45deg);
    };
    10%{
        transform: scale(1.2) rotate(45deg);
        font-size: 10px;
    };
    80%,100%{
        transform: scale(0) rotate(45deg);
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
