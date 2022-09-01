<svelte:head>
    <title>| Login</title>
</svelte:head>

<script lang="ts">
    import { parseFormData } from "$lib/utils/core";   
    import api from "$lib/api";
    import { goto } from "$app/navigation";

    const handleLogin = (e: any) => {
        const data = parseFormData(e.target);

        api.auth.login(data).then(res => {
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
        class="w-1/2 h-1/2 flex flex-col"
        on:submit|preventDefault={handleLogin}
    >
        <input
            type="text"
            name="email"
            class="input"
            placeholder="Email"
        />
        <input
            type="text"
            name="password"
            class="input"
            placeholder="Password"
        />
        <button
            type="submit"
            class="mt-2 bg-accent rounded-md p-2 font-bold text-white"
        >
            Login
        </button>
    </form>
    <a href="/auth/signup">Signup instead</a>
</div>

<style lang="postcss">
    .input {
        @apply bg-black rounded-md py-3 px-4 my-2 font-bold text-white;
    }
</style>