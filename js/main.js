let input_field = document.querySelector('input#input');
let button =  document.querySelector('button#button');
let output_container =  document.querySelector('div#output_container');

let compute =  function(input){
    let brokenPrice = (input.split('')).reverse();
    let finalPriceArray = [];
    let count = 0;

    brokenPrice.forEach(number => {
        count++;
        finalPriceArray.push(number);

        if(((count % 3) == 0) && count != 0 && count != brokenPrice.length){
            finalPriceArray.push(',');
        }
    });

    return finalPriceArray.reverse().join('');  
}

button.addEventListener('click', function(e){
    e.preventDefault();
    if(input_field.value.length == 0){
        alert('Please input your value');
    }else{
        let seperated_value = compute(input_field.value);
        output_container.innerText = seperated_value;
    }
});





