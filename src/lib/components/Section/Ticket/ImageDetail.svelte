<script lang="ts">
	export let data: any = [];
</script>
<div class="grid lg:grid-cols-3 gap-4">
    <div class="col-span-2">
        <img
            src={data?.images[0]?.path}
            alt={data?.images[0]?.path}
            class="rounded-lg h-[25vh] lg:h-[52vh] w-full object-cover"
        />
    </div>
    <div class="col-span-1">
        <img
            src={data?.images[0]?.path}
            alt={data?.images[0]?.path}
            class="hidden lg:block rounded-lg h-[25vh] mb-[2vh] w-full object-cover"
        />
        <img
            src={data?.images[0]?.path}
            alt={data?.images[0]?.path}
            class="hidden lg:block rounded-lg h-[25vh] w-full object-cover"
        />
    </div>
</div>