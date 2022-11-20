<template>
    <Authorization v-if="!authorizated" @succesfullAuth="succesfullAuth"/>
    <ChatBody :user="user" v-else/>
</template>

<script>
import pageMixin from "@/mixins/mixinForPage.js";

export default {
    mixins: [pageMixin],
    methods: {
        succesfullAuth(user) {
            this.authorizated = true;
            this.$storage.updateFirstPageAuth(user.id);;
            this.user = this.getUser();
        },
        getUser() {
            if(this.data.firstPage.authUserId !== null){
                this.authorizated = true;
                return this.$storage.getUserById(this.data.firstPage.authUserId);
            } else {
                return null
            }
        },
    },
    watch: {
        logOut(newValue, oldValue){
            if(newValue){
                this.authorizated = false;
                this.$storage.logOutFirstPage(this.user.id);
                this.$emit('logOut')
            }
        }
    }
}
</script>

<style scoped>

</style>