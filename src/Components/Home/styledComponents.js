import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
background-color:#223a5f;
`
export const ResponsiveContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:60px;
padding:20px;
border-radius:10px;
border:1px solid #ffffff;
width:65%;
margin-bottom:60px;

`
export const OptionsContainer = styled.div`
display:flex;
flex-direction:column;

`
export const Option = styled.h1`
font-size:16px;
color:#ffffff;
font-family:"Roboto";
font-weight:500;
`
export const ScoreContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-left:30px;
background-color:#ffffff;
padding-right:30px;
border-radius:10px;

`
export const ScoreText = styled.p`
font-size:16px;
color:#223a5f;
font-weight:600;
font-family:"Roboto";

`
export const ScoreNumber = styled.p`
font-size:23px;
color:#223a5f;
font-weight:600;
font-family:"Roboto";
`
export const GameViewContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:60%;
height:60vh;
`
export const PopupContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const TriggerButton = styled.button`
font-size:16px;
border-radius:10px;
border:none;
color:#223a5f;
cursor:pointer;
padding:6px 10px 6px 10px;
outline:none;
font-family:"Bree Serif";
font-weight:500;
`

export const CloseButton = styled.button`
border:none;
cursor:pointer;
outline:none;
background-color:transparent;
`
export const PopupBody = styled.div`
display:flex;
align-items:flex-start;
padding:20px;
background-color:#ffffff;
justify-content:center;
max-width:550px;
margin-top:60px;
`

export const PopupImg = styled.img`
width:90%;
align-self:center;
`
export const GameOptionList = styled.ul`
display:flex;
flex-direction:row;
margin-left:0px;
justify-content:space-around;
flex-wrap:wrap;
max-width:480px
`
export const GameResultViewContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
max-width:560px
`

export const SelectOptionContainer = styled.div`
display:flex;
width:80%;
max-width:600px;
justify-content:space-between;
`

export const GameUserOptionContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

export const GameUser = styled.p`
font-size:24px;
color:#ffffff;
font-family:"Roboto";
font-weight:500;
text-align:center;

`

export const GameUserImg = styled.img`
width:170px;
height:170px;
`

export const PlayAgainButton = styled.button`
fint-size:16px;
background-color:#ffffff;
color:#223a5f;
padding:5px 10px 5px 10px;
margin:8px;
cursor:pionter;
outline:none;
border:none;
align-self:center;
`
