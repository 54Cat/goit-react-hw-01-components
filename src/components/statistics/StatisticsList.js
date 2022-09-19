import {string, arrayOf, shape} from 'prop-types';
import StatisticsItem from 'components/statistics/StatisticsItem';
import css from 'components/statistics/Statistics.module.css';

export default function StatisticsList
    ({ items }) {
    const elements = items.map(({ id, label, percentage }) => <StatisticsItem key={id} label={label} percentage={percentage} />)
    return (
        <ul className={css.statList}> {elements} </ul>
    )
}

StatisticsList.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
    }))
}
