import styled from '@emotion/styled';

export const ProfileCard = styled.section`
    background-color: ${props => props.theme.colors.cardBgColor};
    border 1px solid ${props => props.theme.colors.border};
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    overflow: hidden;
    max-width: 350px;
    margin: 0 auto;
`;

export const ProfileDescription = styled.div`
    padding: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    &>img{
        width: 150px;
        height: 150px;
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 50%;
    }
`;

export const ProfileName = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
`;

export const ProfileTag = styled.p`
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.lightText};
    ont-weight: 300;
`;

export const ProfileLocation = styled.p`
    font-family: 'Roboto', sans-serif;
    ont-weight: 400;
    color: ${props => props.theme.colors.lightText};
`;

export const ProfileStats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
`;
export const ProfileStatCard = styled.li`
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    margin: 0;
    width: ${350/3}px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    :not(last-child){
        border-right: 1px solid ${props => props.theme.colors.border};
    }
    &>.label{
        font-weight:700;
        margin-bottom: 10px;
    }
    &>.quantity{
        font-weight:400;
        color: ${props => props.theme.colors.lightText};
    }
`;