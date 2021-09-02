<template>
    <div class="feedback">
        <div class="feedback__iconChat" @click="isGuiChat = true">
            <div class="feedback__iconChat__icon" >
                <i class="far fa-comment-alt"></i>
                <div class="feedback__dots">
                    <span v-for="(item,i) in 3" :key="i">.</span>
                </div>
            </div>
        </div>
        <div class="feedback__form" v-if="isGuiChat" @click.self="isGuiChat = false">
            <div class="chat">
                <div class="chat__header"  @click ="isGuiChat = false">
                    <div class="chat__header__title">Welcome to LiveChat</div>
                </div>
                <div class="chat__body">
                    <div class="chat__body__icon d-flex justify-content-center"><i class="fas fa-headset"></i></div>
                    <div class="chat__body__form">
                        <div class="container">
                            <form action="">
                                <div class="form-group">
                                    <div class="col-sm-1-12 chat__body__form__text">
                                        Welcome to Sales Chat! Please fill in the form below before starting the chat.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputName" class="col-sm-1-12 col-form-label">Name: <code>*</code></label>
                                    <div class="col-sm-1-12">
                                        <input type="text" class="form-control" name="inputName" id="inputName" placeholder="">
                                    </div>
                                </div>
                                <div class="form-group">
                                   <label for="inputGmail" class="col-sm-1-12 col-form-label">Gmail <code>*</code></label>
                                    <div class="col-sm-1-12">
                                        <input type="text" class="form-control" name="inputGmail" id="inputGmail" placeholder="">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-12 d-flex justify-content-center">
                                        <button type="submit" class=" chat__body__button btn btn-primary">Chat!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="chat__footer"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlexChat',
    data () {
        return {
            isGuiChat: false
        }
    },
    mounted () {

    },
    methods: {
        isGuiCHats () {
            console.log(123)
        }
    }
}
</script>

<style lang="scss" scoped>
.feedback{
    &__iconChat{
        cursor: pointer;
        position: fixed;
        right: 10px;
        bottom: 10%;
        color: #fff;
        border: 1px solid #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background: rgb(4, 150, 247);
        z-index: 10;
    }
    &__dots{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
    }
    &__iconChat:hover {
        @for $i from 1 through 3 {
            .dots span:nth-child(#{$i}){
                animation: dotScale 2s linear infinite;
                animation-delay: calc(0.3s*#{$i});
            }
            .fa-comment-alt{
                font-size: 30px;
            }
            width: 55px;
            height: 55px;
        }
    }
    &__form{
        position: fixed;
        cursor: pointer;
        right: 0;
        bottom: 0;
        width: 350px;
        height: 80vh;
        z-index: 10;
        background-color: #fff;
        color: black;
        padding: 20px;
        border-radius: 10px 10px 0 0;
    }
}
.chat{
    font-size: 2rem;
    &__header{
        padding: 10px 0;
        &__title{
            text-align: center;
            font-weight: 500;
            font-size: 2.5rem;
        }
    }
    &__body{
        cursor: default;
        padding: 10px 0;
        color: rgb(39, 37, 37);
        &__form{
            padding: 10px 0;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 15;
            font-size: 1.5rem;
            &__text{
                line-height: 1.2;
            }
        }
        &__form::after{
            content: ' ';
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            border:1px solid black;
            opacity: 0.1;
            z-index: -1;
        }
        &__icon{
            padding: 10px 0;
            color: #0069D9;
        }
        &__button{
            padding: 5px 10px;
            font-size: 2rem;
        }
    }
}
@keyframes dotScale {
    0%{
        transform: scale(0) ;
    };
    50%{
        transform: scale(1.2);
        font-size: 10px;
    };
    100%{
        transform: scale(1.5);
    }
}
</style>
