import React, { Component } from 'react'

export default class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP} width={200} height={350} />
                <div className="card-body">
                <h4 className="card-title text-center">{sanPham.tenSP}</h4>
                <p className="card-text text-center">{sanPham.giaBan.toLocaleString()}</p>
                <button className='btn btn-success'>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
