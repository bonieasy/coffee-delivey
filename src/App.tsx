import { Banner } from "./components/Banner";
import { Addresse } from "./components/Checkout";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <Header />
    <Banner />
    <Products />
    <Addresse />
    <GlobalStyle />
    </>
  );
}
