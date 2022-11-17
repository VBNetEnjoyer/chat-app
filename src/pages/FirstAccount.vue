<template>
    <ChatBody :messages="messages" @newMessage="addNewMessage"/>
</template>

<script>
import ChatBody from '../components/ChatBody.vue';

export default {
    data(){
        return{
            messages: [
                {
                    body: "body",
                    date: Date.now(),
                    isUserMessage: false,
                }
            ],
            test: "test"
        }
    },
    components:{
        ChatBody,
    },
    methods:{
        addNewMessage(message){
            this.messages.push(message);
        }
    }

}
</script>

<style scoped>

</style>