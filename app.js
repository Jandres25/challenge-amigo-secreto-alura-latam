// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los amigos
let amigos = [];

// Función para verificar si un caracter es una letra
function esLetra(caracter) {
    // Lista de letras válidas incluyendo acentos
    const letrasValidas = 'abcdefghijklmnñopqrstuvwxyzáéíóúABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ ';
    return letrasValidas.includes(caracter);
}

// Función para verificar si un caracter es un número
function esNumero(caracter) {
    const numeros = '0123456789';
    return numeros.includes(caracter);
}

// Función para validar el nombre
function validarNombre(nombre) {
    // Verificar si está vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return false;
    }

    // Verificar longitud mínima
    if (nombre.length < 2) {
        alert('El nombre debe tener al menos 2 caracteres');
        return false;
    }

    // Verificar longitud máxima
    if (nombre.length > 30) {
        alert('El nombre no debe tener más de 30 caracteres');
        return false;
    }

    // Revisar cada caracter del nombre
    for (let i = 0; i < nombre.length; i++) {
        let caracter = nombre[i];

        // Verificar si hay números
        if (esNumero(caracter)) {
            alert('El nombre no debe contener números');
            return false;
        }

        // Verificar si son letras válidas
        if (!esLetra(caracter)) {
            alert('El nombre solo debe contener letras');
            return false;
        }
    }

    // Verificar si el nombre ya existe
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nombre.toLowerCase()) {
            alert('Este nombre ya está en la lista');
            return false;
        }
    }

    return true;
}

// Función para agregar un amigo
function agregarAmigo() {
    // Obtener el valor del input y quitar espacios al inicio y final
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar el nombre
    if (!validarNombre(nombre)) {
        return;
    }

    // Verificar límite de amigos
    if (amigos.length >= 20) {
        alert('Has alcanzado el límite máximo de amigos (20)');
        return;
    }

    // Limpiar el resultado anterior si existe
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Agregar el amigo al array
    amigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = '';

    // Actualizar la lista en el HTML
    mostrarAmigos();
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista actual
    lista.innerHTML = '';

    // Agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar que haya suficientes amigos
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo para realizar el sorteo');
        return;
    }

    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }

    // Obtener un número aleatorio entre 0 y el número de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
    resultado.appendChild(li);

    // Limpiar la lista
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}

// Permitir usar la tecla Enter para agregar amigos
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});