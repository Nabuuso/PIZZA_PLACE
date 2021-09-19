<script>
function finalCost(){
    var foodItem = document.getElementById("pizza-topping").value;
    var specialItemm = document.getElementById("crust").value;
    var foodQuatity = document.getElementById("pizza-quantity").value;
    var deliveryType = document.getElementById("delivery-mode").value;
    var deliveryArea = document.getElementById("place-of-delivery").value;

    var all_food = (parseInt(pizza-topping)*7) + (parseInt(crust)*3) + ((pizza-quantity)*2) + (parseInt(delivery-mode)*4) 
    + (parseInt(place-of-delivery)*3)
    document.getElementById("result").innerHTML = all_food;
}
function ok_result(){
    document.getElementById("okResult").style.display="block";
    document.getElementById("okResult").style.backgroundColor="#DCE775";
    document.getElementById("input_box").style.display="none";
}
</script>