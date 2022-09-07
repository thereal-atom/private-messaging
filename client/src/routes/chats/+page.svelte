<script lang="ts">
    import type { Chat } from "private-messaging";
    import { slide } from "svelte/transition";
    import { chatsStore, setChats } from "$lib/stores/chats";
    import Loading from "$lib/components/Loading.svelte";
    import api from "$lib/api";

    const chatSections: {
        Pinned: Chat[];
        Groups: Chat[];
        Chats: Chat[];
    } = {
        Pinned: [],
        Groups: [],
        Chats: [],
    };

    $chatsStore.forEach(chat => {
        if (false /* chat.pinned */) {
            chatSections.Pinned.push(chat);
        } else if (chat.group) {
            chatSections.Groups.push(chat);
        } else {
            chatSections.Chats.push(chat);
        };
    });

    $: isSearchbarActive = false;
    let selectedTab: "Pinned" | "Groups" | "Chats";
    $: selectedTab = "Pinned";
    $: loading = true;

    api.chat.getAll().then(res => {
        loading = false;
        if (res.ok) {
            setChats(res.data);
        } else {
            // TODO: handle error
        };
    });
</script>

<Loading {loading}>
    <div class="flex flex-col">
        <div class="flex flex-row pt-4 px-8 justify-between">
            <div>
                <span class="font-bold">Whatsapp</span>
            </div>
            <div class="flex flex-row mt-1 pr-1">
                <div
                    class="hover:cursor-wait"
                    on:click={() => isSearchbarActive = !isSearchbarActive}
                >
                    <img
                        src="/icons/search.svg"
                        alt="search"
                        class="hover:cursor-pointer"
                    />
                </div>
                <img
                    src="/icons/settings.svg"
                    alt="settings"
                    class="w-6 h-6 ml-4 hover:cursor-pointer"
                />
            </div>
        </div>
        {#if isSearchbarActive}
            <div
                class="flex flex-row border border-solid border-secondary mx-6 p-2 px-4 rounded-xl mt-4"
                transition:slide={{ duration: 200 }}
            >
                <img
                    src="/icons/search.svg"
                    alt="search"
                    class="mt-1"
                />
                <input
                    type="text"
                    placeholder="Search"
                    class="bg-inherit border-solid text-white font-bold pl-2 focus:border-0 focus:outline-none"
                />
            </div>
        {/if}
        <!-- <div class="stories flex flex-row p-6">
            <img
                src="/images/default-avatar.png"
                alt="avatar"
                class="avatar"
            />
            <img
                src="/images/default-avatar.png"
                alt="avatar"
                class="avatar"
            />
            <img
                src="/images/default-avatar.png"
                alt="avatar"
                class="avatar"
            />
            <img
                src="/images/default-avatar.png"
                alt="avatar"
                class="avatar"
            />
        </div> -->
        <div class="flex flex-row border border-solid border-secondary p-1 rounded-md mx-6 my-4 mt-8 justify-between px-2">
            <span
                class="tab {selectedTab === "Pinned" && "active"}"
                on:click={() => selectedTab = "Pinned"}
            >
                Pinned
            </span>
            <span
                class="tab {selectedTab === "Groups" && "active"}"
                on:click={() => selectedTab = "Groups"}
            >
                Groups
            </span>
            <span
                class="tab {selectedTab === "Chats" && "active"}"
                on:click={() => selectedTab = "Chats"}
            >
                Chats
            </span>
        </div>
        <div class="flex flex-col px-8 mt-8 relative">
            {#each Object.entries(chatSections) as [sectionTitle, sectionChats]}
                {#if selectedTab === sectionTitle}
                    <div class="flex flex-col">
                        <span class="font-bold text-secondary">{sectionTitle}</span>
                        {#if sectionChats.length > 0}
                        <div class="flex flex-col my-4">
                            {#each sectionChats as sectionChat}
                                <a
                                    class="flex flex-row items-center my-2"
                                    href="/chats/{sectionChat.id}"
                                >
                                    <img
                                        src={sectionChat.avatarUrl}
                                        alt="{sectionChat.name} avatar"
                                        class="w-10 h-10 rounded-full"
                                    />
                                    <div class="flex flex-col w-full ml-4">
                                        <span class="font-bold text-sm ml-0.5">{sectionChat.name}</span>
                                        <span class="opacity-50 text-xs mt-1 font-medium text-ellipsis">Latest message and this is what happend when it overflows</span>
                                    </div>
                                    <div class="flex flex-col items-end">
                                        <span class="font-bold text-xs text-secondary">11:00pm</span>
                                        <span class="flex items-center justify-center font-bold text-sm bg-accent rounded-full w-5 h-5 mt-2">4</span>
                                    </div>
                                </a>
                            {/each}
                        </div>
                        {:else}
                            <span class="mt-4 font-bold opacity-10">No {sectionTitle.toLowerCase()} found</span>
                        {/if}
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</Loading>

<style lang="postcss">
    /* .stories .avatar {
        @apply rounded-full h-14 w-14 mr-8 border-2 p-1 border-solid border-accent;
    } */
    .tab {
        @apply transition-all font-bold text-sm text-secondary my-1 p-1 px-4 w-1/3 text-center mx-1;
    }
    .tab.active {
        @apply transition-all bg-dark-secondary text-white rounded-md;
    }
    .tab:hover {
        cursor: pointer;
    }
</style>