import React, { useRef, useEffect } from 'react';
import styles from '../css/noticias.module.css'

const Noticias = () => {

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
            for (const noticias of datos) {
              contenidoHTML += `
                <div>
                    <img src="${noticias.url_img}"/>
                    <h2>${noticias.titulo}</h2>
                    <p><strong>${noticias.descripcion}</strong></p>
                </div>`;
            }
            miDivRef.current.innerHTML = contenidoHTML;
          })
      };
      
      cargarNoticias()
    }
  }, []);

  return <div ref={miDivRef} className={styles.container}></div>
}

export default Noticias