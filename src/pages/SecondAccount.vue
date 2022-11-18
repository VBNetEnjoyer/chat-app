<template>
    <Authorization v-if="!authorizated" @succesfullAuth="succesfullAuth"/>
    <ChatBody :user="user" v-else/>
</template>

<script>
import ChatBody from '../components/ChatBody.vue';
import AppStorage from "@/model/AppStorage.js";
import Authorization from '@/components/Authorization.vue';

export default {
    props:{
        logOut:{
            type: Boolean,
        }
    },
    data(){
        return{
            data: AppStorage.data,
            authorizated: false,
            user: null
        }
    },
    components:{
        ChatBody, Authorization
    },
    methods:{
        succesfullAuth(user){
            this.authorizated = true;
            AppStorage.updateSecondPageAuth(user.id);
            this.user = this.getUser();
        },
        getUser(){
            if(this.data.secondPage.authUserId !== null){
                this.authorizated = true;
                return AppStorage.getUserById(this.data.secondPage.authUserId);
            } else {
                return null;
            }
        },
    },
    created(){
        this.user = this.getUser();
    },
    watch:{
        logOut(newValue, oldValue){
            if(newValue){
                this.authorizated = false;
                AppStorage.logOutSecondPage(this.user.id)
            }
        }
    }
}
</script>

<style scoped>

</style>