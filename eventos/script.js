document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;


    const registro = {
        name: name,
        email: email,
        telephone: telephone
    };

    
    localStorage.setItem('registro', JSON.stringify(registro));

 
    console.log('Información guardada:', registro);

 
    alert('Información guardada en localStorage y mostrada en la consola');
});