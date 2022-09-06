<script lang="ts">
    export let loading: boolean;
</script>
{#if loading}
    <div class="w-screen h-screen flex items-center justify-center">
        <span>Loading animation</span>    
    </div>
{:else}
    <slot />
{/if}