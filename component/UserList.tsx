import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import { RootState, AppDispatch } from './store';

export const UserList: React.FC = () => {
  // Gán AppDispatch để dispatch hiểu đúng hàm async thunk
  const dispatch = useDispatch<AppDispatch>();
  
  // Gán RootState để TypeScript hiểu kiểu dữ liệu của state
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Đang tải danh sách...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>Lỗi: {error}</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Danh sách Người dùng</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li 
            key={user.id} 
            style={{ 
              padding: '12px', 
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <strong>{user.name}</strong>
            <span style={{ color: '#666' }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};