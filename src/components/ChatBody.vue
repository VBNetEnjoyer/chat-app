<template>
    <main class="page">
        <div class="page__container">
            <div class="page__body">
                <div class="page__leftside">
                    <div class="page__contacts-box">
                        <!-- <div class="contact">
                             <div class="contact__avatar">
                                <img src="./avatar.svg" alt="">
                            </div>
                            <div class="contact__info">
                                <div class="contact__name">Admin 1</div>
                                <div class="contact__status">offline</div>
                            </div>
                        </div> -->
                    </div>
                 </div>
                <div class="page__rightside">
                    <div class="page__chat-box">
                        <message-card v-for="msg in messages" :message=msg :key="msg.date"/>
                    </div>
                    <form action="#">
                        <textarea placeholder="write message" rows="1" v-model="message" @keydown.enter.prevent="sendMessage"/>
                        <button @click.prevent="sendMessage">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import MessageCard from './MessageCard.vue';

export default {
    components:{
        MessageCard
    },
    props:{
        messages:{
            type: Array,
            required: true 
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
                body: this.message,
                date: Date.now(),
                isUserMessage: true,
            };
            this.message = "";
            this.$emit("newMessage", msg);
        }
    },
    
}
</script>

<style scoped>
.page__container{
    max-width: 1300px;
    padding: 0 10px;
    margin: 0 auto;
    height: 100%;
    max-height: 100%;
}
.page__body{
    display: flex;
    height: 100%;
    max-height: 100%;
    border-left: 1px solid rgb(0, 0, 0, 0.2);
    border-right: 1px solid rgb(0, 0, 0, 0.2);
}
.page__leftside{
    flex-basis: 30%;
    border-right: 1px solid rgb(0, 0, 0, 0.2);
}
.page__rightside{
    padding: 10px 30px;
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
}
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