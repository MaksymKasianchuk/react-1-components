import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 0 15px;
    max-width: 750px;
    min-height: 100vh;
    margin: 0 auto;
    text-align: center;
`;

const getSectionPadding = ({firstSection, lastSection}) =>{
    if(firstSection){
        return '80px 0 40px 0';
    } else if(lastSection){
        return '40px 0 80px 0';
    } else {
        return '40px 0';
    }
};

export const Section = styled.section`
    padding: ${getSectionPadding};
`;