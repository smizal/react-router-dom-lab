import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'

function App() {
  const [mailboxes, setMailboxes] = useState([])
  const [idCounter, setIdCounter] = useState(1)

  const addBox = (newMailboxData) => {
    newMailboxData._id = idCounter
    mailboxes.push(newMailboxData)
    setMailboxes([...mailboxes])
    setIdCounter(idCounter + 1)
  }

  const deleteBox = (id) => {
    setMailboxes(mailboxes.filter((mailbox) => mailbox._id != id))
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails mailboxes={mailboxes} deleteBox={deleteBox} />
          }
        />
      </Routes>
    </>
  )
}

export default App
