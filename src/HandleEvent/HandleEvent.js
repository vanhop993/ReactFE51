import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    showTitle = () => {
        alert('hello cybersoft');
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }
    
    render() {
        return (
            <div>
                {/* xử lý sự kiện truyền callback */}
                <button className="btn btn-success" onClick={this.showTitle}>Hello</button>
                {/* xử lý sự kiện sử dụng hàm trung gian */}
                <button className="btn btn-success" onClick={() => this.showTitle()}>show</button>
                {/* cái này ko cần nhớ nếu ko có hàm bind thì sẽ ko thể đưa tham số vào đc (closure function) */}
                <button className="btn btn-success" onClick={this.showMess.bind(this,'Khải')}>show mess</button>
                {/* cài này sử dụng es6 nên nhớ để sử dụng */}
                <button className="btn btn-success" onClick={() => {
                    this.showMess('wang')
                }}>show mess es6</button>
            </div>
        )
    }
}
