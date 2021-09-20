$(document).ready(function() {
    //form function to submit the users input, calculate total for the order, and prompt the user for some details
      $("#text-center").submit(function(event) {
        //functions to get user input from the forms
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
      
          //a constructor to create objects/instances of a user's orders
          function Order(flavor, size, crust, quantity);{
            this.newFlavor = flavor;
            this.newSize = size;
            this.newCrust = crust;
            this.newQuantity = quantity;
          }
      
          //an object/instance (of the above constructor) to save the users order
          var userInput = new Order(flavor(), size(), crust(), quantity());
      
          //a variable to store the total expenditure of the user
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
    