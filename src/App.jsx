import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './shared/Router';


function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    )
}

//폰트 추가 및 CSS reset
const GlobalStyle = createGlobalStyle`
    @font-face {
     font-family: 'DungGeunMo';
     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
    }
  ${reset}
  * {
  box-sizing: border-box;
 
  }

  body {
    font-family: 'DungGeunMo';
    background-color: #f0f0f0;
    
  }
  //버튼 css초기화
  button,  a {
    all: unset;
  }

  select,input,textarea{    font-family: 'Pretendard-Regular';}
`;

export default App