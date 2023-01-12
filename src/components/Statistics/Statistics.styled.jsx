import styled from '@emotion/styled';

export const StatCard = styled.section`
    background-color: ${props => props.theme.colors.cardBgColor};
    border 1px solid ${props => props.theme.colors.border};
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    overflow: hidden;
    max-width: 500px;
    margin: 40px auto;
`;

export const StatTitle = styled.h2`
    width: 100%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.2;
    margin: 0;
    padding: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    text-transform: uppercase;
`;

const getCardWidth = ( { numOfItems } ) => {
    if(numOfItems<=5){
        return 500/numOfItems;
    } else { return 500/3}
};

export const StatList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    &>.item{
        font-family: 'Roboto', sans-serif;
        padding: 20px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid ${props => props.theme.colors.border};
        :not(last-child){
            border-right: 1px solid ${props => props.theme.colors.border};
        }
        width: ${getCardWidth}px;
        &>.label{
            font-weight:700;
            margin-bottom: 10px;
        }
        &>.percentage{
            font-weight:400;
            color: ${props => props.theme.colors.lightText};
        }
    }
`;