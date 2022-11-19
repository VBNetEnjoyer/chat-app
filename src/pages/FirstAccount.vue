<template>
    <Authorization v-if="!authorizated" @succesfullAuth="succesfullAuth" />
    <ChatBody :user="user" v-else />
</template>

<script>
import ChatBody from '../components/ChatBody.vue';
import AppStorage from "@/model/AppStorage.js";
import Authorization from '@/components/Authorization.vue';

export default {
    props: {

    },
    data() {
        return {
            data: AppStorage.data,
            authorizated: false,
            user: null
        }
    },
    components: {
        ChatBody, Authorization
    },
    methods: {
        succesfullAuth(user) {
            this.authorizated = true;
            AppStorage.updateFirstPageAuth(user.id)
            this.user = this.getUser();
        },
        getUser() {
            if (this.data.firstPage.authUserId !== null) {
                this.authorizated = true;
                return AppStorage.getUserById(this.data.firstPage.authUserId);
            } else {
                return null
            }
        },
        logOut() {
            this.authorizated = false;
            AppStorage.logOutSecondPage(this.user.id);
            this.$emit('logOut');
        }
    },
    created() {
        this.user = this.getUser();
        this.$emit('initialized', this.logOut);
    },
}
</script>

<style scoped>

</style>