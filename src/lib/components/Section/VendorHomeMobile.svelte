<script lang="ts">
    export let data: any = [];

    $: items = data ?? [];
</script>

{#each items as vendor}
    <div
        class="feature-port"
    >
        <a data-sveltekit-reload  href={`/vendormobile/${vendor.slug}`} class="vendor-port h-[13rem] lg:h-[25rem] img-border">
            <img
                src={vendor.images.length > 0
                    ? vendor.images[1].path
                    : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'}
                alt={vendor.name}
            />
            <div class="cover">
                <div class="detail px-10 text-white">
                    <h3 class="text-2xl boldfont text-white mb-10">{vendor.name}</h3>
                    <div class="text-lg line-clamp-3">{vendor.short_desc}</div>
                </div>
            </div>
        </a>
    </div>
{/each}
