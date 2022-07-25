<div class="main" >
    <div class="card">
        <div class="bio">
            <h1 class="mainTitle">Joshua <span class="blueText">Beatty</span></h1>
            <h3 class="mainSubitle"><div>Salt Lake, UT 84115 · <a href="mailto:name@email.com">Joshuatb6@gmail.com</a></div></h3>
            <p>Hi! I'm Josh Beatty and I am a sophmore at the University of Utah majoring in computer science. Engineering wise, my current focus is on software development. In my free time, I spend a lot of time creating digitally. I've created apps, websites, games, and tools. I am proficient in Python, C#, and Lua but have also worked in JavaScript and Java. I have also participated in many different clubs and extracurricular activities including Boy Scouts, Robotics, and the California Scholarship Federation.</p>
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
