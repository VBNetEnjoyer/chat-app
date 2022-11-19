<template>
    <AppHeader @onLogOutClick="onLogOutClick" class="header"/>
    <router-view class="page" :logOut="logOut" @logOut="logOut = falsez"/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
    components:{
        AppHeader
    },
    data(){
        return{
            logOut: false,
        }
    },
    methods:{
        onLogOutClick(){
            this.logOut = true;
        }
    }
    
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: sans-serif;
}
a{
    text-decoration: none;
}
html, body{
    height: 100%;
}
#app{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.page{
    height: calc(100% - 53px);
}
</style>
