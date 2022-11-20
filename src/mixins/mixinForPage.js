import ChatBody from '../components/ChatBody.vue';
import Authorization from '@/components/Authorization.vue';

export default {
    props: {
        logOut: {
            type: Boolean,
        }
    },
    data() {
        return {
            data: this.$storage.data,
            authorizated: false,
            user: null
        }
    },
    created() {
        this.user = this.getUser()
    },
    components: {
        ChatBody, Authorization
    },   
}