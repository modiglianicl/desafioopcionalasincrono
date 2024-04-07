
const obtenerDatos = async () => {
    urlApi = "https://jsonplaceholder.typicode.com/photos";

    try {
        const respuestaDatos = await fetch(urlApi);
        if (!respuestaDatos.ok) {
            throw new Error('No pude obtener los datos :(');
        }
        let leerDatos = await respuestaDatos.json();

        for (let i = 0 ; i < 20; i++) {
            let tituloAlbum = leerDatos[i].title;
            document.querySelector("#titulos-canciones").innerHTML += `<li>${tituloAlbum}</li>`
        }
    } catch(error) {
        console.error("algo paso",error)
    }
}

// Retornamos promesa con tres segundos de desfase
const infoEnviada = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
};

// Funcion que recibe el mensaje promesa, en caso de que el mensaje que no llegue (imposible) tiramos error
const mostrarMensaje = async () => {
    try {
        const mensaje = await infoEnviada();
        console.log(mensaje);
    } catch (error) {
        console.error("Error al obtener el mensaje:", error);
    }
};

// Funcion asincrona que llama a las demas funciones asincronas
async function main() {
    await obtenerDatos();
    await mostrarMensaje();
}

main();