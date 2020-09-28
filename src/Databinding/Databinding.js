import React, { Component } from 'react'

export default class Databinding extends Component {
    // thuộc tính của lớp đối tượng => sử dụng được ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Sếp wang',
    }
    // phương thưc => phương thức có thể gọi trong các phương thức khác của lớp đối tượng 
    renderHocVien = () => {
        return <div className="card text-white bg-primary w-25">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">Mã sô :{this.hocVien.ma}</p>
            </div>
        </div>

    }
    // đây là hàm render của react
    render() {
        // binding data là biến
        let title = 'Cybersoft';
        let imgSrc = 'https://picsum.photos/200/200';
        // binding data là hàm 
        const renderImg = () => {
            // giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc jsx
            return <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>

        }
        return (
            <div>
                <div id="title">{title}</div>
                <div className="w-25"><img src={imgSrc} alt="" /></div>
                <input className="w-50 form-group" value={title} />
                <div>
                    {renderImg()}
                </div>
                <ul>
                    <li>Mã học viên : {this.hocVien.ma}</li>
                    <li>Tên học viên : {this.hocVien.tenHocVien}</li>
                    <li>Hình Ảnh : <img src={this.hocVien.avatar} width="200" /></li>
                </ul>
                {this.renderHocVien()}
            </div>
        )
    }
}
