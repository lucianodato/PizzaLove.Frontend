<template>
    <div>
        <h1 v-if="userData">Hi {{userData.firstName}}!</h1>
        <p>You're logged in</p>
        <div class="form-group">
            <h4 v-if="userData">You Love pizzas this much: {{userData.pizzaLove}}</h4>
            <button class="btn btn-primary" v-on:click.prevent="handleIncreasePizzaLove">Increase Pizza Love</button>
        </div>
        <p>
            <router-link to="/login" class="btn btn-primary">Logout</router-link>
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
                return this.$store.state.user.all.user;
            }
        },
        created () {
            this.$store.dispatch('user/getUser', {"id": this.userAuthenticated.id});
        },    
    methods: {
        handleIncreasePizzaLove (e) {
            this.$store.dispatch('user/updatePizzaLoveForUser', {"id": this.userAuthenticated.id, "pizzaLove": this.userData.pizzaLove + 1});
        }
    }
};
</script>