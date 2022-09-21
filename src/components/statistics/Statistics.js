import PropTypes from 'prop-types';
import StatisticsList from 'components/statistics/StatisticsList';
import css from 'components/statistics/Statistics.module.css';

export default function Statistics({ data, title }) {
    return <section className={css.statistics}>
        <h2 className={css.title}>{title ? { title }: 'Upload stats'}</h2>
        <StatisticsList items={data} />
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}