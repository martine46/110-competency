
function register(){
    console.log("registered car");

    var dailyPrice = $("#txtPrice").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var passengerCapacity = $("#txtPassengerCapacity").val();   
    var HP = $("#txtHP").val();
    var stock = $("#txtStock").val();
    var description = $("#txtDescription").val();
    var imageUrl = $("#txtImageUrl").val();

    if(!year || isNaN(year)){
        errorOcurred = true;
        $("#txtYear").addClass("error");
    }
    else{
        //year=year *1;
        year=parseInt(year);
        $("#txtYear").removeClass("error");
    }

    if(!dailyPrice || isNaN (dailyPrice)){
        errorOcurred = true;
        $("#txtPrice").addClass("error");
    }
    else{
        dailyPrice = parseFloat(dailyPrice);
        $("#txtPrice").removeClass("error");
    }

    var car = {
        dailyPrice:dailyPrice,
        make:make,
        model:model,
        year:year,
        passengerCapacity:passengerCapacity,
        HP:HP,
        stock:stock,
        description:description,
        imageUrl:imageUrl
    };

    console.log(car);

    $.ajax({
        url: "/catalog/saveCar",
        type:'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success: function(res){
            console.log("successful", res);
        },
        error: function(error){
            console.log("Error", error);
        }
    
    });

}

function init(){
    console.log("Register page");

    $("#btnSave").click(register);

}

window.onload = init;