import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LigaResults from './LigaResults';
import CopaLibertadoresResults from './CopaLibertadoresResults';
import CopaArgentinaResults from './CopaArgentinaResults'
import styles from '../css/resultados.module.css'

function Resultados() {
  return (
    <Router>
      <div className={styles.navResultados}>
        <nav>
          <ul>
            <li>
              <Link className={styles.link} to="/liga">TORNEO LOCAL</Link>
            </li>
            <li>
              <Link className={styles.link} to="/copa-libertadores">COPA LIBERTADORES</Link>
            </li>
            <li>
              <Link className={styles.link} to="/copa-argentina">COPA ARGENTINA</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/liga" element={<LigaResults />} />
          <Route path="/copa-libertadores" element={<CopaLibertadoresResults />} />
          <Route path="/copa-argentina" element={<CopaArgentinaResults />} />
          <Route path="/" element={<LigaResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Resultados;
