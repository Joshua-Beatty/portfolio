<script lang="ts">
    import Project from "./Project.svelte";
</script>
<div class="main" >
    <Project title="Prism Calculator" images={[{src:"/img/prism2.webp", alt:"Screenshot of the rectangular prism calculator app"},{src:"/img/prism3.webp", alt:"Screenshot of the rectangular prism calculator app"}]}>
        Prism calculator is a multi-function geometric calculator. Programmed in javascript using the Tabris framework,
        the app has a native feel on both Android and Ios. With well over 500 downloads across both platforms, this app
        has been a success. It utilizes javascript with node.js and the big decimal library for arbitrary precision. This
        was just a first step into using Tabris, making use of multiple input types as well as a status bar and multiple
        pages with variable recollection.<br><br>
        <a href="https://apps.apple.com/us/app/prism-calculator/id1516939934?platform=iphone" target="_blank">Download On The Appstore</a><br>
        <a href="https://play.google.com/store/apps/details?id=me.joshbeatty.PrismCalc" target="_blank">Get It On Google Play</a><br>
        <a href="https://github.com/Joshua-Beatty/Rectangular-Prism-Calculator-Tabris" target="_blank">View the source on GitHub</a>
    </Project>
    <Project title="Excalibur FitScreenAndFill" images={[{src:"/img/fitscreen.webp", alt:"Screenshot of the recolor app"}]}>
        <a href="https://excaliburjs.com/" target="_blank">Excalibur</a> is a free open source 2D game engine written in TypeScript for the web written in TypeScript for making 2D games in HTML5 canvas.
        <a href="https://github.com/excaliburjs/Excalibur/pull/2272#issuecomment-1126034795" target="_blank">FitScreenAndFill is a pull request</a> I submitted and was merged in that adds two new types of display modes for the game world. FitScreenAndFill
        ensures that specific area of the screen will always be visible, and as zoomed in as possible, but will also allow the rest of the screen to still
        be visible and usable. This ensures a good game space with no black bars or letterboxing.
    </Project>
    <Project title="Recolor" imageRatio={50} images={[{src:"/img/recolorTitle.webp", alt:"Screenshot of the recolor app"}, {src:"/img/recolor.webp", alt:"Screenshot of the recolor app"}, {src:"/img/recolorHard.webp", alt:"Screenshot of the recolor app"}]}>
        Recolor is a simple Simon like memory game developed in Corona SDK. Corona is a cross-platform language build on top of Lua.
        Using this framework I was able to build a simple game that I have published to both the google play, and apple app store,
        to positive reception.<br><br>
        <a href="https://apps.apple.com/us/app/recolor-the-memory-game/id1488708329?platform=iphone" target="_blank">Download On The Appstore</a><br>
        <a href="https://play.google.com/store/apps/details?id=tk.joshbeatty.recolor" target="_blank">Get It On Google Play</a><br>
        <a href="https://github.com/Joshua-Beatty/Recolor" target="_blank">View the source on GitHub</a>
    </Project>
    <div style="height:2rem"></div>
</div>
<style>
    .main {
        width: 100%;
        display: grid;
        place-items: center
    }
</style>