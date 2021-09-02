<template>
    <form action="" class='sign-in-form formlg'>
        <h2 class="title">Sign in</h2>
        <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder='Username' name='userName' v-on:keyup="onChangeUser($event)"
                v-model.trim="$v.user.userName.$model"
                :class="{'is-invalid':$v.user.userName.$error, 'is-valid':!$v.user.userName.$invalid}"
            />
            <!-- <div class="valid-feedback"> Your username is valid</div>
            <div class="invalid-feedback">
                <span v-if="!$v.user.userName.required">username is require</span>
                <span v-if="!$v.user.userName.minLength">username is min </span>
                <span v-if="!$v.user.userName.maxLength">username is max</span>
            </div> -->
        </div>
        <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder='Password' name='userPassword' v-on:keyup="onChangeUser($event)"
                v-model.trim="$v.user.userPassword.$model"
                :class="{'is-invalid':$v.user.userPassword.error, 'is-valid':!$v.user.userPassword.$invalid}"
            />
            <!-- <div class="valid-feedback"> Your username is valid</div>
            <div class="invalid-feedback">
                <span v-if="!$v.user.userPassword.required">userPassword is require</span>
                <span v-if="!$v.user.userPassword.minLength">userPassword is min </span>
                <span v-if="!$v.user.userPassword.maxLength">userPassword is max</span>
            </div> -->
        </div>
        <div class="noti-fail" v-if="submitStatus === 'invalid'">Username or Password invalid!</div>
        <button type="submit" value='login' class="btnlg solid" v-on:click.prevent="login()">{{submitStatus!=='wait'? 'login' : 'Wait...'}}</button>
        <!-- <button type="submit" value='login' class="btnlg solid" v-on:click.prevent="login()" v-if="submitStatus==='wait'">Wait...</button> -->
        <div class="socical">
            <p class="socical__text">Or sign in with socical platforms</p>
            <div class="socical__media">
                <a class="socical__icon"><i class="fab fa-facebook-f"></i></a>
                <a class="socical__icon"><i class="fab fa-google"></i></a>
                <a class="socical__icon"><i class="fab fa-twitter"></i></a>
                <a class="socical__icon"><i class="fab fa-linkedin-in"></i></a>
                <router-link to='/Home' class="socical__icon"><i class="fas fa-home"></i></router-link>
            </div>
        </div>
    </form>
</template>

<script>
import UserAPi from '../../../service/userApi'
import router from '@/router/index'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    name: 'FormLogin',
    router,
    data () {
        return {
            user: {
                userName: '',
                userPassword: ''
            },
            submitStatus: null
        }
    },
    validations: {
        user: {
            userName: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(20)
            },
            userPassword: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(20)
            }
        }
    },
    methods: {
        onChangeUser (e) {
            this.user[e.target.name] = e.target.value
            this.submitStatus = null
        },
        async login () {
            try {
                if (this.$v.$invalid) {
                    this.submitStatus = 'invalid'
                    console.log('this.$v.$invalid')
                } else {
                    this.submitStatus = 'wait'
                    const res = await UserAPi.postLogin(this.user)
                    if (res.message === 'Success') {
                        window.localStorage.setItem('token', res.data.token)
                        this.$store.commit('setToken')
                        this.$router.push('/home')
                    } else {
                        console.log('login unsuccessful!')
                    }
                    console.log(res)
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {

    }
}
</script>

<style lang='scss'>
.noti-fail{
    color: red;
    font-style: italic;
}
</style>
