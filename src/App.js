import styled from 'styled-components'
import Form from './components/form/form';
import Letter from './components/table/letter';
import { useState } from 'react';


const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    text-align:center;
`


function App() {
    const [letter, setLetter] = useState()
  return (
    <div className="App">
      <Container>
          <div>Письмо с данными по таблицам</div>
          <Form setLetter={setLetter}/>
          { letter &&
            <Letter letter={letter}/>
          }
      </Container>
    </div>
  );
}

export default App;
