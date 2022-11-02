import { Menu } from "./components/menu";
import { GlobalStyle } from "./globalStyle/global";
import { Home } from "./pages/home";

export function App() {
  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
}
