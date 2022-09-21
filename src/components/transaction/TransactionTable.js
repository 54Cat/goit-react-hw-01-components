import PropTypes from 'prop-types';
import TransactionItem from 'components/transaction/TransactionItem';

export default function TransactionTable
    ({ items }) {
    const elements = items.map(({ id, type, amount, currency }) => <TransactionItem key={id} type={type} amount={amount} currency={currency} />)
    return (
        <tbody>{elements}</tbody>
    )
}

TransactionTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}
