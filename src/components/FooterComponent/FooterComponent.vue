<template>
    <div class="footer">
        <div class="container">
            <div class="back-to-top">
                <a href="#hero" ><i class="fas fa-chevron-up"></i></a>
            </div>
            <div class="footer-content">
                <div class="footer-content-about animate-up">
                    <h4>About XB Food</h4>
                    <div class="asterisk"><i class="fas fa-asterisk"></i> </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos dolores sunt. Quod delectus reiciendis voluptatem ducimus veniam! Ea enim totam quas sequi nobis itaque dolor ipsa, et autem sed?</p>
                </div>
                <div class="footer-content-divider animate-bottom">
                    <div class="social-media">
                        <h4>Follow along</h4>
                        <ul class="social-icons">
                            <li>
                                <a ><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a ><i class="fab fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a ><i class="fab fa-pinterest"></i></a>
                            </li>
                            <li>
                                <a ><i class="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a ><i class="fab fa-tripadvisor"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="newsletter-container">
                        <h4>Newsletter</h4>
                        <form action="" class="newsletter-form">
                            <input type="text" class="newsletter-input" placeholder='Your email address...' />
                            <button class="newsletter-btn" type="submit">
                                <i class="fas fa-envelope"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang='scss'>

/*footer*/
.footer{
    padding: 7.9rem 0;
    background-color: #121212;
    color: #fff;
    text-align: center;
    position: relative;
}
.back-to-top{
    width: 7rem;
    height: 7rem;
    background-color: #121212;
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}

.back-to-top i{
    display: block;
    color: #fff;
    font-size: 2rem;
    padding: 2rem;
    animation: up 2s infinite;
}

.footer-content{
    overflow: hidden;
}
.footer-content h4{
    font-size: 1.9rem;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 3px;
    margin-bottom: 3rem;
}

.footer-content .asterisk{
    margin: 2.4rem 0;
}
.footer-content-about{
    margin-bottom: 5.4rem;
}
.footer-content-about p{
    line-height: 2;
}
.social-icons{
    list-style: none;
    margin-bottom: 5.4rem;
    display: flex;
    justify-content: center;
}
.social-icons i{
    font-size: 2rem;
    color: #fff;
    padding: .8rem 2rem;
    opacity: .5;
    transition:  color .5s;
}

.social-icons i:hover,
.social-icons i:focus{
    color:  var(--secondary-font-color);
}
.newsletter-form{
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}
.newsletter-input{
    width: 100%;
    max-width: 25rem;
    padding: 1rem;
    border-radius: .4rem;
}
.newsletter-btn{
    background-color: transparent;
    border: none;
    color: var(--main-font-color-dark);
    cursor: pointer;
    font-size: 1.6rem;
    padding:  1px .6rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 20rem;
}
/*media queries*/

@media screen and (min-width: 900px){

    .footer-content{
        max-width: 77.5rem;
        margin: auto;
    }
    .footer-content-about{
        max-width: 51.3rem;
        margin: 0 auto 5.4rem;
    }
    .footer-content-divider{
        display: flex;
        justify-content: space-between;
    }
    .social-media,
    .newsletter-container{
        width: 100%;
        max-width: 27.3rem;
        margin: 0 1rem;
    }
    .social-icons i{
        opacity: 1;
    }
    .newsletter-btn{
         margin-left: 20rem;
    }
}

/* Animation*/
@keyframes up{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateY(-1rem);
    }
}

</style>
