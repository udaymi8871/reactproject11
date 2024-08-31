import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentTable from './component';
import { useState } from 'react';
import StudentData from './constant';

function App() {
  const [data, setData] = useState<[]>([])
  return (
    <div>
      <StudentTable

        data={StudentData}

      />

    </div>
  );
}

export default App;
