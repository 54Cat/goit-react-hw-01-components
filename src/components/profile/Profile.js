import {string, number, shape} from 'prop-types';
import css from 'components/profile/Profile.module.css';

export default function Profile({ avatar, username, tag, location, stats }) {
  return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
  avatar: string.isRequired,
  username: string.isRequired,
  tag: string.isRequired,
  location: string.isRequired,
  stats: shape({
    followers: number.isRequired,
    views: number.isRequired,
    likes: number.isRequired,
  })
}
