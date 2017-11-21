$('document').ready(function(){
    
    //Canvas
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    document.getElementById('portfolioCover').width = window.innerWidth;
    document.getElementById('portfolioCover').height = window.innerHeight;
    var c = canvas.getContext('2d');
    
    var mouse = {
        x: undefined,
        y: undefined
    };
    window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    });
    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    var color = [
        'rgba(48, 66, 105, 0.7)',
        'rgba(145, 190, 212, 0.7)',
        'rgba(217, 232, 245, 0.7)',
        'rgba(255, 255, 255, 0.7)',
        'rgba(242, 97, 1, 0.7)',
        ];
    function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.maxRadius = radius + 10;
        var circleColor = color[Math.floor(Math.random() * color.length)];
        
        this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = circleColor;
            c.fill();
        };
        this.update = function(){
            if( this.x + this.radius > window.innerWidth || this.x - this.radius < 0 ){
                this.dx = -this.dx;
            }
            if( this.y + this.radius > window.innerHeight || this.y - this.radius < 0 ){
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
            
            //interactivity
            
            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if(this.radius < 50){
                    this.radius++;
                }
            }else if(this.radius > this.minRadius){
                    this.radius--;
                }
                
            
        };
    }
    
    var circleArray = [];
    for(var i = 0; i < Math.floor(window.innerWidth * window.innerHeight/1000); i++){
        var radius = Math.random() * 3 + 2;
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 3;
        var dy = (Math.random() - 0.5) * 3;
        
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        for(var i = 0; i < circleArray.length; i++){
            circleArray[i].update();
            
        }
        
    }
    animate();
    
    
});
