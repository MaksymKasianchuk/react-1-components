import PropTypes from 'prop-types';

const TransactionHistoryItem = ({type, amount, currency}) => {
    return(
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};

export default TransactionHistoryItem;