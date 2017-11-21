$('document').ready(function(){
   var canvas = document.getElementById('canvas');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   
   var c = canvas.getContext('2d');
   
   var color = [
        'rgba(48, 66, 105, 0.7)',
        'rgba(145, 190, 212, 0.7)',
        'rgba(217, 232, 245, 0.7)',
        'rgba(255, 255, 255, 0.7)',
        'rgba(242, 97, 1, 0.7)',
        ];
        
   var mouse = {
        x: undefined,
        y: undefined
    };
    window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    });
    
    window.addEventListener('click',
    function(){
       
    });
   
   
   
   function Circle(x, y, radius){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = Math.random() / 50;
      this.a = {
         x: Math.random() * 100 + (window.innerWidth / 2 - 50),
         y: Math.random() * 100 + (window.innerHeight / 2 - 50)
      };
      this.minRadius = this.radius;
      var circleColor = color[Math.floor(Math.random() * color.length)];
      
      this.draw = function(){
         c.beginPath();
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
         c.fillStyle = circleColor;
         c.fill();
         c.closePath();
      };
      this.update = function(){
         this.radians += this.velocity;
         this.x = x + Math.cos(this.radians) * this.a.x;
         this.y = y + Math.sin(this.radians) * this.a.y;
         this.draw();
         
         //interactive
         
         if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if(this.radius < 50){
                    this.radius += 2;
                }
            }else if(this.radius > this.minRadius){
                    this.radius--;
                }
      };
         
   }
   
   let circleArray;
   function init(){
      circleArray = [];
      for(var i = 0; i < window.innerWidth * window.innerHeight / 1200; i++){
         var x = Math.random() * window.innerWidth;
         var y = Math.random() * window.innerHeight;
         var radius = Math.random() * 3 + 2;
         circleArray.push(new Circle(window.innerWidth, window.innerHeight / 2, radius));
      }
   }
   // var rect = {
   //    width: window.innerWidth / 4,
   //    height: window.innerHeight / 3
   // }
   function animate(){
       requestAnimationFrame(animate);
       c.clearRect(0, 0, window.innerWidth, window.innerHeight);
       
       for(var i = 0; i < circleArray.length; i++){
            circleArray[i].update();
        }
         // c.rect(window.innerWidth - rect.width, 0, rect.width, rect.height);
         // c.fillStyle = 'rgba(255, 255, 255, 0.5';
         // c.fill();
   }
   
   
   
   init();
   animate();
   
   
   // Project Gallery
   $('#projectPanel').hide();
   var projectPic = [
      "url('theHandmaidsTale.png')",
      "url('imperialism.png')",
      "url('game.png')"
   ];
   var a = 0;
   $('#projectTop').css('background-image',projectPic[a]);
   $('#projectMid').css('background-image',projectPic[a+1]);
   $('#projectBot').css('background-image',projectPic[a+2]);
   
   var z = 0;
   $('#projectTop').click(function(){
      z = 0;
      project();
   });
   $('#projectMid').click(function(){
      z = 1;
      project();
   });
   $('#projectBot').click(function(){
      z = 2;
      project();
   })
   $('#close').click(function(){
      $('#projectPanel').hide();
   });
   function project(){
   $('#projectPanel').show();
   
   if(z === 0){
      $('#liveSite').click(function(){
         window.location.href = "https://preview.c9users.io/whatismyusername/handmaid/handmaid.html";
      });
      $('#source').click(function(){
         window.location.href = "https://github.com/Whatismyusername/Handmaids-Tale";
      });
      $('#projectViewer').css('background-image',projectPic[a]);
   }
   if(z === 1){
      $('#liveSite').click(function(){
         window.location.href = "https://preview.c9users.io/whatismyusername/imperialism/HomePage.html";
      });
      $('#source').click(function(){
         window.location.href = "https://github.com/Whatismyusername/socialStudies-imperialism";
      });
      $('#projectViewer').css('background-image',projectPic[a+1]);
   }
   if(z === 2){
         $('#liveSite').click(function(){
            window.location.href = "https://preview.c9users.io/whatismyusername/decay/GameHome.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io";
         });
         $('#source').click(function(){
            window.location.href = "https://github.com/Whatismyusername/mathProject-decay";
         });
         $('#projectViewer').css('background-image',projectPic[a+2]);
      }
   }
});

