<template>
    <div class="message">
        <div class="message__time">{{new Date(message.date).toLocaleTimeString()}}</div>
        <div class="message__body">{{message.body}}</div>
    </div>
</template>

<script>
export default {
    props:{
        message: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style>
.message{
    max-width: 65%;
    width: fit-content;
    padding: 10px;
    border: 1px solid rgb(0, 0, 0, 0.5);
    border-radius: 8px;
    word-break: break-all;
}
.message:first-child{
    margin: auto 0 0 0;
}
.message.usermessage:first-child{
    margin: auto 10px 10px auto;
}
.message.usermessage{
    margin: 0 10px 0 auto;
    background-color: #CAF0F8;
}
.message.usermessage .message__time{
    text-align: right;
}
.message__time{
    font-size: 0.8em;
    margin-left: auto;
    user-select: none;
}

</style>