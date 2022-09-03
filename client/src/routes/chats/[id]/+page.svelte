<script>
    const chat = {
        name: "Oscar",
        avatarUrl: "/images/default-avatar.png",
        messages: [],
        group: false,
    };
</script>
<div class="flex flex-col h-screen max-h-screen">
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
            src={chat.avatarUrl}
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
        <div class="message-container right"><div class="message">Lorem ipsum dolor sit</div></div>
        <div class="message-container right"><div class="message">amet consectetur adipisicing elit. Voluptatum modi quo rerum eveniet</div></div>
        <div class="message-container right"><div class="message">atque facilis hic, aspernatur iusto nisi! Tempora omnis fugiat ad rerum</div></div>
        <div class="message-container right"><div class="message">accusamus accusantium</div></div>
        <div class="message-container right"><div class="message">laboriosam</div></div>
        <div class="message-container left"><div class="message">recusandae aliquid eligendi.</div></div>
        <div class="message-container right"><div class="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae</div></div>
        <div class="message-container left"><div class="message">veritatis ipsa, sapiente quae tempora expedita, distinctio architecto</div></div>
        <div class="message-container left"><div class="message">quisquam impedit dicta eum.</div></div>
        <div class="message-container right"><div class="message">Porro, et!</div></div>
        <div class="message-container right"><div class="message">Vel</div></div>
        <div class="message-container right"><div class="message">eius nemo quod fuga aliquam? Maiores?</div></div>
        <div class="message-container left"><div class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></div>
        <div class="message-container left"><div class="message">Lorem</div></div>
    </div>
    <div class="flex flex-row items-center p-4 border-t border-solid border-secondary">
        <img
            src="/icons/file.svg"
            alt="file"
            class="w-10 h-10 bg-dark-secondary p-2 rounded-md bg-opacity-30"
        />
        <input
            class="rounded-md ml-3 bg-dark-secondary w-full h-10 pl-4 font-bold text-sm"
            placeholder="Message {chat.name}"
        />
        <img
            src="/icons/send.svg"
            alt="send"
            class="w-10 h-10 ml-2 rounded-full p-2"
        />
    </div>
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