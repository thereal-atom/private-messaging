<script lang="ts">
    import type { User, Chat } from "private-messaging";
    import { page } from "$app/stores";
    import api from "$lib/api";
    import { chatsStore } from "$lib/stores/chats";
    
    let chat: Chat | undefined;
    $: chat;

    chat = $chatsStore.find(c => c.id === $page.params.id);

    const user: User = {
        id: "user_someid",
        email: "oscar@gmail.com",
        name: "Oscar",
        avatar: {
            id: "",
            url: "",
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
    };

    const sendMessage = (e: any) => {
        const messageContent = e.target.messageContent.value
        if (!messageContent || !chat) return;

        api.chat.createMessage({
            authorId: "user_someid",
            chatId: chat.id,
            content: messageContent,
        });
    };
</script>
<div class="flex flex-col h-screen max-h-screen">
    {#if chat}
        <div class="flex flex-row max-w-screen py-4 items-center border-b border-solid border-secondary">
            <a
                href="/chats"
                class="w-24"
            >
                <img
                    src="/icons/left-arrow.svg"
                    alt="exit"
                    class="w-8 h-8 ml-2"
                />
            </a>
            <img
                src={chat.avatarUrl || "/images/default-avatar.png"}
                alt="avatar"
                class="h-8 w-8 rounded-full ml-2"
            />
            <span class="w-full font-bold ml-4 mt-1">{chat.name}</span>
            <div class="flex flex-row justify-end w-48 pr-4">
                <img
                    src="/icons/call.svg"
                    alt="exit"
                    class="w-6 h-6 ml-2"
                />
                <img
                    src="/icons/options.svg"
                    alt="exit"
                    class="w-6 h-6 ml-2"
                />
            </div>
        </div>
        <div class="flex-auto flex flex-col overflow-y-scroll items-start h-full p-4">
            {#each chat.messages as message}
                <div class="message-container {message.authorId === user.id ? "right" : "left"}"><div class="message">{message.content}</div></div>
            {/each}
        </div>
        <form
            class="flex flex-row items-center p-4 border-t border-solid border-secondary"
            on:submit|preventDefault={sendMessage}
        >
            <img
                src="/icons/file.svg"
                alt="file"
                class="w-10 h-10 bg-dark-secondary p-2 rounded-md bg-opacity-30"
            />
            <input
                class="rounded-md ml-3 bg-dark-secondary w-full h-10 pl-4 font-bold text-sm"
                placeholder="Message {chat.name}"
                name="messageContent"
            />
            <button type="submit">
                <img
                    src="/icons/send.svg"
                    alt="send"
                    class="w-10 h-10 ml-2 rounded-full p-2"
                />
            </button>
        </form>
    {:else}
        <span>No chat found</span>
    {/if}
</div>

<style lang="postcss">
    .message {
        @apply flex flex-col font-bold px-3 py-1.5 text-sm bg-secondary rounded-md rounded-bl-sm mt-2 w-fit;
    }
    .message-container.left {
        @apply pr-16;
    }
    .message-container.right {
        @apply pl-16;
    }
    .message-container.right .message {
        @apply rounded-br-sm bg-accent self-end rounded-bl-md;
    }
    .message-container {
        @apply flex flex-col-reverse w-full;
    }
</style>