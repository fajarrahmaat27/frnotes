import React from "react";
import NotesItem from "./NotesItem";

function NotesList ({notes, onDelete }){
    return(
        <div className="notes-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note}
                    />
                ))
            ) : (
                <p>Tidak ada catatan.</p>
            )}
        </div>

    )
    
}

export default NotesList;