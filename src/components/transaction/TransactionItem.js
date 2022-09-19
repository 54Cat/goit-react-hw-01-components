import PropTypes from 'prop-types';
// import css from 'components/transaction/Transaction.module.css';

export default function TransactionItem
    ({ type, amount, currency }) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
