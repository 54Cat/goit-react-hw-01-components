import {string, number} from 'prop-types';
import css from 'components/statistics/Statistics.module.css';

export default function StatisticsItem
    ({ label, percentage }) {
    return (
    <li className={css.statsItem}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
    </li>
    )
}

StatisticsItem.propTypes = {
    label: string.isRequired,
    percentage: number.isRequired,
}
