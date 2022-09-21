import PropTypes from 'prop-types';
import FriendItem from 'components/friends/FriendItem';
import css from 'components/friends/Friends.module.css';

export default function FriendList
    ({ friends }) {
    const elements = friends.map(({ id, avatar, name, isOnline }) => <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
    return (
        <ul className={css.friendList}> {elements} </ul>
    )
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}
