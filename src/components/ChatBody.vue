<template>
    <main class="page">
        <div class="page__container">
            <div class="page__body">
                <div class="page__leftside">
                    <div class="page__contacts-box">
                        <contact-card v-for="contact in contacts" :contact="contact" :key="contact.id"/>
                    </div>
                 </div>
                <div class="page__rightside">
                    <chat-box :authUserId="user.id" :chatId="2224"/>
                </div>
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
    computed:{
        contacts(){
            return [...this.user.contacts].map(id => AppStorage.getUserById(id));
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
</style>