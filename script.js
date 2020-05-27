        var suits = ["dimoand","club","hearts","spades"];

        var values = [2,3,4,5,6,7,8,9,10,"J","K","Q","A"];

        function cards(suits,values){
            return {
                suits : suits,
                values : values
            }
        }

        var array = [];

        for(let i=0;i<suits.length;i++){
            for(let j=0;j<values.length;j++){
               
                array.push(cards(suits[i],values[j]));
            }
        }

        // console.log(array);

        //---------------------------------------------Shuffle cards function-------------------------------------------

        function shuffle(arr){

            for(let i=array.length-1;i>0;i--){
                var random = Math.floor(Math.random() * array.length);

                var temp = arr[i];

                arr[i] = arr[random];

                arr[random] = temp;
            }

            return arr;
        }
        shuffle(array);

        console.log(array);

        //------------------------------------------------PLAYER = 1-----------------------------------------------------

        // Picks random two cards from cards array for Player one 
        function pickPlyrOneCard(){

            var randomPick = Math.floor(Math.random() * array.length);
            var randomPick2 = Math.floor(Math.random() * array.length);

            var card1 = array[randomPick];
            var card2 = array[randomPick2];

            document.getElementById("content_p1c1").innerHTML = card1.values;
            document.getElementById("content_p1c2").innerHTML = card2.values;
            

            if(card1.values == "K" || card1.values == "J" || card1.values =="Q"){
                card1.values = 10;
            }else if(card1.values === "A"){
                    card1.values = 11;
            }
            if(card2.values == "K" || card2.values == "J" || card2.values =="Q"){
                    card2.values = 10;
            }else if(card2.values === "A"){
                    card2.values = 11;
            }

            var player1score = card1.values + card2.values;

                document.getElementById("player1score").innerHTML = player1score;

                if(player1score > 21){
                    document.getElementById("player1score").innerHTML = "Lost and the score is : " + player1score ;
                    $("#player1Hit").attr("disabled" , true);
                }
         
                 if(player1score === 21){
                    document.getElementById("player1score").innerHTML = "Black Jack and the score is : " + player1score;
                    $("#player1Hit").attr("disabled" , true);
                }
                          
                // Player 1 Hit button
                $("#player1Hit").on("click",function(){

                var randomPick3 = Math.floor(Math.random() * array.length);

                var cardn = array[randomPick3];

                if(cardn.values == "K" || cardn.values == "J" || cardn.values == "Q"){
                    cardn.values = 10;
                }else if(cardn.values == "A"){
                    cardn.values = 11;
                } 

                //------------ Player one UI ------------------//
                function player1UI(){

                    var mainDiv = document.getElementById("div");
                    var div = document.createElement("div");
                    div.setAttribute("class" , "card");

                    var p = document.createElement("p");
                    p.setAttribute("class" , "content");
                    p.textContent = cardn.values;

                    var imageArray = [
                        "images/heart.png",
                        "images/diamond.png",
                        "images/spades.png",
                        "images/club.png"
                    ];

                    var imageRandomNum = Math.floor(Math.random() * imageArray.length);
                    var randomImage = imageArray[imageRandomNum];
                    var images = document.createElement("img");
                    images.setAttribute("class","images");
                    images.src = randomImage;
                    
                    mainDiv.appendChild(div);
                    div.appendChild(p);
                    div.appendChild(images);
                }
                player1UI();

                 player1score += cardn.values;

                if(player1score > 21){
                    document.getElementById("player1score").innerHTML = "Lost and the score is : " + player1score ;
                    $("#player1Hit").attr("disabled" , true);
                }
                else{
                    document.getElementById("player1score").innerHTML = player1score;
                }

                 if(player1score === 21){
                    document.getElementById("player1score").innerHTML = "Black Jack and the score is : " + player1score;
                    $("#player1Hit").attr("disabled" , true);
                }
    
            });
    
        }

        //------------------------------------------------PLAYER = 2-----------------------------------------------------

        // Picks random two cards from cards array for Player two 
        function pickPlyrTwoCard(){

            var randomPick = Math.floor(Math.random() * array.length);
            var randomPick2 = Math.floor(Math.random() * array.length);

            var card1 = array[randomPick];
            var card2 = array[randomPick2];

            document.getElementById("content_p2c1").innerHTML = card1.values;
            document.getElementById("content_p2c2").innerHTML = card2.values;

            if(card1.values == "K" || card1.values == "J" || card1.values =="Q"){
                card1.values = 10;
            }else if(card1.values === "A"){
                    card1.values = 11;
            }

            if(card2.values == "K" || card2.values == "J" || card2.values =="Q"){
                    card2.values = 10;
            }else if(card2.values === "A"){
                    card2.values = 11;
            }

                var player2score = card1.values + card2.values;

                document.getElementById("player2score").innerHTML = player2score;

                if(player2score > 21){
                    document.getElementById("player2score").innerHTML = "Lost and the score is : " + player2score ;
                    $("#player2Hit").attr("disabled",true);
                }

                 if(player2score === 21){
                    document.getElementById("player2score").innerHTML = "Black Jack and the score is : " + player2score;
                    $("#player2Hit").attr("disabled",true);
                }
          

                // Player 2 Hit button
                $("#player2Hit").on("click",function(){
                    
                var randomPick3 = Math.floor(Math.random() * array.length);

                var cardn = array[randomPick3];

                if(cardn.values == "K" || cardn.values == "J" || cardn.values == "Q"){
                    cardn.values = 10;
                }else if(cardn.values == "A"){
                    cardn.values = 11;
                }

                function player2UI(){

                    var mainDiv = document.getElementById("div2");
                    var div = document.createElement("div");
                    div.setAttribute("class" , "card");

                    var p = document.createElement("p");
                    p.setAttribute("class" , "content");
                    p.textContent = cardn.values;

                    var imageArray = [
                        "images/heart.png",
                        "images/diamond.png",
                        "images/spades.png",
                        "images/club.png"
                    ];


                    var imageRandomNum = Math.floor(Math.random() * imageArray.length);
                    
                    var randomImage = imageArray[imageRandomNum];

                    var images = document.createElement("img");
                    images.setAttribute("class","images");
                    images.src = randomImage;
                    

                    mainDiv.appendChild(div);
                    div.appendChild(p);
                    div.appendChild(images);
                }
                player2UI();

                player2score += cardn.values;

               

                    if(player2score > 21){
                        document.getElementById("player2score").innerHTML = "lost and the score is : " + player2score ;
                        $("#player2Hit").attr("disabled",true);
                    }
                    else{
                        document.getElementById("player2score").innerHTML = player2score;
                    }

                    if(player2score === 21){
                        document.getElementById("player2score").innerHTML = "Black Jack and the score is : " + player2score;
                        $("#player2Hit").attr("disabled",true);
                    }
                    
                    var player1_Board = document.getElementById("player1score").innerText;
                    var player2_Board = document.getElementById("player2score").innerText;

                    // console.log(+player1_Board + +player2_Board);

                    if(+player2_Board > +player1_Board && +player2_Board < 22){
                        document.getElementById("player2score").innerHTML = "won and the score is : " + player2_Board;
                        $("#player2Hit").attr("disabled",true);
                    }
                    if(player1_Board === player2_Board){
                        alert("Game Tie");
                    }

            });

             
        };
       
        //----------------------------------------------------------------START BUTTON---------------------------------------------

        $("#button").on("click",function(){
            pickPlyrOneCard();
            pickPlyrTwoCard();
            $(".hit1").css({"display" : "block"});
            $(".player1").css({"left" : "10%"});
            $(".player2").css({"left" : "10%"});
            $(".player1_Board").css({"display" : "block"});
            $("#button").attr("disabled", true);
            $("#stand").attr("disabled", false);
            $("#hidden_card").css({"display" : "block"});
           
        })

     //------------------------------------------------------------------STAND-----------------------------------------------------

       $("#stand").on("click",function(){
            
            $(".hit1").css({"display" : "none"});
            $(".hit2").css({"display" : "block"});
            $("#hidden_card").css({"display" : "none"});
            $(".player2_Board").css({"display" : "block"});

            var player1_Board = document.getElementById("player1score").innerText;
            var player2_Board = document.getElementById("player2score").innerText;
            
            // console.log(+player1_Board + +player2_Board);

            if(+player2_Board > +player1_Board && +player2_Board < 22){
                document.getElementById("player2score").innerHTML = "won and the score is : " + player2_Board;
                $("#player2Hit").attr("disabled",true);
            }
            if(player1_Board === player2_Board){
                alert("Game Tie");
            }
            
        });

        //------------------------------------------------------------------RESET BUTTIN-----------------------------------------------------

        function reset(){
            window.location.reload(true);
        }
