$(document).ready(function(){
      $("#submit").submit(function(event) {
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

          function number() {
            var pizzaQuantity = document.getElementById("quantity").value;
            return parseInt(pizzaQuantity);
          }

          function order(flavor, size, crust, quantity){
            this.newFlavor = flavor;
            this.newSize = size;
            this.newCrust = crust;
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
          prompt("enter email");
          prompt("enter phone number");
          prompt("enter location");
          alert("Your pizza will be delivered soon");
      
          //a method to reset the form after all operations have been completed
          $("#text-center").reset();
      
          event.preventDefault();
        });
      });
    