<template>
    <AppHeader class="header"/>
    <router-view class="page"/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
    components:{
        AppHeader
    },
    data(){
        return{
            users: [
                {id: 1, login: "admin", password: "admin", username: "Admin", messages:[]},
                {id: 2, login: "admin2", password: "admin2", username: "Second Admin", messages:[]},
            ],
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
