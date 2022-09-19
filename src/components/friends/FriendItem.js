import {string, bool} from 'prop-types';
import css from 'components/friends/Friends.module.css';

export default function FriendItem
    ({ avatar, name, isOnline }) {
    return (
        <li className={css.friendItem}>
            <span className={css.status}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendItem.propTypes = {
    avatar: string,
    name: string,
    isOnline: bool,
}
