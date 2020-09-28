import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import BestSmartPhone from './BestSmartPhone/BestSmartPhone'
import BestLaptop from './BestLaptop/BestLaptop'
import PromotionAll from './Promotion/PromotionAll'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <body className="bg-dark">
                <Header/>
                <Carousel/>
                <BestSmartPhone/>
                <BestLaptop/>
                <PromotionAll/>
            </body>
        )
    }
}
