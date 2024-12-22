import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailbox</h2>
      <ul>
        {mailboxes.map((currentMailbox) => (
          <li className="list" key={currentMailbox._id}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              Mailbox {currentMailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList
