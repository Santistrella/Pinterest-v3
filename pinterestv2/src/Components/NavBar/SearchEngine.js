import React, {Component, useState} from 'react';



class SearchEngine extends Component {

    state = {
        id = {}
    }

    handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value()
    alert(title)
    }
}

    render() {
    return(
        <form onSubmit={this.handleSubmit} />
        <input type="text" placeholder="ID del pin"/>
        </form>)}
