import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Router />
    </BrowserRouter>
    <GlobalStyle />
    </>
  );
}
