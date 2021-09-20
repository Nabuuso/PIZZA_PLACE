$(document).ready(function(){
  $("#text-center").submit(function(event) {
        function flavor() {
          var pizzaFlavour = document.getElementById("flavor").value;
          return parseInt(pizzaFlavour);

        }
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
          }
          function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
          }

          //a constructor to create objects/instances of a user's orders
      function Order(flavor, size, crust, topping, quantity) {
      this.newFlavor = flavor;
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newQuantity = quantity;
    }
      
          var userInput = new Order(flavor(), size(), crust(), quantity());
      
          var totalCost =
            (userInput.newSize +
              userInput.newCrust +
              userInput.newFlavor)*
            userInput.newQuantity; 

            //prompts for the user
    alert("Your charges for Pizza" + totalCost);
    prompt("enter your email address");
    prompt("enter your phone number");
    prompt("enter your location");
    alert("Your pizza will be delivered");

    //a method to reset the form after all operations have been completed
    $("#text-center").reset();

    event.preventDefault();
  });
});
    