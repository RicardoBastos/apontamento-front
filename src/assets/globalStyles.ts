import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    --color-primary: #222;
    --color-white: #fff;
    --color-cinza: #2D3035;
    --color-action:#28a745;
    --color-black:#000;
    --color-default:#6c757d;
    --color-blue:#1890FF;



    font-family: 'Montserrat', sans-serif;
    color: #A5A7AB;
  }



  ul, li{
    list-style:none;
  }

  img{
    display:block;
    max-width:100%;
  }

  a{
    text-decoration:none;
  }

  button, input, select{
    display:inline-block;
    font-size:1rem;
    border: 1px solid #444951;
    background: transparent;
    border-radius: 0;
    color: #979a9f;
  }

  button{
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 10px 14px;
    margin-left: 5px;
    border: none;
    border-radius: 2px;
    cursor:pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }


`;
