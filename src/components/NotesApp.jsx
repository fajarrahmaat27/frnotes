import React from "react";
import {getInitialData} from './index';
import NotesInput from "./NotesInput.jsx";
import NotesList from "./NotesList.jsx";

class NotesApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData(),
        }
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    

    onAddNotesHandler ({ title, body }) {
        this.setState((prevState) => {
            return{
                notes :[
                    ...prevState.notes,
                    {
                        id : +new Date(),
                        title,
                        body,
                        archived : false,
                        createdAt :Date(),

                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="note-app__body">
                <h1 className="note-app__header">Notes</h1>
                <NotesInput addNotes={this.onAddNotesHandler} />
                <h1 className="note-app__header">Catatan Aktif</h1>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </div>
            
            
        )
    }
}

export default NotesApp;