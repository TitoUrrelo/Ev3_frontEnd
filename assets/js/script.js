function procesarformulario(evento) {
    evento.preventDefault() 
    const peso = document.getElementById('peso').value;
    const minutos = document.getElementById('minutos').value;
    const correr = document.getElementById('radioCorrer').checked;
    const resultado = document.getElementById('resultado');
    const errores = document.getElementById('errores');
    
    let met = 3.5;
    if (correr) {
        met += 4.5;
    }
    const calorias = met * 3.5 * peso * (minutos/200);

    errores.innerHTML = '';
    if (peso < 1) {
        errores.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> El peso debe ser mayor o igual a 1kg.
            <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        resultado.textContent = 'Esperando el cálculo ...';
        return
    }
    else if (peso > 120) {
        errores.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> El peso debe ser menor o igual a 120kg.
            <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        resultado.textContent = 'Esperando el cálculo ...';
        return;
    }
    else if (minutos < 5) {
        errores.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> El tiempo debe ser mayor o igual a 5 minutos.
            <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        resultado.textContent = 'Esperando el cálculo ...';
        return;
    }
    else if (minutos > 150) {
        errores.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> El tiempo no debe ser mayor o igual a 150 minutos.
            <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        resultado.textContent = 'Esperando el cálculo ...';
        return;
    }

    resultado.textContent = 'Tus calorias son: '+calorias.toFixed(2);
    };