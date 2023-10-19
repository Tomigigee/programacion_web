const banderaElement = document.querySelector('.bandera');
const nombrePaisElement = document.querySelector('.nombre-pais');

axios.get('https://restcountries.com/v3.1/all')
    .then((respuesta) => {
        const paises = respuesta.data.map((pais) => {
            return {
                nombre: pais.name.common,
                bandera: `https://flagcdn.com/w320/${pais.cca2.toLowerCase()}.png`,
            };
        });

        // Función para actualizar la bandera y el nombre con un país aleatorio
        function actualizarPaisAleatorio() {
            const indiceAleatorio = Math.floor(Math.random() * paises.length);
            const paisAleatorio = paises[indiceAleatorio];
            banderaElement.src = paisAleatorio.bandera;
            nombrePaisElement.textContent = paisAleatorio.nombre;
        }

        // Llama a la función inicialmente y luego cada 3 segundos
        actualizarPaisAleatorio();
        setInterval(actualizarPaisAleatorio, 1000);
    })
    .catch((error) => {
        console.log(error);
    });
