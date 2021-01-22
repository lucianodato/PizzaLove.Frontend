<template>
    <div>
        <div class="alert alert-info">
            Use this user for testing<br />
            Username: test<br />
            Password: test
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