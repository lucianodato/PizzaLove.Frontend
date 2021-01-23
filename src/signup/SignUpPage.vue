<template>
    <div>
        <h2>Sign up</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" v-model="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && !firstName }" />
                <div v-show="submitted && !firstName" class="invalid-feedback">First Name is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" v-model="lastName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && !lastName }" />
                <div v-show="submitted && !lastName" class="invalid-feedback">Last Name is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="signingIn">Sign Up</button>
                <img v-show="signingIn" src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/images/bx_loader.gif" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            submitted: false
        }
    },
    computed: {
        signingIn () {
            return this.$store.state.user.status.signedIn;
        }
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            const { username, password, firstName, lastName } = this;
            const { dispatch } = this.$store;
            if (username && password && firstName && lastName) {
                dispatch('user/signUp', { username, password, firstName, lastName });
            }
        }
    }
};
</script>