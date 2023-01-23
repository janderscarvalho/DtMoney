import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import { TransictionTable } from "./componentes/TransactionsTable";
import { GlobalStyle } from "./styles/global";



export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransictionTable />
      <GlobalStyle />
    </>
  );
}