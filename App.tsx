import React from 'react';
import { Provider } from 'react-redux';
import { store } from './component/store';
import { UserList } from './component/UserList';

export default function App() {
  return (
    <Provider store={store}>
      <main style={{ padding: '20px' }}>
        <UserList />
      </main>
    </Provider>
  );
}