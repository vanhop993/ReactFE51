import React, { Component } from 'react'
import Smartphone from './Smartphone'

export default class BestSmartPhone extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid  pt-5 pb-5">
            <h1 class="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <Smartphone/>
                    <Smartphone/>
                    <Smartphone/>
                    <Smartphone/>
                </div>
            </section>
        )
    }
}
