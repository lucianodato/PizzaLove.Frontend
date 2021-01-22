<template>
    <div>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Love For Pizza</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in this.$store.state.user.all.topTenLovers" :key="user.id">
                    <td>{{user.username}}</td>
                    <td>{{user.pizzaLove}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TopTenLovers",
    created () {
        this.$store.dispatch('user/getTopTenLovers');
    }
};
</script>