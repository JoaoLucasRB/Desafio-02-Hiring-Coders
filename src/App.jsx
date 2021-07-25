import React from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { GlobalStyle } from './styles/global';
import { CrudProvider } from './hooks/useCrud';


function App() {
  return (
    <div className="App">
      <CrudProvider>
        <Header />
        <Body />
        <GlobalStyle />
      </CrudProvider>
    </div>
  );
}

export default App;
