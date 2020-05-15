let sun = document.getElementById('sun')
let planetsNumber = 0;
const x0 = 450, y0=250;
class planet{
    constructor(orditRadius, angularVelocity, startAngular, color){
        this.orditRadius = orditRadius;
        this.angularVelocity = angularVelocity;
        this.startAngular = startAngular;
        this.color = color;
        document.write(`<div class="planet", id="planet${planetsNumber}"></div>`);
        this.div = document.getElementById(`planet${planetsNumber}`);
        document.write(`<div class="ordit", id="ordit${planetsNumber}"><br><br><br></div>`)
        this.orbit = document.getElementById(`ordit${planetsNumber}`);
        this.orbit.top = 250 - this.orditRadius;
        this.orbit.left = 450 - this.orditRadius;
        this.orbit.hw = this.orditRadius * 2;
        this.orbit.style = `
        position: fixed; 
        top:${this.orbit.top}px; 
        left:${this.orbit.left}px; 
        border-radius:${this.orditRadius}px; 
        height:${this.orbit.hw}px; 
        width:${this.orbit.hw}px; 
        border-style: dotted; 
        border-color: white; 
        border-width: 1px;`
        planetsNumber += 1;
        //this.div.style = `background-color: ${this.color};`;
    }
    showOrbit(){
        this.orbit.hidden = false;
    }
    hideOrdit(){
        this.orbit.hidden = true;
    }
    x = 0
    y = 0
    move(t){
        this.y = Math.sin(t * this.angularVelocity + this.startAngular)*this.orditRadius + y0 - 10;
        this.x = Math.cos(t * this.angularVelocity + this.startAngular)*this.orditRadius + x0 - 10;
        this.div.style=`top:${this.y}px; left:${this.x}px; background-color: ${this.color}`;
    }
}

let planets = [                 //行星列表。
    new planet(100,0.3,0,'rgb(255, 200, 145)'),
    new planet(130,0.18,1,'rgb(255, 245, 187)'),
    new planet(180,0.08,5, 'rgb(225, 255, 159)'),
    new planet(250,0.06,3,'rgb(77, 231, 255)'),
    new planet(320,0.04,2.8,'rgb(36, 121, 255)')
]
// let planets = document.getElementsByClassName('planet');
// const planetsNumber = planets.length;
// planets[0].showOrbit();



var t = 0;
function run(){
    for (var i in planets){
        planets[i].move(t);
    }
    t += 0.05/Math.PI;
}

function showAllOrdit(){
    for (var i in planets){
        planets[i].showOrbit();
    }
}

function hideAllOrdit(){
    for (var i in planets){
        planets[i].hideOrdit();
    }
}

// hideAllOrdit()
setInterval(run,1);