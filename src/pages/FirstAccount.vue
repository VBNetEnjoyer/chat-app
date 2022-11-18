<template>
    <ChatBody :user="user"/>
</template>

<script>
import ChatBody from '../components/ChatBody.vue';
import AppStorage from "@/model/AppStorage.js"

export default {
    data(){
        return{
            user: AppStorage.data.users[0],
        }
    },
    components:{
        ChatBody,
    },
}
</script>

<style scoped>

</style>