import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import './Patients.css';

interface Patient {
  id: string;
  name: string;
}

function Patients() {
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(() => {
    // TODO axios here
    setPatients([
      {
        id: '1',
        name: 'John Doe'
      }
    ]);
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
