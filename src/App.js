import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container sx={{ pt: "2rem" }}>
        <Header />
        <Main />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
