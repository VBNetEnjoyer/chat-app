<template>
    <div v-show="messages !== null">
        <div class="page__chat-box" ref="chatBox">
            <message-card
            v-for="msg in messages" :message="msg" :key="msg.date"
            :class="{usermessage: msg.ownerId == authUserId}"/>
        </div>
        <form action="#">
            <textarea placeholder="write message" rows="1" v-model="message" @keydown.enter.prevent="sendMessage"/>
            <button @click.prevent="sendMessage">SEND</button>
        </form>       
    </div>
</template>

<script>
import MessageCard from '@/components/MessageCard.vue';

export default {
    components:{
        MessageCard,
    },
    props:{
        authUserId:{
            type: [Number, String],
        },
        chatId:{
            type: [Number, String],
        }
    },
    data(){
        return{
            message: "",
        }
    },
    methods:{
        sendMessage(){
            if(this.message == "") return
            let msg = {
                ownerId: this.authUserId,
                body: this.message,
                date: Date.now(),
            };
            this.message = "";
            this.$storage.addMessage(this.chatId, msg);
            // this.$nextTick().then(()=> { this.scrollToBottom() });
            this.scrollToBottom();
        },
        async scrollToBottom(){
            await this.$nextTick();
            this.$refs.chatBox.scrollTo(0, this.$refs.chatBox.scrollHeight);
        }
    },
    computed:{
        messages(){
            this.scrollToBottom();
            // this.$nextTick().then(()=> { this.scrollToBottom() });
            return this.chatId !== "" ? this.$storage.getChatById(this.chatId).messages.sort((a, b)=> a.date - b.date) : null
        },
    },

}
</script>

<style scoped>
.page__chat-box{
    flex: 1;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(0, 0, 0);
    overflow-y: auto;
}
.page__chat-box>*{
    margin-bottom: 10px;
}

form{
    padding: 10px 0px;
    display: flex;
}
input{
    flex: 1 1 auto;
    resize: none;
}
textarea{
    flex: 1 1 auto;
    padding: 10px;
    resize: none;
}
form button{
    padding: 0px 20px;
}
</style>