import React, { useRef, useEffect } from 'react';
import styles from '../css/ligaYCopasResults.module.css'

function LigaResults() {
  
  const miDivRef = useRef(null);

  useEffect(() => {
    // Manipular el contenido del div después del montaje
    if (miDivRef.current) {
      function cargarPartidos() {
        const urlAPI = 'https://bocajuniorsapi-ca16.restdb.io/rest/partidosliga?apikey=64deaa47a3ea46a553978de5';
        let contenidoHTML = '';
        fetch(urlAPI
        ).then(res => res.json())
          .then(datos => {
            console.log(datos);
            for (const partidosLiga of datos) {
              contenidoHTML += `
                <div>
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
            miDivRef.current.innerHTML = contenidoHTML;
          })
      };
      
      cargarPartidos()
    }
  }, []);

  return <div ref={miDivRef} className={styles.results}></div>
}


export default LigaResults;
