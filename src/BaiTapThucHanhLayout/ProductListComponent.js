import React, { Component } from 'react'
import ProductItemComponent from './ProductItemComponent'

export default class ProductListComponent extends Component {
    render() {
        return (
            <div>
                <div className="row text-center py-4">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ProductItemComponent/>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ProductItemComponent/>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ProductItemComponent/>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ProductItemComponent/>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ProductItemComponent/>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ProductItemComponent/>
                    </div>
                </div>
            </div>

        )
    }
}
