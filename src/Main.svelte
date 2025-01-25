<div class="main" >
    <div class="card">
        <div class="bio">
            <h1 class="mainTitle">Joshua <span class="blueText">Beatty</span></h1>
            <h2 class="mainSubitle"><div>Salt Lake, UT 84115 · <a href="mailto:name@email.com">Joshuatb6@gmail.com</a></div></h2>
            <p>I am a Developer at Pearagon, a HubSpot Diamond Partner. I work with a small team to build complex, solution-oriented business automation and applications. I've built many different custom integrations and custom RESTful APIs for customer portals. I am also a HubSpot Community Champion and a top HubSpot developer. I am proficient in TypeScript, JavaScript, C#, and Java. Currently, I am studying computer science at the University of Utah in addition to working at Pearagon.</p>
            <img class="mainPhoto" src="/img/me.jpeg" alt="Me Joshua Beatty">
        </div>
    </div>
</div>

<style>
    .main {
        width: 100%;
        display: grid;
        place-items: center;
        height: 100%;
    }
    .card{
        padding: 1em;
        height: fit-content;
        width: 30%;
        min-height: 315px;
        min-width: 675px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 15px;
    }
    .mainTitle{
		font-family: 'Saira Extra Condensed', sans-serif;
        font-size: 6rem;
        line-height: 5.5rem;
        text-transform: uppercase;
        margin: 0.1em 0 0.1em 0;
    }
    .mainSubitle{
		font-family: 'Saira Extra Condensed', sans-serif;
        font-size: 1.4em;
        font-weight: 400;
        margin-top: -0.75em;
        color: #868e96
    }
    .blueText{
        color: #3891bd;
    }
    
    .bio {
        position: relative;
    }
    .mainPhoto {
        height: 10rem;
        width: 10rem;
        object-fit: cover;
        border-radius: 40%;
        border-color: #60a7ca;
        border-style: solid;
        border-width: 0.5rem;
        margin: auto;
        position: absolute;
        top: -5rem;
        right: 1rem;
    }
    @media all and (max-width: 750px) {
    
        .card{
            min-width: 80%;
            margin-top: 10rem;
            padding-top: 3rem;
            margin-bottom: 2rem;
        }
        .mainPhoto {
            top: -12rem;
            right: calc(50% - 5rem);
        }
        .main {
            height: fit-content;
        }
    }
    @media all and (max-width: 400px) {
        .card{
            margin-top: 12rem;
        }
    }
</style>
