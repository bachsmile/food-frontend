<template>
    <div>
        <div class="header">
            <HeaderContact :positionProp="positionProp"/>
            <div class="header__inner">
                <div class="header__inner__containerLogo">
                    <div class="header__inner__containerLogo__contactLeft">
                        <ul>
                            <li><a href="https://www.facebook.com/TRAN.XUAN.BACH.IT/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    <router-link to="/shop-page" class="header__inner__containerLogo__logo">
                        <img src="https://parkofideas.com/foodz/demo/wp-content/uploads-new/2019/04/demo3-2428546643.svg" alt="" />
                    </router-link>
                    <div class="header__inner__containerLogo__contactRight ">
                        <ul>
                            <li><router-link to="/product" ><i class="fas fa-search"></i></router-link></li>
                            <li><i class="fas fa-heart"></i></li>
                            <li><router-link :to="{name: 'CartPage'}" ><i class="fas fa-shopping-bag"></i></router-link></li>
                        </ul>
                    </div>
                </div>
                <ul class="header__inner__navBar">
                    <li v-for="(item,index) in dataIcon" :key="index">
                        <router-link :to='item.link'>
                            <span class="header__containerIcon">
                                <span class="header__containerIcon__img">
                                    <i class="fas" :class="item.fontawesome"></i>
                                </span>
                                <span class="header__containerIcon__title">{{item.titleIcon}}</span>
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mobieHeader">
            <div class="icon-show">
                <i class="fas fa-bars" @click="openNav"></i>
            </div>
            <router-link to="/shop-page" class="mobieHeader__logo">
                <img src="https://parkofideas.com/foodz/demo/wp-content/uploads-new/2019/04/demo3-2428546643.svg" alt="" />
            </router-link>
            <div class="icon-seatch">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="mega-menu-mobie-after" @click="closeNav"></div>
        <div class="mega-menu-mobie" id="menu-mobie">
            <ul class="mega-menu-mobie__list">
                <li class="mega-menu-mobie__item"><i class="fas fa-times close-btn" @click="closeNav"></i></li>
                <li class="mega-menu-mobie__item" v-for="(item,index) in dataIcon" :key="index">
                    <router-link :to='item.link'>
                        <span class="mega-menu-mobie__item__containerIcon">
                            <span class="containerIcon__img">
                                <i class="fws fas" :class="item.fontawesome"></i>
                            </span>
                            <span class="containerIcon__title">{{item.titleIcon}}</span>
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import jwt from 'jwt-decode'
import HeaderContact from './header-contact/HeaderContact.vue'
export default {
    components: { HeaderContact },
    name: 'HeaderComponent',
    props: {
        positionProp: Boolean
    },
    data () {
        return {
            dataIcon: [
                {
                    fontawesome: 'fa-pizza-slice',
                    titleIcon: 'Pizza',
                    link: '/product/pizza'
                },
                {
                    fontawesome: 'fa-hamburger',
                    titleIcon: 'Burger',
                    link: '/product/hamburger'
                },
                {
                    fontawesome: 'fa-coffee',
                    titleIcon: 'Coffee',
                    link: '/product/coffee'
                },
                {
                    fontawesome: 'fa-wine-bottle',
                    titleIcon: 'Drink',
                    link: '/product/drink'
                },
                {
                    fontawesome: 'fa-utensils',
                    titleIcon: 'Food',
                    link: '/product/food'
                },
                {
                    fontawesome: 'fa-briefcase',
                    titleIcon: 'Office food',
                    link: '/product/office'
                },
                {
                    fontawesome: 'fa-seedling',
                    titleIcon: 'Green food',
                    link: '/product/green'
                }
            ],
            TokenData: ''
        }
    },
    methods: {
        openNav () {
            document.getElementById('menu-mobie').classList.add('mega-menu-mobie-active')
            document.getElementsByClassName('mega-menu-mobie-after')[0].style.display = 'block'
        },
        closeNav () {
            document.getElementById('menu-mobie').classList.remove('mega-menu-mobie-active')
            document.getElementsByClassName('mega-menu-mobie-after')[0].style.display = 'none'
        }
    },
    mounted () {
        try {
            const token = window.localStorage.getItem('token')
            this.TokenData = token !== null ? jwt(window.localStorage.getItem('token')) : null
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style lang = 'scss'>
$currentColor: white;
.header {
    width: 100%;
    height: auto;
    display: block;
    background-image: url(~@/assets/img/bg.jpg);
    position: relative;
    transition: all .6s ease;
    &__inner {
        width: 80%;
        height: 100%;
        display: block;
        margin: 0 auto;
        &__containerLogo {
            padding: 30px 10px;
            display: flex;
            justify-content: space-between;
            /* span {
                color: white;
                height: 100%;
                display: table-cell;
                vertical-align: middle;
                img {
                    height: 90px;
                }
            } */
            &__logo {
                width: 33.3333%;
                text-align: center;
                cursor: pointer;
            }
            &__contactLeft {
                width: 33.3333%;
                color: white;
                ul {
                    display: flex;
                    list-style: none;
                    height: 100%;
                    li {
                        align-self: center;
                        padding: 0 20px;
                        font-size: 25px;
                        cursor: pointer;
                    }
                    li:hover{
                        text-shadow: 2px 2px 10px #fff;
                    }
                }
            }
            &__contactRight {
                width: 33.3333%;
                color: white;
                ul {
                    display: flex;
                    list-style: none;
                    height: 100%;
                    float: right;
                    li {
                        align-self: center;
                        padding: 0 20px;
                        font-size: 25px;
                        cursor: pointer;
                    }
                    li:hover{
                        text-shadow: 2px 2px 10px #fff;
                    }
                }
                .fas{
                    color: #fff !important;
                }
            }
        }
        &__navBar {
            // height: 100%;
            display: flex;
            justify-content: center;
            li {
                height: 100%;
                display: table;
                float: left;
                padding: 0 20px;
                transition: all .6s ease;
                a {
                    display: table-cell;
                    vertical-align: middle;
                }
            }
        }
    }
    &__containerIcon {
        width: 100%;
        // text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        padding: 10px 10px 35px 10px;
        &__img {
            width: 100%;
            padding: 30px 10px;
            .fas {
                font-size: 40px;
                transition: all .6s ease;
                color: white;
                cursor: pointer;
            }
        }
        &__title {
            width: 100%;
            color: white;
            text-decoration: none;
            cursor: pointer;
        }
    }
    &__containerIcon:hover{
        text-shadow: 2px 2px 10px #fff;
    }
}
.mobieHeader{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #1a212e;
    display: none;
    justify-content: space-between;
    padding: 0 20px;
    position: relative;
    transition: all .6s ease;
    &__logo{
        img{
            width: 40px;
            height: 40px;
        }
    }
    .icon-show, .icon-seatch{
        font-size: 30px;
        color: #fff;
    }
}
.mega-menu-mobie{
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    color: #ffffff !important;
    overflow-x: hidden;
    padding-top: 60px;
    background-color: #1f2430;
    transform: translateX(-100%);
    transition: all .5s ease;
    z-index: 10;
    &__list{
        }
    &__item{
        font-size: 30px;
        padding: 10px 50px;
        .close-btn{
            position: absolute;
            top: 10px;
            right: 25px;
            font-size: 36px;
        }
        &__containerIcon{
            display: flex;
            /* justify-content: space-between; */
            align-items: center;
            .containerIcon__img{
                width: 40px;
                height: 40px;
                .fws{
                    font-size: 40px;
                }
            }
            .containerIcon__title{
                margin-right: 100px;
                font-size: 20px;
                padding-left: 40px;
            }
        }
    }
}
.mega-menu-mobie-active{
    max-width: 415px;
    width: 100%;
    transform: translateX(0);
    transition: all .5s ease;
    z-index: 8;
}
.mega-menu-mobie-after{
    position: absolute;
    display: none;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5;
    background: rgba(26,33,46,0.7);
}
@media screen and (max-width: 900px) {
    .header__inner__navBar li {
        padding: 0;
        transition: all .6s ease;
    }
}
@media screen and (max-width: 720px) {
    .header{
        display: none;
        transition: all .6s ease;
    }
    .mobieHeader{
        display: flex;
        transition: all .6s ease;
    }
}
</style>
