import styled from '@emotion/styled';

const getFriendStatusColor = ({status, theme}) =>{
    if(status) { return theme.colors.friendOnline; }
    else { return theme.colors.friendOffline; } 
};

export const FriendListUl = styled.ul` 
    margin: 0 auto;
    padding: 0;
    list-style: none;
    max-width: 350px;
`;

export const FriendListItemWrap = styled.li` 
    width: 100%;
    padding: 20px 20px 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.colors.cardBgColor};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    &:not(:last-child){
        margin-bottom: 10px;
    }
    &>img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.border};
    }
`;

export const FriendListItemName = styled.p` 
    margin: 0 0 0 10px;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 500;
    width: 100%;
`;

export const FriendListItemStatus = styled.span` 
    margin: 0;
    padding: 0;
    background-color: ${getFriendStatusColor};
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
`;