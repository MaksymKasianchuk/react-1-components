import PropTypes from 'prop-types';
import { StatCard, StatTitle, StatList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return(
        <StatCard>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList numOfItems={stats.length}>
                {
                    stats.map(({id, label, percentage}) => {
                       return( <li key={id} className='item'>
                            <span className='label'>{label}</span>
                            <span className='percentage'>{percentage}%</span>
                        </li>)
                    })
                }
            </StatList>
        </StatCard>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Statistics;