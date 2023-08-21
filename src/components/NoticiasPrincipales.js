import React, { useRef, useEffect } from 'react';
import styles from '../css/NoticiasPrincipales.module.css'

function NoticiasPrincipales() {

    const miDivRef = useRef(null);

    useEffect(() => {
        // Manipular el contenido del div después del montaje
        if (miDivRef.current) {
          function cargarNoticias() {
            const urlAPI = 'https://bocajuniorsapi-ca16.restdb.io/rest/noticias?apikey=64deaa47a3ea46a553978de5';
            let contenidoHTML = '';
            fetch(urlAPI
            ).then(res => res.json())
              .then(datos => {
                console.log(datos);
                for (const noticias of datos.slice(datos.length-3)) {
                  contenidoHTML += `
                    <div style="background-image: url(${noticias.url_imgCompleta}); background-repeat: no-repeat;">
                      <h1>${noticias.titulo}</h1>
                    </div>
                    `;
                }
                miDivRef.current.innerHTML = contenidoHTML;
              })
          };
          
          cargarNoticias()
        }
      }, []);
    
      return <div ref={miDivRef} className={styles.section}></div>
}

export default NoticiasPrincipales