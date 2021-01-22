<template>
    <div>
        <div class="form-group">
            <h4>Do you love Pizza?</h4>
            <button class="btn btn-primary" v-on:click.prevent="handleIncreasePizzaLove">
                I Love it
            </button>
        </div>
         <div class="form-group">
            <p v-if="this.$store.state.user.all.user">
                You Love pizzas this much: {{this.$store.state.user.all.user.pizzaLove}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PizzaLove",
    methods: {
        handleIncreasePizzaLove (e) {
            this.$store.dispatch('user/updatePizzaLoveForUser', {"id": this.$store.state.authentication.user.id, "pizzaLove": this.$store.state.user.all.user.pizzaLove + 1});
        }
    }
};
</script>