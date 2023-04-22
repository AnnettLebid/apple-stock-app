import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <Container sx={{ pt: "2rem" }}>     
        <Header />
        <Main />   
    </Container>
  );
}

export default App;
