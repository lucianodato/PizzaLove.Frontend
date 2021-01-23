<template>
    <div>
        <div class="alert alert-info">
            Use test as username and password for testing<br />
            <router-link to="/signup" class="btn btn-link">
                Or Sign Up
            </router-link>
        </div>
        <h2>Login</h2>
        <LoginForm />
        <TopTenLovers />
    </div>
</template>

<script>
import TopTenLovers from "./TopTenLovers.vue";
import LoginForm from "./LoginForm.vue";

export default {
    components: {
        TopTenLovers,
        LoginForm
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    }
};
</script>