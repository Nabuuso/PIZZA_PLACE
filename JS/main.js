










// $(document).ready(function() {
//     //form function to submit the users input, calculate total for the order, and prompt the user for some details
//       $("#text-center").submit(function(event) {
//         //functions to get user input from the forms
//         function flavor() {
//           var pizzaFlavour = document.getElementById("flavor").value;
//           return parseInt(pizzaFlavour);
//         }
//         function size() {
//           var pizzaSize = document.getElementById("size").value;
//           return parseInt(pizzaSize);
//         }
//         function crust() {
//           var pizzaCrust = document.getElementById("crust").value;
//           return parseInt(pizzaCrust);
//         }
//         function topping() {
//           var pizzaTopping = document.getElementById("topping").value;
//           return parseInt(pizzaTopping);
//         }
//         function number() {
//           var pizzaNumber = document.getElementById("quantity").value;
//           return parseInt(pizzaNumber);
//         }
    
//         //a constructor to create objects/instances of a user's orders
//         function Order(flavor, size, crust, topping, quantity) {
//           this.newFlavor = flavor;
//           this.newSize = size;
//           this.newCrust = crust;
//           this.newTopping = topping;
//           this.newQuantity = quantity;
//         }
    
//         //an object/instance (of the above constructor) to save the users order
//         var userInput = new Order(flavor(), size(), crust(), topping(), number());
    
//         //a variable to store the total expenditure of the user
//         var totalCost =
//           (userInput.newSize +
//             userInput.newCrust +
//             userInput.newTopping +
//             userInput.newFlavor) *
//           userInput.newQuantity;
    
//         //prompts for the user
//         alert("Your charges for Pizza" + totalCost);
//         prompt("enter your email address");
//         prompt("enter your phone number");
//         prompt("enter your location");
//         alert("Your pizza will be delivered");
    
//         //a method to reset the form after all operations have been completed
//         $("#text-center").reset();
    
//         event.preventDefault();
//       });
//     });









// // function finalCost(){
// //     var pizzaTopping = document.getElementById("pizza-topping").value;
// //     var crustType = document.getElementById("crust-type").value;
// //     var pizzaQuatity = document.getElementById("pizza-quantity").value;
// //     var deliveryMode = document.getElementById("delivery-mode").value;
// //     var placeOfDelivery = document.getElementById("place-of-delivery").value;

// //     var all_pizza_types = (parseInt(pizza-topping)*7) + (parseInt(crust)*3) + ((pizza-quantity)*2) + (parseInt(delivery-mode)*4) 
// //     + (parseInt(place-of-delivery)*3)
// //     document.getElementById("result").innerHTML = all_food;
// // }
// // function ok_result(){
// //     document.getElementById("okResult").style.display="block";
// //     document.getElementById("okResult").style.backgroundColor="#DCE775";
// //     document.getElementById("input_box").style.display="none";
// // }
// // function finalcost(Pepperoni, Salami_Pizza, Fruity_Veggy, PLenty_Cheese);{
// //     this.Pepperoni=Pepperoni
// //     this.price=1200;

// // function Food(name, price) {
// //     finalcost.call(this, Pepperoni, price);
// //     this.category = 'pizza';
// // }
      
// //     console.log(new Pizza('Pepperoni', 1).Pepperoni);
// //       // expected output: "cheese"


    
// // }

  