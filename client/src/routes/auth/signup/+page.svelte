<svelte:head>
    <title>| Signup</title>
</svelte:head>

<script lang="ts">
    import { parseFormData } from "$lib/utils/core";   
    import api from "$lib/api";
    import { goto } from "$app/navigation";

    const handleSignup = (e: any) => {
        const data = parseFormData(e.target);

        api.auth.signup(data).then(res => {
            if (res.status === 200) {
                goto("/chats");
            } else {
                console.log(res);
            };
        });
    };
</script>

<div class="w-screen h-screen flex flex-col items-center justify-center">
    <form
        class="h-1/2 flex flex-col w-full px-12"
        on:submit|preventDefault={handleSignup}
    >
        <input
            type="text"
            name="name"
            class="input"
            placeholder="Username"
        />
        <input
            type="text"
            name="email"
            class="input"
            placeholder="Email"
        />
        <input
            type="password"
            name="password"
            class="input"
            placeholder="Password"
        />
        <input
            type="password"
            name="confirmPassword"
            class="input"
            placeholder="Confirm Password"
        />
        <button
            type="submit"
            class="mt-2 bg-accent rounded-md p-2 font-bold text-white"
        >
            Signup
        </button>
    </form>
    <a href="/auth/login">Login instead</a>
</div>

<style lang="postcss">
    .input {
        @apply bg-black rounded-md py-3 px-4 my-2 font-bold text-white;
    }
</style>