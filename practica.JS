function sumarDigitos(num) {
    while (num >= 10) { // Repite mientras el número tenga más de un dígito
      let suma = 0;
      while (num > 0) {
        suma += num % 10; // Suma el último dígito
        num = Math.floor(num / 10); // Elimina el último dígito
      }
      num = suma; 
    }
    return num;
  }
  
  let number = 243;
  let resultado = sumarDigitos(number)
  console.log(resultado);

const numero = 10
for(let i = 1; i <=numero; i++){
    let a = " "
    for(let j = 1; j<=i; j++){
     a = a + '-'
    }
    console.log(a)
    
}
for(i = numero - 1; i >=1; i--){
    let b =" "
    for(let j=i; j>=1; j--){||
     b = b + "-"
    }
    console.log(b)
}