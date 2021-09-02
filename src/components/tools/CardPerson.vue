<template>
    <div class='content-tool'>
        <div class="panel-title"><span>We serve because of passion</span></div>
        <div class="panel-person">
            <div class="panel-person__panel" ref="points">
                <span class='panel-person__item'><img src="~@/assets/img/admin.png" alt=""/></span>
                <span class='panel-person__item'><img src="https://parkofideas.com/foodz/demo/wp-content/uploads/revslider/promo1/demo-0147626965.png" alt=""/></span>
                <span class='panel-person__item'><img src="https://parkofideas.com/foodz/demo/wp-content/uploads/revslider/promo1/demo-0111010712.jpg" alt=""/></span>
                <span class='panel-person__item'><img src="~@/assets/img/la.png" alt=""/></span>
                <span class='panel-person__item'><img src="~@/assets/img/ly.png" alt=""/></span>
            </div>
            <div class="panel-person__details">
                Giving the pizza its unique flavor and texture is our speciality. Good sauce, right amount of cheese and great crust sets Fratello Pizza apart from other pizza joints .We have a good array of delicious pasta, subs, salads in addition to the more traditional pizzas and speciality pizzas.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardPerson',
    data () {
        return {
            scrollJS: {
                top: 0,
                start: 0,
                step: 0,
                end: 0
            },
            tagItem: ''
        }
    },
    methods: {
        getOffset (el) {
            const rect = el.getBoundingClientRect()
            return {
                left: rect.left + window.scrollX,
                top: rect.top + window.scrollY
            }
        },
        handleScroll (tagItem) {
            this.scrollShowCardPerson(tagItem)
        },
        scrollShowCardPerson (tagItem) {
            const st = window.pageYOffset
            if (Math.abs(this.scrollJS.top - st) <= this.scrollJS.step) {
                return console.log(st)
            }
            if (st > this.scrollJS.top && st < this.scrollJS.end) {
                if (st > this.scrollJS.start) {
                    tagItem.map((val, index) => {
                        this.clearShow(val)
                        val.classList.add('toDown')
                    })
                } else {
                    // upscroll code;
                    tagItem.map((val, index) => {
                        this.clearShow(val)
                        val.classList.add('toUp')
                    })
                }
                this.scrollJS.start = st
            } else {
                tagItem.map((val, index) => {
                    this.clearShow(val)
                })
            }
        },
        clearShow (val) {
            val.classList.remove('toUp')
            val.classList.remove('toDown')
        }
    },
    mounted () {
        const item = this.$refs.points
        this.tagItem = Array.from(document.getElementsByClassName('panel-person__item'))
        this.scrollJS = {
            top: this.getOffset(item).top - 300,
            start: this.getOffset(item).top - 300,
            step: 30,
            end: this.getOffset(item).top + item.scrollHeight
        }
        window.addEventListener('scroll', () => this.handleScroll(this.tagItem))
    },
    destroyed () {
        window.removeEventListener('scroll', () => this.handleScroll(this.tagItem))
    }
}
</script>

<style lang = 'scss'>
.panel-title{
    color: white;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 500;
    font-family: "Oswald",sans-serif;
    line-height: 1.2;
    letter-spacing: 3px;
    display: flex;
    justify-content: center;
    padding: 50px 20px;
}
.panel-person{
    /* height: 2000px; */
    position: relative;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around ;
    align-items: center;
    flex-direction: row;
    padding: 0 20px 50px;
    &__panel{
        width: 45%;
        height: 700px;
        position: relative;
        span{
            &:nth-child(1){
                position: absolute;
                top: 10%;
                right: 5%;
                transform: translate3d(0px,0px,0px);
                object-fit: cover;
                transition:  8s ease-in-out;
                &.toDown{
                    transform: translate3d(0px,20px,0px);
                    transition:  8s 1s  ease-in-out;
                }
                &.toUp{
                    transform: translate3d(0px,-20px,0px);
                    transition:  8s 1s ease-in-out;
                }
            }
            &:nth-child(2){
                position: absolute;
                bottom: 13%;
                left: 10%;
                transform: translate3d(0px,0px,0px);
                object-fit: cover;
                transition:  8s ease-in-out;
                &.toDown{
                    transform: translate3d(0px,25px,0px);
                    transition:  8s 0.6s  ease-in-out;
                }
                &.toUp{
                    transform: translate3d(0px,-25px,0px);
                    transition:  8s 0.6s ease-in-out;
                }
            }
            &:nth-child(3){
                position: absolute;
                bottom: 10%;
                left: 0%;
                transform: translate3d(0px,0px,0px);
                object-fit: cover;
                transition:  8s ease-in-out;
                &.toDown{
                    transform: translate3d(0px,60px,0px);
                    transition:  8s  ease-in-out;
                }
                &.toUp{
                    transform: translate3d(0px,-30px,0px);
                    transition:  8s  ease-in-out;
                }
            }
            &:nth-child(4){
                position: absolute;
                top: 10%;
                left: 10%;
                transform: translate3d(0px,0px,0px);
                object-fit: cover;
                transition:  8s ease-in-out;
                &.toDown{
                    transform: translate3d(0px,60px,0px);
                    transition:  10s  ease-in-out;
                }
                &.toUp{
                    transform: translate3d(0px,-30px,0px);
                    transition:  10s  ease-in-out;
                }
            }
            &:nth-child(5){
                position: absolute;
                bottom: 10%;
                right: 10%;
                transform: translate3d(0px,0px,0px);
                object-fit: cover;
                transition:  8s ease-in-out;
                &.toDown{
                    transform: translate3d(0px,60px,0px);
                    transition:  8s  ease-in-out;
                }
                &.toUp{
                    transform: translate3d(0px,-30px,0px);
                    transition:  8s  ease-in-out;
                }
            }
        }
    }
    &__details{
        width: 50%;
        height: 100%;
        color: #fff;
        font-size: 2rem;
    }
}
@media only screen and (max-width: 1024px) {
    .panel-person__panel{
        width: 60%;
    }
    .panel-person__details{
        width: 80%;
    }
}

</style>
