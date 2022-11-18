<template>
    <main class="page">
        <div class="page__container">
            <div class="page__body">
                <div class="page__leftside">
                    <div class="page__contacts-box">
                        <contact-card
                        @choosenContact="changeChat"
                        @choosenContactNode="changeContactNode"
                        v-for="contact in contacts" :contact="contact" :key="contact.id"
                        ref="contactsNode"/>
                    </div>
                 </div>
                <chat-box 
                class="page__rightside"
                :authUserId="user.id" :chatId="chatId"/>
            </div>
        </div>
    </main>
</template>

<script>
import ChatBox from '@/components/ChatBox.vue';
import ContactCard from './ContactCard.vue';
import AppStorage from "@/model/AppStorage.js";

export default {
    components:{
        ChatBox, ContactCard
    },
    props:{
        user:{
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            chatId: this.changeChat(null)
        }
    },
    computed:{
        contacts(){
            return [...this.user.contacts].map(id => AppStorage.getUserById(id));
        },
    },
    methods:{
        changeChat(choosenContact){
            if(choosenContact == null) return "";
            // Проверка на наличие общих чатов
            if(this.user.userChats.some(el => choosenContact.userChats.some(secondEl => el == secondEl))){
                this.chatId = this.user.userChats.map(el => choosenContact.userChats.find(secondEl => secondEl == el))
                                .filter(el => typeof el !== "undefined")[0]
            } else {
               this.chatId = AppStorage.createNewChat(this.user.id, choosenContact.id);

            }
        },
        changeContactNode(element){
            this.$refs.contactsNode.forEach(el => {
                el.$el.classList.remove("active");
            });
            element.classList.add("active");
        }
    },
    mounted(){
       
    }
    
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
</style>