<template>
    <Authorization v-if="!authorizated" @succesfullAuth="succesfullAuth"/>
    <ChatBody :user="user" v-else/>
</template>

<script>
import pageMixin from "@/mixins/mixinForPage.js";

export default {
    mixins: [pageMixin],
    methods:{
        succesfullAuth(user){
            this.authorizated = true;
            this.$storage.updateSecondPageAuth(user.id);
            this.user = this.getUser();
        },
        getUser(){
            if(this.data.secondPage.authUserId !== null){
                this.authorizated = true;
                return this.$storage.getUserById(this.data.secondPage.authUserId);
            } else {
                return null;
            }
        },
    },
    watch:{
        logOut(newValue, oldValue){
            if(newValue){
                this.authorizated = false;
                this.$storage.logOutSecondPage(this.user.id);
                this.$emit('logOut');
            }
        }
    }
}
</script>

<style scoped>

</style>