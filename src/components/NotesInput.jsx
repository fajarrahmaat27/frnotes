import React from "react";

class NotesInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title : '',
            body : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event){
        this.setState(()=> {
            return{
                title : event.target.value,
            }
        });
    }
    onBodyChangeEventHandler(event) {
        this.setState(()=> {
            return {
                body : event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state)
    }
    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="char-count">{25 - this.state.title.length} karakter tersisa</p>
                <input type="text" placeholder="Masukkan Judul anda" value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={25}/>
                <input className="note-input__body" type="text" placeholder="Catatan Anda" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NotesInput;