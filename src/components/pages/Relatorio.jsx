import SideBar from "../project/SideBar";
import styles from './Relatorio.module.css'
import DadosRelatorio from "../project/DadosRelatorio";
import React, { useEffect, useState } from 'react';

function Relatorio() {


 



  return (
    <div className={styles.divbar} >
      <SideBar />
      <DadosRelatorio/>
    </div>
  );
}

export default Relatorio;
