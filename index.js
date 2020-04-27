const container = document.querySelector('.container');

const square = document.createElement('div');
square.classList.add('square');

container.appendChild(square);

//let blackButton =document.querySelector(".blackButton");
let blackButton=false;
//let randomColorButton =document.querySelector(".randomColorButton");
let randomColorButton=true;
let gradualBlackButton =document.querySelector(".gradualBlackButton");



const Refresh = document.querySelector('.refreshButton');

    Refresh.addEventListener("click",function() {
        location.reload();


    });

    function requestUserSquareAmount(){ 
                let userSquareAmount=prompt("How many squares per side you want?" )**2;
                alert(userSquareAmount);
                massSquareProduction(userSquareAmount);

        
        
    }



    function massSquareProduction(userSquareAmount) {
        for (i = 0; i < userSquareAmount; i++) {
                const container = document.querySelector('.container');
                const square = document.createElement('div');
                
                let squareSize= (256/userSquareAmount)* Math.sqrt(userSquareAmount);
                square.style.width=squareSize;
                square.style.height=squareSize;

                square.classList.add('square');
                container.appendChild(square);     
                
                
            if(blackButton==true){
                square.addEventListener("mouseenter",function(){

                    square.classList.add("squareColored");
                    square.classList.remove("square");


                    
                });
                console.log("gayyyy");
            }
            else if(randomColorButton==true){
                square.addEventListener("mouseenter",function(){

                    function random_bg_color() {
                        var x = Math.floor(Math.random() * 256);
                        var y = Math.floor(Math.random() * 256);
                        var z = Math.floor(Math.random() * 256);
                        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                     console.log(bgColor);
                      
                        square.style.background = bgColor;
                        }
                    
                    random_bg_color(); 
                    
                    square.classList.add("squareColored");
                    square.classList.remove("square");

                    
                });
                console.log("gayyyyer");
            }


        }
            
                
    }



    function mathSquareWidth(userSquareAmount) {
        let squareSize= (256/userSquareAmount)* Math.sqrt(userSquareAmount);

      square.style.width=squareSize;
        square.style.height=squareSize;
        


    }

    requestUserSquareAmount();
