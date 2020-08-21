import React, { Component } from 'react'
import CarouselComponent from './CarouselComponent'
import ProductListComponent from './ProductListComponent'

export default class Content extends Component {
    render() {
        return (
            <div>
                <CarouselComponent/>
                <ProductListComponent/>
            </div>
        )
    }
}
