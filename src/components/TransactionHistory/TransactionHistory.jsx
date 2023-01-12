import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import { TransactionHistoryTable } from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
    return(
        <TransactionHistoryTable>
             <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map( ({id, type, amount, currency}) => {
                        return(<TransactionHistoryItem 
                            key={id} 
                            type={type} 
                            amount={amount} 
                            currency={currency} 
                        />)
                    })
                }
            </tbody>
        </TransactionHistoryTable>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency    : PropTypes.string.isRequired
        }),
    ),
};

export default TransactionHistory;