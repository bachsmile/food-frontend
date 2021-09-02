<template>
    <form action="" class='sign-up-form formlg'>
        <h2 class="title">Sign up</h2>
        <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder='Username' name='userName' v-on:keyup="onChangeUser($event)"/>
        </div>
        <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder='Email' name='userEmail' v-on:keyup="onChangeUser($event)"/>
        </div>
        <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder='Password' name='userPassword' v-on:keyup="onChangeUser($event)"/>
            <!-- {
                hideEye?<i class="fas fa-eye hidePass" onClick={()=>hidePass(0)}></i>:<i class="fas fa-eye-slash" onClick={()=>hidePass(0)}></i>
            } -->
        </div>
        <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder='ConfirmPassword' name='confirmPassword' v-on:keyup="onChangeUser($event)"/>
            <!-- {
                hideEye?<i class="fas fa-eye hidePass" onClick={()=>hidePass(0)}></i>:<i class="fas fa-eye-slash"onClick={()=>hidePass(0)}></i>
            } -->
        </div>
        <input type="submit" value='Sign up' class="btnlg solid" @click.prevent="register()"/>
        <div class="socical">
            <p class="socical__text">Or sign up with socical platforms</p>
            <div class="socical__media">
                <a class="socical__icon"><i class="fab fa-facebook-f"></i></a>
                <a class="socical__icon"><i class="fab fa-google"></i></a>
                <a class="socical__icon"><i class="fab fa-twitter"></i></a>
                <a class="socical__icon"><i class="fab fa-linkedin-in"></i></a>
                <Link to='/Home' class="socical__icon"><i class="fas fa-home"></i></Link>
            </div>
        </div>
    </form>
</template>

<script>
import UserAPi from '../../../service/userApi'
export default {
    name: 'FormRegister',
    data () {
        return {
            user: {
                userCreateDay: new Date(),
                userEmail: 'NoEmail',
                userName: '',
                userPassword: '',
                userPhone: '0123456789',
                userAddress: 'Ha Noi - Viet nam',
                userAvt: 'img.png',
                userGender: 'Men',
                userBirth: '01/01/2001',
                userRole: 'copper'
            }
        }
    },
    methods: {
        onChangeUser (e) {
            this.user[e.target.name] = e.target.value
        },
        async register () {
            try {
                console.log(this.user)
                const res = await UserAPi.postRegister(this.user)
                if (res.message === 'Success') {
                    alert('register success')
                    // window.localStorage.setItem('token', res.data.token)
                    // this.$router.push('/home')
                } else {
                    console.log('register unsuccessful!')
                }
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>
