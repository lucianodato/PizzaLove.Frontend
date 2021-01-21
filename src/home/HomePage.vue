<template>
    <div>
        <h1 v-if="userData">Hi {{userData.firstName}}!</h1>
        <p>You're logged in</p>
        <h3>You Love pizzas this much:</h3>
        <p v-if="userData">{{userData.pizzaLove}}</p>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        userAuthenticated () {
            return this.$store.state.authentication.user;
        },
        userData () {
            return this.$store.state.user.all.item;
        }
    },
    created () {
        this.$store.dispatch('user/getUser', {"id" : this.userAuthenticated.id});
    }
};
</script>