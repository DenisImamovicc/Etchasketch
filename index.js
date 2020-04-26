const container = document.querySelector('.container');

const square = document.createElement('div');
square.classList.add('square');

container.appendChild(square);


const Refresh = document.querySelector('.refreshButton');

    Refresh.addEventListener("click",function() {
        location.reload();


    });

    function requestUserSquareAmount(){ 
                let userSquareAmount=prompt("How many squares per side you want?" )**2;
                alert(userSquareAmount);
                massSquareProduction(userSquareAmount);

        
        
    }



    function massSquareProduction(userSquareAmount,squareSize) {
        for (i = 0; i < userSquareAmount; i++) {
                const container = document.querySelector('.container');
                const square = document.createElement('div');
                
                let squareSize= (256/userSquareAmount)* Math.sqrt(userSquareAmount);
                square.style.width=squareSize;
                square.style.height=squareSize;

                square.classList.add('square');
                container.appendChild(square);                

                square.addEventListener("mouseenter",function(){

                    square.classList.add("squareColored");
                    square.classList.remove("square");


                    
                });


        }
            
                
    }



    function mathSquareWidth(userSquareAmount) {
        let squareSize= (256/userSquareAmount)* Math.sqrt(userSquareAmount);

        console.log(squareSize);
        square.style.width=squareSize;
        square.style.height=squareSize;
        


    }

    requestUserSquareAmount();
