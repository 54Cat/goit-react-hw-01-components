import {string} from 'prop-types';

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
    type: string,
    amount: string,
    currency: string,
}
