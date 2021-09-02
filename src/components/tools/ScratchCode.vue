<template>
    <div class="container-scratch">
        <div class="container-scratch__frame">
            <div class="container-scratch__frame__gift">
                    KKJi2314KKnk329dasdLLKJ0
            </div>
            <span v-for="(item, i) in 400" :key="i" :ref="'item'+item" @mouseover="showFail($event, 'item'+item)"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScratchCode',
    methods: {
        showFail (e, item) {
            console.log(e.target.classList.add('container-scratch__frame__fall'))
        }
    }
}
</script>

<style lang='scss'>
.container-scratch{
    width: 100%;
    height: 600px;
    padding: 50px;
    z-index: 10;
    position: relative;
    &__frame{
        background-image: url('~@/assets/img/codeBG.jpg');
        background-size: cover;
        // background-position: center;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
        width: 100%;
        height:100% ;
        cursor: grab;
        box-shadow: 0 0 10px 10px white;
        z-index: 1;
        &__gift{
            width: auto;
            height: auto;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 20px;
            transform: translate(-50%, -50%);
            z-index: -1;
                font-size: 4rem;
        }
        &__gift::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0.5;
            border-radius: 10px;
            transition: .25s;
            z-index: -2;
        }
        span{
            width: 5%;
            height: 4.38%;
            background-color: gray;
            padding: 0;
            margin: 0;
            display: inline-flex;
            border: 1px solid black;
            box-sizing: border-box;
            box-shadow: 0 2px 5px 5px grey;
            z-index: 5;
        }
        &__fall{
            z-index: 3;
            background-color: red;
            transition: .5s;
            // pointer-events: none;
            animation: fall 1.5s ease-in forwards;
        }
    }
}

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(1500px) rotate(250deg);
        }
    }
</style>
