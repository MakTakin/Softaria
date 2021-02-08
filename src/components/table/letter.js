import React from 'react'
import styled from 'styled-components'


const BodyLetter = styled.div`
    margin-top: 30px;
    background: #9e9e9e52;
    font-size: 18px;
    padding:30px;
    text-align:left;
    border-radius:20px
`
const PageLink = styled.a`
    margin-left:10px;
    display:block;
`
const StyledDiv = styled.div`
    margin-left:10px;
`
const Letter= ({letter}) => {
    return (
        <BodyLetter>

                Здравствуйте, дорогая и.о. секретаря <br></br>
                За последние сутки во вверенных Вам сайтах произошли следующие изменения:<br></br>
                Исчезли следующие страницы: <br></br>
                { letter.deletedPage.length > 0 ?
                    letter.deletedPage.map((page, i)=> <PageLink key={i} href={page}>{page}</PageLink>) :
                    <StyledDiv>Исчезнувших страниц нет</StyledDiv>
                }
                Появились следующие новые страницы <br></br>
                { letter.addedPage.length > 0 ?
                    letter.addedPage.map((page, i)=> <PageLink key={i} href={page}>{page}</PageLink>) :
                    <StyledDiv>Новых страниц нет</StyledDiv>
                }
                Изменились следующие страницы<br></br>
                { letter.changedPage.length > 0 ?
                    letter.changedPage.map((page, i)=> <PageLink key={i} href={page}>{page}</PageLink>) :
                    <StyledDiv>Измененных страниц нет</StyledDiv>
                }
        </BodyLetter>
    )
}
export default Letter