class DKRHexLoader {
    constructor(x , y, size, speed = 100, maskStyle = 'background: black;opacity: 0.4;filter: blur(8px);' ,color = '#fff') {
        this.size = size;
        this.color =  color;
        this.speed = speed;
        this.maskStyle = maskStyle;

        this.canvasElement = `<canvas class="dkr-hex-loader" style="position: fixed;z-index:99999;left:${x}px;top: ${y}px;"></canvas>`
        
        let defaultMaskStyle = `position: fixed; width: 100%; height: 100%;`;
        this.maskElement = `<div style="${defaultMaskStyle + this.maskStyle}"></div>`

        this.timeout = null;        
    }

    startLoader() {
        this.addCanvasToPage();
        this.triangle = new Triangle(this.canvas, this.context, this.size / 2, this.color);
        this.animate();
    }

    stopLoader() {
        this.removeCanvasFromPage();
    }

    animate() {
      
        this.timeout = setTimeout(() => {
          window.requestAnimationFrame(this.animate.bind(this))
        },this.speed);
        
        this.context.fillStyle = 'transparent';
        this.context.fillRect(0, 0, this.canvas.width,this.canvas.height);
     
  
        this.triangle.update();
      }
    

    addCanvasToPage() {
        this.adHTMLElementsToPage();

        this.canvas = document.querySelector(".dkr-hex-loader");
        this.context = this.canvas.getContext("2d");
       
        this.canvas.width = this.size;
        this.canvas.height = this.size;
    }

    adHTMLElementsToPage() {
        document.body.innerHTML = this.maskElement +  document.body.innerHTML;
        document.body.innerHTML += this.canvasElement;
    }

    removeCanvasFromPage() {
        const elements = document.getElementsByClassName('dkr-hex-loader');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        clearTimeout(this.timeout);
    }
    
}