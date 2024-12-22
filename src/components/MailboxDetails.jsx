import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MailboxDetails = ({ mailboxes, deleteBox }) => {
  const navigate = useNavigate()
  const { mailboxId } = useParams()
  const singleMailbox = mailboxes.find((mail) => mail._id === Number(mailboxId))
  const handleDeleteClick = () => {
    deleteBox(mailboxId)
    navigate('/mailboxes')
  }

  return (
    <>
      <h2>Mailbox {singleMailbox._id}</h2>
      <h3>Details</h3>
      <dl>
        <dt>Boxholder:</dt>
        <dd>{singleMailbox.boxholder}</dd>
        <dt>Box Size:</dt>
        <dd>{singleMailbox.boxSize}</dd>
      </dl>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  )
}

export default MailboxDetails
