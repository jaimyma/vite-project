<template>
    <div>
        <h2>Registreer</h2>
        <input v-model="email" placeholder="Email" type="email">
        <input v-model="password" placeholder="Wachtwoord" type="password">
        <button @click="signUp">Registreren</button>
        <p>Al een account? <router-link to="/">Login</router-link></p>
    </div>
</template>

<script>
import bcrypt from 'bcryptjs';

    export default {
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            signUp() {
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(this.password, salt);

                const user = { email: this.email, password: hashedPassword};
                localStorage.setItem('user', JSON.stringify(user));
                alert('Account aangemaakt! Log in met je ggevens.');
                this.$router.push('/');
            }
        }
    };
</script>