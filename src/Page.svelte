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
        transition: all 200ms ease-in-out;
        background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/gridme.png);
        background-position: -10px -10px;
        background-attachment: fixed;
        height: 100%;
        overflow-y: auto;
    }
</style>