<template>
    <div class="contact">
        <div class="contact__avatar">
            <img src="@/assets/avatar.svg" alt="">
        </div>
        <div class="contact__info">
            <div class="contact__name">{{contact.username}}</div>
            <div class="contact__status" :class="{offline: !contact.status}">{{
                contact.status ? "Online" : "Offline"
            }}</div>
        </div>
    </div>  
</template>

<script>
export default {
    props:{
        contact:{
            type: Object,
            required: true,
        }
    },
    computed:{
        isOffline(){
            return this.contact.status
        }
    }
}
</script>

<style scoped>
.contact {
    border: 1px solid rgb(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 10px 10px;
}
.contact__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
}
.contact__avatar img {
    width: 100%;
    height: 100%;
}

.contact__info {
    margin-left: 10px;
}
.contact__status {
    position: relative;
    font-size: 0.8em;
}
.contact__status::after {
    content: " ";
    position: absolute;
    top: 4px;
    margin-left: 4px;
    width: 8px;
    height: 8px;
    background-color: green;
    border-radius: 8px;
}
.contact__status.offline::after {
    content: " ";
    position: absolute;
    top: 4px;
    margin-left: 4px;
    width: 8px;
    height: 8px;
    background-color: grey;
    border-radius: 8px;
}

</style>