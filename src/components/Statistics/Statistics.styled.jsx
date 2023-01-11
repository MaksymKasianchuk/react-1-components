import styled from '@emotion/styled';

export const StatCard = styled.div`
    background-color: #fff;
    border 1px solid #e1e7ef;
    border-radius: 5px;
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
    border-bottom: 1px solid #eeeeee;
    text-transform: uppercase;
`;

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
        border-bottom: 1px solid #eeeeee;
        :not(last-child){
            border-right: 1px solid #eeeeee;
        }
        width: ${ ({ numOfItems }) => {
                if(numOfItems<=5){
                    return 500/numOfItems - 42;
                } else { return 500/3 - 42; }
            }
        }px;
        &>.label{
            font-weight:700;
            margin-bottom: 10px;
        }
        &>.percentage{
            font-weight:400;
            color: #535559;
        }
    }
`;