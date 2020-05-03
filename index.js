const container = document.querySelector('.container');

const square = document.createElement('div');
square.classList.add('square');

container.appendChild(square);


    //Clears out the Trailmode choice and the squares in the container.
    const Refresh = document.querySelector('.refreshButton');
    Refresh.addEventListener("click",function() {
        location.reload();


    });

 

        let blackButton =document.querySelector(".blackButton");
        //Prompts the amount of squares the user wants,when the user puts an valid
        //value the squares will be created and be painted w black color.
        blackButton.addEventListener("click",function() {
            let userSquareAmount=prompt("How many squares per side you want?" )**2;
            console.log(userSquareAmount)

                
                if(isNaN(userSquareAmount) || userSquareAmount==0){
                    
                    console.log(userSquareAmount)
                    alert(userSquareAmount+" "+"is not an acceptable input.Please try again.")
                    console.log("if")

                }
                else{
                    let blackButton=true;
                    let randomColorButton=false;
                    let gradualBlackButton=false;

                    console.log(userSquareAmount)
                    alert(userSquareAmount);

                    massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton);
                    console.log("else")

                }

        });

        let randomColorButton =document.querySelector(".randomColorButton");
        randomColorButton.addEventListener("click",function() {
            let userSquareAmount=prompt("How many squares per side you want?" )**2;

            if(isNaN(userSquareAmount) || userSquareAmount==0){
                    
                console.log(userSquareAmount)
                alert(userSquareAmount+" "+"is not an acceptable input.Please try again.")
                console.log("if")

            }
            else{
                let blackButton=false;
                let randomColorButton=true;
                let gradualBlackButton=false;

                console.log(userSquareAmount)
                alert(userSquareAmount);

                massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton);
                console.log("else")

            }
        });
        
        let gradualBlackButton =document.querySelector(".gradualBlackButton");
        gradualBlackButton.addEventListener("click",function() {
            let userSquareAmount=prompt("How many squares per side you want?" )**2;

            if(isNaN(userSquareAmount) || userSquareAmount==0){
                    
                console.log(userSquareAmount)
                alert(userSquareAmount+" "+"is not an acceptable input.Please try again.")
                console.log("if")

            }
            else{
                let blackButton=false;
                let randomColorButton=false;
                let gradualBlackButton=true;

                console.log(userSquareAmount)
                alert(userSquareAmount);

                massSquareProduction(userSquareAmount,blackButton,randomColorButton,gradualBlackButton);
                console.log("else")

            }

        });

        
        
    


        //Produces a certain amount of squares in the container 
        //dependent on the usersquareamount.
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
    //Allows the user to only select one out of three trailmodes.
    function trailModeSelector(blackButton,randomColorButton,square,gradualBlackButton){
        //Black color mode
        if(blackButton==true && randomColorButton==false && gradualBlackButton==false){
            square.addEventListener("mouseenter",function(){

                square.classList.add("squareColored");
                square.classList.remove("square");


                
            });
            console.log("");
        }
        //Random color mode
        else if(randomColorButton==true &&blackButton==false && gradualBlackButton==false){
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
        else if(gradualBlackButton==true && blackButton==false && randomColorButton==false){

            square.addEventListener("mouseenter",function(){
                sketchySketch(square); 
                    
    
            });
        }
                        //Function to add 10% more black each mouseover
                        function sketchySketch (square) {
                            let opacity = Number(square.style.opacity);
                            square.style.opacity = opacity += 0.1;
                            square.style.backgroundColor = '#000';
                            square.style.transition = 'background-color 0.25s';

                        
                    
            console.log("");
        }

    }

    //Calculates how long the individual sides of the square is going to be 
    //and putting the result in the squares width and height
    function mathSquareWidth(userSquareAmount,square) {
        let squareSize= (256/userSquareAmount)* Math.sqrt(userSquareAmount);
        square.style.width=squareSize;
        square.style.height=squareSize;
        


    }

