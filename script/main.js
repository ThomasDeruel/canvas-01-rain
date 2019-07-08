import Canvas from './canvas.js';


// initialisation of my canvas;
let canvas = new Canvas();
canvas.createBody();
let c = canvas.getContext();
let gouttes = [];
const whites = ['255,255,255','175,175,175','200,200,200','100,100,100','90,90,90'];
// starter
starter();

/**
 * FUNCTIONS
 */
function starter(){
    

c.clearRect(0,0,c.canvas.width,c.canvas.height);  
setInterval(function(){
    const color_index =  Math.round(Math.random()*5);
   
    const color = `rgba(${whites[color_index]}`;
    const x = Math.random()*window.innerWidth;
    const y = -40;
    gouttes.push({x,y,color});
    c.clearRect(0,0,c.canvas.width,c.canvas.height);
    for(let i = 0; i<gouttes.length;i++) {
        
        c.beginPath();
        const goutte = gouttes[i];
        c.fillStyle = goutte.color;
        c.arc(goutte.x,goutte.y,15,0,Math.PI*2, false);
        c.fill();
        const iteration = goutte.y+7;
        gouttes[i].y = iteration;

        if(goutte.y > window.innerHeight+20) {
            gouttes.splice(i, 1);
        }
    }
}


,1)

// resize
window.addEventListener('resize', ()=>{
    canvas.resize();
})
}
