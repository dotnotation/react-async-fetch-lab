import React, { Component } from "react"

class App extends Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => this.setState({data: json}))
    }

    render(){
        return (
            <h1>"Hello"</h1>
        )
    }
}

export default App 