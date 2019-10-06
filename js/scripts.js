$(document).ready(function(){

    //ripples
    $("header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6,
});
//magnific popup
$(".parent-container")

//BUSINESS LOGIC
function placeOrder(size, crust, toppings) {
    this.pzSize = size;
    this.crSize = crust;
    this.tpSize= toppings;
}
placeOrder.prototype.summary = function() {
    return "pizzasize: " + this.pzSize + ", crust:" + this.crSize + ", toppings:" + this.tpSize;
};
//USER INTERFACE
$("#sb").click(function() {
    $("#myForm").submit(function(event){
        event.preventDefault();
        var size = $('#sizeSelector').val();
        var crust = $('#crustSelector').val();
        console.log(size);
        var toppingsArr = [];
        $("input[type=checkbox]:checked").each(function() {
            toppingsArr.push($(this).val());
        });
        console.log(toppingsArr);
        var newOrder = new placeOrder(size, crust, toppingsArr);
        console.log(newOrder);
        $('#checksum').append("<li>" + newOrder.summary() + "</li>");

        var anotherTopping = 0;
        for (var i = 0; i < toppingsArr.length; i++) {
            anotherTopping += parseInt(toppingsArr[i]);
        }
        var finalTotal = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
        $("#total1").append("<p>"+finalTotal+"</p>");
        $('#checksum').append("<p>"+newOrder.size+ "</p>");
        $('#checksum').append("<p>"+newOrder.crust+ "</p>");
        $('#checksum').append("<p>"+newOrder.toppingsArr+ "</p>");
    });
    $('#img1').click(function() {
        alert("the delivery cost is 200");
        var loc = prompt("enter ur location");
        alert("your order will be delivered to" +" "+ loc);
    });

    }) 
   

});
//js function