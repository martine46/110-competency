
function getCatalog(){

    $.ajax({
        url: "/catalog/GetCatalog",
        type:'GET',
        success: function(res){
            console.log("successful", res);
            for(var i=0; i< res.length; i++){
                var item = res[i];
                displayCar(item);
            }
        },
        error: function(error){
            console.log("Error", error);
        }
    
    });

}

function displayCar(car){
    var container = $("#catalogContainer");

    var template = `<div class= "col-4 item"> 

       <div class="row">
       <div class= "col-7"> <img src="${car.imageUrl}"> </div>

       <div class= "col-5"> 
           
            <label class="info-title">Make</label>
            <label class="info-value">${car.make}</label>
            <br>
            <label class="info-title">Model</label>
            <label class="info-value">${car.model}</label>
            <br>
            <label class="info-title">Year</label>
            <label class="info-value">${car.year}</label>
            <br>
            <label class="info-title">HP </label>
            <label class="info-value">${car.hp}</label>
            <br>
            <label class="info-title">Passengers </label>
            <label class="info-value">${car.passengerCapacity}</label>
            <br>
            <label class="info-title">Daily Price </label>
            <label class="info-value">${car.dailyPrice}</label>
            <br>
            <label class="info-title">In Stock </label>
            <label class="info-value">${car.stock}</label>
            <br>
       </div>
       </div>
       
       <div class="row">
       <div class= "col-12"> 
       <label class="info-title">Description </label>
       <p>${car.description}</p> 
       </div>
       </div>




    </div>`

    container.append(template);

}



function init(){
    console.log("Catalog page");

    getCatalog();
}


window.onload = init;