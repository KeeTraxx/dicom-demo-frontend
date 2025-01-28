import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import './Patients.css';
import axios from 'axios';

interface Patient {
  id: string;
  name: string;
}

function Patients() {
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(() => {
    (async () => {
      const response = await axios.post('http://localhost:4000', {
        query: `
          query ExampleQuery {
            patients {
              createdAt
              id
              name
            }
          }`
      });
      console.log(response.data.data.patients);
      setPatients(response.data.data.patients);
    })();
  }, []);

  return (
    <>
      <main>
        <h1>Patients</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td><NavLink to={`/patient/${patient.id}`}>🔍</NavLink></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Patients
