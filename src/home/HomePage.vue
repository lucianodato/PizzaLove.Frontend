<template>
    <div>
        <h1 v-if="userData">Hi {{userData.firstName}}!</h1>
        <p>You're logged in</p>
        <PizzaLove />
        <p>
            <router-link to="/login" class="btn btn-link">Logout</router-link>
        </p>
    </div>
</template>

<script>
import PizzaLove from "./PizzaLove.vue";

export default {
    components: {
        PizzaLove
    },
    computed: {
            userAuthenticated () {
                return this.$store.state.authentication.user;
            },
            userData () {
                return this.$store.state.user.user;
            }
        },
        created () {
            this.$store.dispatch('user/getUser', {"id": this.userAuthenticated.id});
        }
};
</script>