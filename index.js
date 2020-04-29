const container = document.querySelector('.container');

const square = document.createElement('div');
square.classList.add('square');

container.appendChild(square);

//let randomColorButton =document.querySelector(".randomColorButton");
// let randomColorButton=true;
// let gradualBlackButton =document.querySelector(".gradualBlackButton");



    const Refresh = document.querySelector('.refreshButton');
    Refresh.addEventListener("click",function() {
        location.reload();


    });

 

        let blackButton =document.querySelector(".blackButton");
        blackButton.addEventListener("click",function() {
            let userSquareAmount=prompt("How many squares per side you want?" )**2;
            alert(userSquareAmount);
            let blackButton=true;
            let randomColorButton=false;
            massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton);



        });

        let randomColorButton =document.querySelector(".randomColorButton");
        randomColorButton.addEventListener("click",function() {
            let userSquareAmount=prompt("How many squares per side you want?" )**2;
            alert(userSquareAmount);
            let blackButton=false;
            let randomColorButton=true;
            massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton);



        });

        let gradualBlackButton =document.querySelector(".gradualBlackButton");
        gradualBlackButton.addEventListener("click",function() {
            let userSquareAmount=prompt("How many squares per side you want?" )**2;
            alert(userSquareAmount);
            let blackButton=false;
            let randomColorButton=false;
            let gradualBlackButton=true;
            massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton);



        });

        
        
    



    function massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton) {
        for (i = 0; i < userSquareAmount; i++) {
                let container = document.querySelector('.container');
                let square = document.createElement('div');
                
                trailModeSelector(blackButton,randomColorButton,square,gradualBlackButton);
                mathSquareWidth(userSquareAmount,square);

                square.classList.add('square');
                container.appendChild(square);     
                
        }
            
                
    }
    function trailModeSelector(blackButton,randomColorButton,square,gradualBlackButton){
        if(blackButton==true){
            square.addEventListener("mouseenter",function(){

                square.classList.add("squareColored");
                square.classList.remove("square");


                
            });
            console.log("");
        }
        else if(randomColorButton==true){
            square.addEventListener("mouseenter",function(){

                function random_bg_color() {
                    let x = Math.floor(Math.random() * 256);
                    let y = Math.floor(Math.random() * 256);
                    let z = Math.floor(Math.random() * 256);
                    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                 console.log(bgColor);
                  
                    square.style.background = bgColor;
                    }
                
                random_bg_color(); 
                
                square.classList.add("squareColored");
                square.classList.remove("square");

                
            });
            console.log("");
        }
        else if(gradualBlackButton==true){
            square.addEventListener("mouseenter",function(){
               for (i = 9; i > 0; i--) {
                r_b_gradual_color(); 
                    


                }

                        function r_b_gradual_color() {
                            let r = 256*(9*0.1);
                            let g = 256*(9*0.1);
                            let b = 256*(9*0.1);
                            let bgColor = "rgb(" + r + "," + g + "," + b + ")";
                            
                            console.log(bgColor);
                            square.style.background = bgColor;
                            
                            square.classList.add("squareColored");
                            square.classList.remove("square");
                        }
                    
            });
            console.log("");
        }

    }


    function mathSquareWidth(userSquareAmount,square) {
        let squareSize= (256/userSquareAmount)* Math.sqrt(userSquareAmount);
        square.style.width=squareSize;
        square.style.height=squareSize;
        


    }

