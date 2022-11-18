<template>
   <div class="authorization-dialog">
        <div class="authorization-dialog__body">
            <h2 class="authorization-dialog__title">Welcome</h2>
            <form class="authorization-dialog__form" @keydown.enter.prevent="">
                <label for="" class="authorization-dialog__login-label">Login</label>
                <input 
                v-model="login"
                type="text" class="authorization-dialog__login-input"/>
                <label for="" class="authorization-dialog__password-label" id="loginInput">Password</label>
                <input
                v-model="password" 
                type="password" class="authorization-dialog__password-input" id="passwordInput">
                <div 
                v-if="isAllert"
                class="authorization-dialog__allert">Incorrect login or password</div>
                <div class="authorization-dialog__btns-group">
                    <button 
                    @click.prevent="onForgotPasswordClick"
                    class="authorization-dialog__forgive-btn">forgot password</button>
                    <button 
                    @click="onLoginClick"
                    @keydown.enter.prevent="onLoginClick"
                    class="authorization-dialog__login-btn">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import AppStorage from '@/model/AppStorage';

export default {
    data(){
        return{
            login: "",
            password: "",
            logins: AppStorage.data.users.map(el => {return el.login}),
            passwords: AppStorage.data.users.map(el => {return el.password}),
            isAllert: false
        }
    },
    methods:{
        onForgotPasswordClick(){
            alert(`
            Logins: ${this.logins}
            Passwords: ${this.passwords}
            `);
        },
        onLoginClick(){
            if(!this.logins.some(el => this.login === el)){
                this.isAllert = true;
                return;
            }

            const user = AppStorage.getUserByLogin(this.login);

            if(user.password !== this.password){
                this.isAllert = true;
                return;
            }

            if(user.password === this.password && user.login === this.login){
                if(user.id === AppStorage.data.firstPage.authUserId ||
                    user.id === AppStorage.data.secondPage.authUserId){
                        this.isAllert = true;
                        return;
                }
                this.$emit('succesfullAuth', user);
            }

            console.log(user);
        }
    }
}
</script>

<style scoped>
.authorization-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 350px;
    height: 325px;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 0 5px black;
}
.authorization-dialog__body {
    padding: 8px 24px;
}
.authorization-dialog__title {
    text-align: center;
    padding: 16px;
}
.authorization-dialog__form {
    display: flex;
    flex-direction: column;
}
.authorization-dialog__form>*:not(:last-child) {
    display: flex;
    flex-direction: column;
    margin: 0 0 10px 0;
}
.authorization-dialog input{
    padding: 8px;
    border-radius: 8px;
    border: 1px solid black;
}
.authorization-dialog label{
    font-weight: 700;
}
.authorization-dialog__allert{
    color: red;
    font-size: 0.8em;
}
.authorization-dialog__btns-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.authorization-dialog__forgive-btn {
    background: none;
    border: none;
    color: #0077B6;
    cursor: pointer;
}
.authorization-dialog__login-btn {
    padding: 8px 32px;
    background-color: #0077B6;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: 700;
}
.authorization-dialog__login-btn:active {
    background-color: #03045E;
}
</style>