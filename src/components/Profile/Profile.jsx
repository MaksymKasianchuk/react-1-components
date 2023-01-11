import PropTypes from 'prop-types';
import { ProfileCard, ProfileDescription, ProfileStats, ProfileName, ProfileTag, ProfileLocation, ProfileStatCard} from './ProfileCard.styled';

const Profile = ({username, tag, location = 'None', avatar, stats}) => {
    return(
        <ProfileCard>
           <ProfileDescription>
                <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                />
               <ProfileName>{username}</ProfileName>
               <ProfileTag>@{tag}</ProfileTag>
               <ProfileLocation>{location}</ProfileLocation>
           </ProfileDescription>
            
           <ProfileStats>
                <ProfileStatCard>
                    <span className='label'>Followers</span>
                    <span className='quantity'>{stats.followers}</span>
                </ProfileStatCard>
                <ProfileStatCard>
                    <span className='label'>Views</span>
                    <span className='quantity'>{stats.views}</span>
                </ProfileStatCard>
                <ProfileStatCard>
                    <span className='label'>Likes</span>
                    <span className='quantity'>{stats.likes}</span>
                </ProfileStatCard>
           </ProfileStats>
        </ProfileCard>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired,
};

export default Profile;