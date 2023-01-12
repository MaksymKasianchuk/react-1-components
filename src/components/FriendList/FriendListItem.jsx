import PropTypes from 'prop-types';
import { FriendListItemWrap, FriendListItemName, FriendListItemStatus } from './FriendList.styled';

const FriendListItem = ({  avatar, name, isOnline = false }) => {
    return(
        <FriendListItemWrap>
            <FriendListItemStatus status={isOnline}/>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendListItemName>{name}</FriendListItemName>
        </FriendListItemWrap>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
} 

export default FriendListItem;