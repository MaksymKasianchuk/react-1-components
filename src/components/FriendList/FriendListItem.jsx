import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    const status = isOnline ? [styles.status, styles.online].join(' ') : [styles.status, styles.offline].join(' ');
    return(
        <>
            <span className={status}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" />
            <p className={styles.name}>{name}</p>
        </>
    );
}

FriendListItem.defaultProps = {
    isOnline: "offline",
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;