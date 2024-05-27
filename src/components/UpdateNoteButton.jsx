import { UpdateNoteForm } from "./UpdateNoteForm";
import { useUpdateForm } from "../hooks";

export const UpdateNoteButton = ({
  setNote,
  note,
  noteId,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
  noteCreated_at,
  setVisibilityUpdateForm,
  visibilityUpdateForm,
}) => {
  const handleUpdate = () => {
    setVisibilityUpdateForm(true);
  };

  return (
    <span>
      <button onClick={handleUpdate}>
        <b>Update</b>
      </button>
      {visibilityUpdateForm ? (
        <UpdateNoteForm
          id={noteId}
          note={note}
          setNote={setNote}
          noteName={noteName}
          noteDescription={noteDescription}
          noteImportant={noteImportant}
          noteStatus={noteStatus}
          noteDue_Date={noteDue_Date}
          noteCreated_at={noteCreated_at}
          visibilityUpdateForm = {setVisibilityUpdateForm}
        />
      ) : (
        ""
      )}
    </span>
  );
};