<template>
    <div>
        <h2>Login</h2>
        <input v-model="email" placeholder="Email" type="email">
        <input v-model="password" placeholder="Wachtwoord" type="password">
        <button @click="login">Login</button>
        <p>Nog geen account? <router-link to="/signup">Registreer hier</router-link></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.email === this.email && user.password === this.password) {
                localStorage.setItem('auth', true);
                this.$router.push('/dashboard');
            } else {
                alert('Ongeldige logingegevens')
            }
        }
    }
};
</script>