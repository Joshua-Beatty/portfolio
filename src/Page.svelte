<script lang="ts">
    export let offset = 0;

	$: cssVarStyles = `--offset:${offset};`;
</script>
<div class="page" style={cssVarStyles} >
    <slot></slot>
</div>
<style>
    .page{
        position:absolute;
        width: 100%;
        left: calc(100% * var(--offset));
        transition: all 300ms ease-in-out;
        height: 100%;
        overflow-y: auto;
    }
</style>