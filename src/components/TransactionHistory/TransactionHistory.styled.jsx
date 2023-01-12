import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
    width: 100%;
    bacground-color: ${props => props.theme.colors.cardBgColor};
    border-collapse: collapse;
    &>thead>tr>th{
        width: 33%;
        border: 1px solid ${props => props.theme.colors.border};
        background: ${props => props.theme.colors.theadColor};
        padding: 15px;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.whiteText};
        &:first-child{
            border-top-left-radius: ${props => props.theme.radii.cardBorderRadius}px;
        }
        &:last-child{
            border-top-right-radius: ${props => props.theme.radii.cardBorderRadius}px;
        }
    }
    &>tbody>tr{ 
        &>td{
            width: 33%;
            border: 1px solid ${props => props.theme.colors.border};
            background: ${props => props.theme.colors.cardBgColor};
            padding: 15px;
            font-family: 'Roboto', sans-serif;
            color: ${props => props.theme.colors.lightText};
        }
        &:nth-child(even){
            &>td{
                background: ${props => props.theme.colors.cardBgColorDarker};
            }
        }    
        &:last-child{
            &>td{
                &:first-child{
                    border-bottom-left-radius: ${props => props.theme.radii.cardBorderRadius}px;
                }
                &:last-child{
                    border-bottom-right-radius: ${props => props.theme.radii.cardBorderRadius}px;
                }
            }
        }
    }
`;