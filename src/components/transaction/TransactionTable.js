import {arrayOf, shape, string} from 'prop-types';
import TransactionItem from 'components/transaction/TransactionItem';
// import css from 'components/transaction/Transaction.module.css';

export default function TransactionTable
    ({ items }) {
    const elements = items.map(({ id, type, amount, currency }) => <TransactionItem key={id} type={type} amount={amount} currency={currency} />)
    return (
        <tbody>{elements}</tbody>
    )
}

TransactionTable.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
        type: string,
        amount: string,
        currency: string,
    }))
}
