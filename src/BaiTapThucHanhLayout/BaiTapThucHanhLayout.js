import React, { Component } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Content from './Content'
import Footer from './Footer'


export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                            <div className="col-3">
                                <SideBar/>
                            </div>
                            <div className="col-9">
                                <Content/>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
