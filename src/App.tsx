import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DiagramPage from './pages/diagramPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <DiagramPage />
    </Provider>
  );
};

export default App;
