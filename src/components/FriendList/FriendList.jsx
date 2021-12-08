import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
import FriendListItem from './FriendListItem';
const FriendList = ({friendList}) => {
    return(
        <ul className={styles.friendList}>
            {
                friendList.map(({avatar, name, isOnline, id})=>(
                    <li key={id} className={styles.item}>
                    <FriendListItem 
                        avatar={avatar} 
                        name={name} 
                        isOnline={isOnline}
                        id={id}
                    />
                    </li>
                ))
            }      
        </ul>
    );

}
  
FriendList.propTypes = {
    friendList: PropTypes.array.isRequired
};

export default FriendList;