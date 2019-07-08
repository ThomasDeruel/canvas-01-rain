export default class Canvas {
    //canvas
    canvas;
    // context
    width;
    height;
    ctx;
    createBody() {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute("id",'main');
        this.canvas.setAttribute("width", window.innerWidth);
        this.canvas.setAttribute("height",window.innerHeight);
        this.canvas.setAttribute("style", 'border:1px solid black');
        document.body.appendChild(this.canvas);

        this.ctx =  this.canvas.getContext('2d');
    }
    getContext(){
        return this.ctx;
    }
    getWidth(){
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    resize(){
        this.canvas.setAttribute("width", window.innerWidth);
        this.canvas.setAttribute("height", window.innerHeight);
    }
}