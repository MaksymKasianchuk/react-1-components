import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return(
        <FriendListUl>
            {
                friends.map(({ avatar, name, isOnline, id}) =>{
                    return (
                        <FriendListItem 
                            key={id}
                            avatar={avatar} 
                            name={name} 
                            isOnline={isOnline} 
                            id={id} 
                        />
                    );
                })
            }
        </FriendListUl>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired
};

export default FriendList;