import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randColor() {
    return `rgb( ${Math.random() * 256},  
    ${Math.random() * 256}, 
    ${Math.random() * 256})`;
}

const Statistics = ({title, stats}) => {
    return(
        <section className={styles.statistics}>
            {title && (<h2 className={styles.title}>{title}</h2>)} 
            <ul className={styles.statList}>
                {stats.map(({id, label, percentage})=>(
                    <li className={styles.item} key={id} style={{backgroundColor: randColor()}}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
  
Statistics.propTypes = {
  stats: PropTypes.array.isRequired
};

export default Statistics;