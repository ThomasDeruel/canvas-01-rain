export default class Point {
    canvas;
    ctx;
    size = 5;
    x;
    y
    constructor(x,y, fillStyle){
        // I call my canvas constructor;
        this.canvas = document.getElementById('main');
        this.ctx = this.canvas.getContext('2d');
        
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillRect(x,y,50,50);
        this.ctx.save();
    }

    setFillStyle(fillStyle){
        console.log(this.ctx)
        document.getElementById('main').getContext('2d').fillStyle = fillStyle;
    }
}