import React, { Component } from 'react'

export default class DemoConditionalandState extends Component {
    /**
     * isLogin là thuộc tính của class 
     *  true : đã login => hiện tên người dùng 
     *  false : chưa login => hiện nút login
     */
    state = { // để lửu các giá trị bị thay đổi của component
        isLogin : false,
    }
    // isLogin = false; cách này sai vì render ko chạy lại đc .
    renderLogin = () => {
        if(this.state.isLogin){
            //hiện tên người dùng 
            return <p>sép wang</p>
        }else{
            return <button onClick={this.handleLogin}>Login</button>
        }
    }
    handleLogin = () =>{
        // this.state.isLogin = true;cách này sai vì render ko chạy lại đc .
        this.setState({
            isLogin: true,
        });
    }

    // render là phương thức cập nhập lại giao diện
    render() {
        return (
            <div>
                <h2>Conditional and State</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
