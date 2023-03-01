import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import { NewTransactionModal } from './componentes/NewTransactionModal';
import { TransictionTable } from "./componentes/TransactionsTable";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  

  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);

  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <TransictionTable />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}