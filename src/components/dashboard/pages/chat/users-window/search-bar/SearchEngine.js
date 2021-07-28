import React, { Component } from "react";
import axios from "axios";
import {CloseCircleOutlined} from  '@ant-design/icons';
export class SearchEngine extends Component {
    state = {
        active: false,
    };
    onTextSearch(e) {
        let user = JSON.parse(localStorage.getItem('user'))
        axios.post(`http://192.168.0.96:401/bwccrm/searchUser`, { user_id: user.data.user_id, loginuser_name: user.data.user_name, input: e.target.value })
            .then(res => {

                this.props.getData(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    onClose() {
        this.props.onSearchPress(this.state.active)
    }
    render() {
        return (
            <div className="search-bar-field">
                <div>
                    <div className="mg-icon"><img src={require('./../../../assets/images/icons/magnifying-glass.png')} /></div>
                    <div className="search-input-field">
                        <div>
                            <input type="text" autoFocus placeholder="Search here" onChange={(e) => this.onTextSearch(e)} />
                        </div>

                        <div style={{cursor:'pointer' }} onClick={() => this.onClose()}><CloseCircleOutlined size="large" /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchEngine;
