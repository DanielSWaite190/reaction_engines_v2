import React from "react"

export default class NavBar extends React.Component {
    render(){
        return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/new">Add A Engine</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        )
    }
  }