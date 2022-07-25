<script lang="ts">
	import Page from "./Page.svelte";
	import Main from "./Main.svelte";
	import Resume from "./Resume.svelte";
	import AStyles from "./aStyles.svelte";
	import Projects from "./Projects.svelte"
	let currentPage = 0;
	let title = "Joshua Beatty";
	if (window.location.hash == "#/projects") {
		currentPage = -1;
	} else if (window.location.hash == "#/resume") {
		currentPage = -2;
	} 
	$: {
		if (currentPage == -1) {
			title = "Projects - Joshua Beatty";
		} else if (currentPage == -2) {
			title = "Resume - Joshua Beatty";
		} else {
			title = "Joshua Beatty";
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="sidebar">
	<ul class="menu">
		<li class:selected={currentPage ==  0} on:click={() => {currentPage = 0;history.replaceState(null, null, " ");}} >About</li>
		<li class:selected={currentPage == -1} on:click={() => {currentPage = -1;window.location.hash = "#/projects";}}  >Projects</li>
		<li class:selected={currentPage == -2} on:click={() => {currentPage = -2;window.location.hash = "#/resume";}}    >Resume</li>
	</ul>
</div>

<div class="container">
	<Page offset={currentPage}><Main /></Page>
	<Page offset={currentPage + 1}><Projects /></Page>
	<Page offset={currentPage + 2}><Resume /></Page>
</div>
<AStyles />

<style>
	.container {
		top: max(3vh, 63px);
		position: relative;
		width: 100%;
		overflow: hidden;
		height: calc(100% - max(3vh, 63px));
        background-image: url(/img/gridme.png);
        background-position: -10px -10px;
        background-attachment: fixed;
	}
	.sidebar {
		font-family: "Saira Extra Condensed", sans-serif;
		position: fixed;
		background-color: #3891bd;
		width: 100vw;
		height: 3vh;
		top: 0;
		min-height: 63px;
		justify-content: center;
		align-items: center;
		display: grid;
	}
	.menu {
		list-style-type: none;
		padding: 0;
		margin: 0;
		color: #9cc8de;
		font-weight: 600;
		flex: 1;
		display: flex;
		width: 500px;
		justify-content: space-evenly;
		font-size: 1.1em;
	}
	.menu > li {
		transition: all 200ms ease;
		text-align: center;
		font-weight: 700;
		letter-spacing: 0.26rem;
		text-transform: uppercase;
		font-size: 2.5rem;
	}
	.menu > li:hover {
		color: #cde3ee;
		cursor: pointer;
	}
	.menu > li:active {
		color: white;
		cursor: pointer;
	}
	.menu > li.selected {
		color: white;
		cursor: pointer;
	}
	:global(:not(.menu) > p){
        color: #494e52;
		font-size: 1.1em;
    }
	
    @media all and (max-width: 750px) {
		.menu {
			width: 400px;
		}
		.menu > li{
			font-size: 2rem;
		}
	}
	@media all and (max-width: 400px) {
		.menu {
			width: 100%;
		}
		.menu > li{
			font-size: 1.5rem;
		}
		.sidebar{
			display: flex;
		}
	}
	@media all and (max-width: 315px) {
		.menu > li{
			font-size: 1.25rem;
		}
	}
</style>
