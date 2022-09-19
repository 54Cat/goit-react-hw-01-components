import StatisticsList from 'components/statistics/StatisticsList';
import css from 'components/statistics/Statistics.module.css';

export default function Statistics({ data }) {
    return <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        <StatisticsList items={data} />
    </section>
}