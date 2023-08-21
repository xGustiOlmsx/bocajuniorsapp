import React, { useRef, useEffect } from 'react';
import styles from '../css/ligaYCopasResults.module.css'


function CopaArgentinaResults() {
  const miDivRef = useRef(null);

  useEffect(() => {
    // Manipular el contenido del div después del montaje
    if (miDivRef.current) {
      function cargarPartidos() {
        const urlAPI = 'https://bocajuniorsapi-ca16.restdb.io/rest/partidoscopaargentina?apikey=64deaa47a3ea46a553978de5';
        let contenidoHTML = '';
        fetch(urlAPI
        ).then(res => res.json())
          .then(datos => {
            console.log(datos);
            for (const partidosCopaArg of datos) {
              contenidoHTML += `
                <div>
                    <p>fecha ${partidosCopaArg.fecha_copaArg}</p>
                    <h1>${partidosCopaArg.fecha}</h1>
                    <h2>${partidosCopaArg.hora}</h2>
                    <img className={styles.results} src="${partidosCopaArg.url_escudo_local}"/>
                    <h1>${partidosCopaArg.resultado_local}</h1>
                    <h1>${partidosCopaArg.nombre_local}</h1>
                    <img className={styles.results} src="${partidosCopaArg.url_escudo_visitante}"/>
                    <h1>${partidosCopaArg.resultado_visitante}</h1>
                    <h1>${partidosCopaArg.nombre_visitante}</h1>
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

export default CopaArgentinaResults