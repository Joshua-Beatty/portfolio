<script lang="ts">
    export let images: {src: string, alt:string}[]
    export let title: any | null
    export let imageRatio: number = 45
</script>
<div class="container">
    <div class="card">
        <div class="text" style={`width:${100 - imageRatio}%`}>
            <h2>{title}</h2>
            <p><slot></slot></p>
        </div>
        <div class="imgContainer" style={`width:${imageRatio}%`}>
	        {#each images as image}
                <img loading="lazy" src={image.src} alt={image.alt} style={`width:${(100 - 2 *  images.length) / images.length}%`}/>
            {/each}
        </div>
    </div>
</div>

<style>
    .container{
        display: grid;
        place-items: center;
        margin-top: 2rem;
    }
    .card{
        padding: 1em;
        height: fit-content;
        width: 50%;
        min-height: 315px;
        min-width: 675px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 15px;
        display: table;
    }
    .text{
        width: 55%;
        display: table-cell;
        vertical-align: top;
    }
    img {
        width: 50%;
        object-fit: contain;
        height: 100%;
        margin: 1%;
    }
    .imgContainer{
        height: 100%;
        width: 45%;
        display: table-cell;
        vertical-align: middle;
    }
    
    @media all and (max-width: 750px) {
        .card{
            min-width: 80%;
        }
        .imgContainer{
            display: table-row;
        }
    }
</style>