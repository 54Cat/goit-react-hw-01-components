import PropTypes from 'prop-types';
import TransactionTable from 'components/transaction/TransactionTable';
import css from 'components/transaction/Transaction.module.css';

export default function TransactionHistory({ items }) {
    return <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <TransactionTable items={items} />
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}