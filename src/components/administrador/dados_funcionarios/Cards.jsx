import React, { useState } from 'react';
import styles from './Cards.module.css';
import trash from '../../img/trash.svg';
import axios from 'axios';

function Cards({ name, hour, id }) {
  const [isUpdated, setIsUpdated] = useState(true);

  const handleDeleteClick = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/funcionario/${id}`, { status: 0 });

      setIsUpdated(false); 

    } catch (error) {
      console.error('Erro ao atualizar o item:', error);
    }
  };

  if (!isUpdated) {
    return null;
  }

  return (
    <div className={styles.border}>
      <div className={styles.data}>
        <span> {name}</span>
        <div className={styles.desc}>
          <h2>{hour}</h2>
        </div>
      </div>
      <div className={styles.image} onClick={handleDeleteClick}>
        <img src={trash} alt="" />
      </div>
    </div>
  );
}

export default Cards;
