const tbl = $('order-summary');
const prices = {
  small: 700,
  medium: 900,
  large: 1100
}

$('form-pizza').submit(function(event){
  event.preventDefault();
  const fd = new FormData(this);
  const order = {
    size: fd.get('size'),
    flavor: fd.get('flavor'),
    crust: fd.get('crust'),
    quantity: fd.get('quantity'),
    cost:parseInt(prices[fd.get(size)]) * parseInt(prices[fd.get('quantity')])
  }
})