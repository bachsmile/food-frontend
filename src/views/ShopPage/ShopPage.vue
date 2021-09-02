<template>
    <div class="body">
        <HeaderComponent/>
        <section class="hero" id="hero">
            <div class="containerS">
                <h2 class="sub-headline">
                    <span class="first-letter">W</span>elecome
                </h2>
                <h1 class="headline">Food <span>Z</span></h1>
                <div class="headline-description">
                    <div class="separator">
                        <div class="line line-left"></div>
                        <div class="asterisk"><i class="fas fa-asterisk"></i> </div>
                        <div class="line line-right"></div>
                    </div>
                    <div class="single-animation">
                        <h5>Ready to be opended</h5>
                        <router-link to="/product" class="btn cta-btn">Explore</router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- end-hero -->
        <section class="discover-our-story">
            <div class="containerS">
                <div class="restaurant-info">
                    <div class="restaurant-description padding-right animate-left">
                        <div class="global-headline">
                            <h2 class="sub-headline">
                                <span class="first-letter">D</span>iscover
                            </h2>
                            <h1 class="headline headline-dark">Our Story</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i> </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime aliquam aut optio tempora cupiditate laboriosam, sit debitis iusto eaque error dolorum magnam earum quam necessitatibus! Quo vel quis libero?
                        </p>
                        <a class="btn body-btn">About us</a>
                    </div>
                </div>
                <div class="restaurant-info-img animate-right">
                    <img class='ImgBgHome imgBgHomeFix' :src="imgApis.shopPageImg1" alt="shopPageImg1" />
                </div>
            </div>
        </section>
        <section class="discover-our-menu">
            <div class="containerS">
                <div class="restaurant-info">
                    <div class="restaurant-description animate-right">
                        <div class="global-headline">
                            <h2 class="sub-headline">
                                <span class="first-letter">D</span>iscover
                            </h2>
                            <h1 class="headline headline-dark">Our Story</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam vel at libero, omnis sed veritatis ex obcaecati officia ipsum nostrum rem id. Ab nostrum ad fugit, eos recusandae quibusdam?</p>
                            <a class="btn body-btn">About us</a>
                        </div>
                    </div>
                    <div class="image-group padding-left animate-left">
                        <img class='ImgBgHome' :src="imgApis.shopPageImg2" alt="shopPageImg2" />
                        <img class='ImgBgHome' :src="imgApis.shopPageImg3" alt="shopPageImg3" />
                        <img class='ImgBgHome' :src="imgApis.shopPageImg4" alt="shopPageImg4" />
                        <img class='ImgBgHome' :src="imgApis.shopPageImg5" alt="shopPageImg5" />
                    </div>

                </div>
            </div>
        </section>
        <!-- end discover -->
        <section class="tasteful-recipes between">
            <div class="containerS">
                <div class="global-headline">
                    <div class="animate-top">
                        <h2 class="sub-headline">
                            <span class="first-letter">T</span>asteful
                        </h2>
                    </div>
                    <div class="animate-bottom">
                        <h1 class="headline ">Recipes</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- end tastefull -->
        <section class="discover-our-menu">
            <div class="containerS">
                <div class="restaurant-info">
                    <div class="image-group padding-right animate-left">
                        <img class='ImgBgHome' :src="imgApis.shopPageImg2" alt="shopPageImg2" />
                        <img class='ImgBgHome' :src="imgApis.shopPageImg3" alt="shopPageImg3" />
                        <img class='ImgBgHome' :src="imgApis.shopPageImg4" alt="shopPageImg4" />
                        <img class='ImgBgHome' :src="imgApis.shopPageImg5" alt="shopPageImg5" />
                    </div>
                    <div class="restaurant-description animate-right">
                        <div class="global-headline">
                            <h2 class="sub-headline">
                                <span class="first-letter">D</span>iscover
                            </h2>
                            <h1 class="headline headline-dark">Menu</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam vel at libero, omnis sed veritatis ex obcaecati officia ipsum nostrum rem id. Ab nostrum ad fugit, eos recusandae quibusdam?</p>
                            <a class="btn body-btn">View the full menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- discover-our meunu end -->
        <section class="perfect-blend between">
            <div class="containerS">
                <div class="global-headline">
                    <div class="animate-top">
                        <h2 class="sub-headline">
                            <span class="first-letter">T</span>he perfect
                        </h2>
                    </div>
                    <div class="animate-bottom">
                        <h1 class="headline ">Blend</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- perfect blend end -->

        <section class="culinary-delight">
            <div class="containerS">
                <div class="restaurant-info">
                    <div class="restaurant-description padding-right animate-left">
                        <div class="global-headline">
                            <h2 class="sub-headline">
                                <span class="first-letter">C</span>ulinary
                            </h2>
                            <h1 class="headline headline-dark">Delight</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i> </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime aliquam aut optio tempora cupiditate laboriosam, sit debitis iusto eaque error dolorum magnam earum quam necessitatibus! Quo vel quis libero?
                        </p>
                        <a class="btn body-btn">Make reservation</a>
                    </div>
                </div>
                <div class="image-group">
                    <img class="animate-top ImgBgHome" :src="imgApis.shopPageImg6" alt="shopPageImg6" />
                    <img class="animate-bottom ImgBgHome" :src="imgApis.shopPageImg7" alt="shopPageImg7" />
                </div>
            </div>
        </section>
        <!-- culinary end   -->
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '../../components/FooterComponent/FooterComponent.vue'
import HeaderComponent from '../../components/header/HeaderComponent.vue'
// import ProductsAPi from '../../service/productApi'
import imgApis from '../../assets/ImgConfig.js'
export default {
    components: { HeaderComponent, FooterComponent },
    name: 'ShopPage',
    data () {
        return {
            imgApis: imgApis
        }
    },
    async mounted () {
        // await ProductsAPi.getAll()
        //     .then((res) => {
        //         this.dataProduct = res.data
        //         this.$store.commit('setProductList', this.dataProduct)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

/*logo*/
.logo{
    width: 50px;
}
/*hero*/

.hero{
    width: 100%;
    height: 100vh;
    background: url('~@/assets/img/hero.jpg') center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    text-align: center;
}
.sub-headline{
    font-size:  5.5rem;
    font-family:  var(--secondary-font);
    color: var(--secondary-font-color);
    font-weight: 100;
    line-height: 1.5;
    letter-spacing: 2px;
    opacity: 0;
    animation: fadeUp .5s forwards;
    animation-delay: .5s;
}
.first-letter{
    text-transform: uppercase;
    font-size: 10.3rem;
}
.headline{
    color: #fff;
    font-size: 3.7rem;
    font-family:  var(--main-font);
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: .5rem;
    margin-right: -.5rem;
    // animation: scale .5s forwards;
    //animation
    overflow: hidden;
    background: linear-gradient(90deg, #0a1420, #fff, #0a1420);
    background-repeat: no-repeat;
    background-size: 80%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent ;
    /*-webkit-text-fill-color: rgba(.....) ;*/
    animation: shining 1.8s linear infinite;
}
@keyframes shining {
    0% {
        background-position: -300%;
    }
    100% {
        background-position: 300%;
    }
}
.separator{
    display: flex;
    align-items: center;
    justify-content: center;

}

.line{
    width: 100%;
    max-width: 8.4rem;
    height: 0.25rem;
    opacity: 0;
    background-color: #fff;
    position: relative;
    animation: grow 2s forwards;
    animation-delay: .9s;

}
.line-right::before,
.line-left::before{
    content: '';
    position: absolute;
    top: 50%;
    transform:  translateY(-50%);
    border:  .6rem solid transparent;
    opacity: 0;
    animation: grow .5s forwards;
    animation-delay: 1.2s;

}
.line-right::before{
    border-right-color: #fff;
    right: 0;
}
.line-left::before{
    border-left-color: #fff;
    left: 0;
}

.asterisk{
    font-size: 1.2rem;
    color: var(--secondary-font-color);
    margin: 0 1.6rem;
    animation: spin .5s forwards;
    animation-delay: .7s;
}
.single-animation{
    opacity: 0;
    animation: fadeDown .5s forwards;
    animation-delay: 1.5s;
}
.headline-description h5{
    color: #fff;
    font-size: 1.4rem;
    font-weight: 100;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    letter-spacing: 3px;
    margin-right: -3px;
}
.btn{
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: -2px;
}

.cta-btn{
    font-size: 1.1rem;
    background-color: #fff;
    padding: .9rem 1.8rem;
    color: var(--body-font-color) !important;
    border-radius: .4rem;
    transition: background-color .5s;
}
.cta-btn:hover,
.cta-btn:focus{
    color: #fff;
    background-color: var(--secondary-font-color);
}

/*Discover*/
.global-headline{
    text-align: center;
    margin-top: 3.9rem;
}
.discover-our-story .global-headline{
    margin-top: 6.9rem;
}
.global-headline .asterisk{
    color: var(--body-font-color);
    margin: 2.4rem 0;
}
.headline-dark{
    color:  var(--main-font-color-dark);
    letter-spacing: .7rem;
    margin-right: -.7rem;
}
.global-headline .sub-headline{
    letter-spacing: -1px;
    // line-height: .8;
}
.restaurant-info{
    text-align: center;
}
.restaurant-description{
    margin-bottom: 3rem;
}
.restaurant-description p{
    line-height: 1.6;
    margin-bottom: 2.4rem;
}
.body-btn{
    font-size: 1.5rem;
    color: var(--secondary-font-color) !important;
    position: relative;
    transition:  color .5s;
}

.body-btn::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color:  var(--secondary-font-color);
    transition: background-color .5s;

}

.body-btn:hover,
.body-btn:focus{
    color:  var(--main-font-color-dark);
}
.body-btn:hover::before,
.body-btn:focus::before{
    background-color:  var(--main-font-color-dark);
}
.imgBgHomeFix{
    height: 400px;
    object-fit: cover;
}
/*tastfull recipes*/
.tasteful-recipes{
    background: url('~@/assets/img/tasteful-recipes.jpg') center no-repeat;
    background-size: cover;
}
.between{
    min-height: 65vh;
    display: flex;
    align-items: center;
}
/* discover our menu*/
.image-group{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
}
.discover-our-menu .restaurant-description{
    padding-top: 3rem;
    margin-bottom: 0;
}

/* The perfect blem*/

.perfect-blend{
    background: url("~@/assets/img/perfect-blend.jpg") center no-repeat;
    background-size: cover;
}
/*media queries*/

@media screen and (min-width: 900px){
    section{
        padding: 7.9rem;
    }
    .sub-headline{
        font-size: 10rem;
    }
    .first-letter{
        font-size: 12.2rem;
    }
    .headline{
        font-size: 4.7rem;
        letter-spacing: .8rem;
    }
    .line{
        max-width: 11.4rem;
    }
    .restaurant-info{
        display: flex;
        align-items: center;
    }
    .restaurant-info >div{
        flex: 1;
    }
    .padding-right{
        padding-right: 7rem;
    }
    .padding-left{
        padding-left: 7rem;
    }
}

/* Animation*/
@keyframes fadeUp{
    0%{
        transform: translateY(4rem);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes scale{
    0%{
        transform: scale(2);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes grow{
    0%{
        width: 0;
    }
    100%{
        opacity: 1;
        width: 100%;
    }
}
@keyframes spin{
    0%{
        transform: rotate(0);
    }
    100%{
        opacity: 1;
        transform: rotate(-360deg);
    }
}
@keyframes fadeDown{
    0%{
        transform: translateY(-1rem);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
