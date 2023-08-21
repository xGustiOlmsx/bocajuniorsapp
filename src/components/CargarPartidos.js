function cargarPartidos() {
    const urlAPI = 'https://bocajuniorsapi-ca16.restdb.io/rest/partidosliga?apikey=64deaa47a3ea46a553978de5';
    const divResults = document.querySelector('#results');
    let contenidoHTML = '';
    fetch(urlAPI
    ).then(res => res.json())
      .then(datos => {
        console.log(datos);
        for (const partidosLiga of datos) {
          contenidoHTML += `
            <div class={styles.partidosLiga}>
                <p>fecha ${partidosLiga.fecha_liga}</p>
                <h1>${partidosLiga.fecha}</h1>
                <h2>${partidosLiga.hora}</h2>
                <img className={styles.results} src="${partidosLiga.escudo_local_url}"/>
                <h1>${partidosLiga.resultado_local}</h1>
                <h1>${partidosLiga.nombre_local}</h1>
                <img className={styles.results} src="${partidosLiga.escudo_visitante_url}"/>
                <h1>${partidosLiga.resultado_visitante}</h1>
                <h1>${partidosLiga.nombre_visitante}</h1>
            </div>`;
        }
        divResults.innerHTML = contenidoHTML;
      })
};

cargarPartidos()