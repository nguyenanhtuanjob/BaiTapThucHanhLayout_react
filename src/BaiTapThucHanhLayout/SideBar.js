import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h1>Shop Name</h1>
                <ul>
                    <li>
                        <a className="" href="#">Category 1</a>
                    </li>
                    <li>
                        <a className="" href="#">Category 2</a>
                    </li>
                    <li>
                        <a className="" href="#">Category 3</a>
                    </li>
                </ul>

            </div>
        )
    }
}
