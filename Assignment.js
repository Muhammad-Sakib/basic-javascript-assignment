// Function to convert feet to mile

function feetToMile(feet){
    if(feet < 0){
        console.log("distance can't be negative");
    }
    else{
        var mile = feet / 5280;
        // two decimal number after . point
        mile = parseFloat(mile).toFixed(2);
        return mile;
    }
}

        // Checking Output
        var result = feetToMile(10400);
        console.log(result);



// Function to find the total amount of wood to made a amount of chair, table and bed
function woodCalculator(chair,table,bed){
    if(chair < 0 || table < 0 || bed < 0){
        console.log("Amount can't be negative");
    }
    else{
        var totalAmountOfWood = chair*1 + table*3 + bed*5;
        return totalAmountOfWood;
    }
}

        // Checking Output
        var result = woodCalculator(2,1,1);
        console.log(result);



// Function to find the total amount of bricks to made a building
function brickCalculator(numOfFloor){
    const brickPerFeet = 1000;
    var totalAmountOfBricks=0;
          for(var floorNo=1; floorNo<=numOfFloor; floorNo++){
                if(floorNo<=10){
                    var j=0;
                    j++;
                    totalAmountOfBricks = totalAmountOfBricks + (j * (15 * brickPerFeet));
                 }
              else if(floorNo<=20){
                    var k=0;
                    k++;
                    totalAmountOfBricks = totalAmountOfBricks + (k * (12 * brickPerFeet));
              }
              else{
                    var l=0;
                    l++;
                    totalAmountOfBricks = totalAmountOfBricks + (l * (10 * brickPerFeet));
              }
            }
    return totalAmountOfBricks;
}

        // Checking Output
        var result = brickCalculator(37);
        console.log(result);




// Function to find the shortest name from my friend's name
function tinyFriend(friendsName){
    
    var shortestName = friendsName[0];
    
    for(var i=0 ; i<friendsName.length ; i++){
        
        if (shortestName.length > friendsName[i].length){
                shortestName = friendsName[i];
            }
    }
    return shortestName;
}

        // Checking Output
        var friendsName = ['rakib', 'akib', 'sakib', 'jhankar', 'mahbub'];

        var result = tinyFriend(friendsName);
        console.log(result);



