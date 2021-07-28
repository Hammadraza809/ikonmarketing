import React, { Component } from 'react'
import { Avatar, Divider, Input, Form, Button, Menu } from 'antd';
import {
    FileOutlined,
    SendOutlined,
    PaperClipOutlined,
    SmileOutlined,
    AudioMutedOutlined,
    UserOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import axios from 'axios'
import AttachmentIcon from '../../controls/icons/attachment-icon/AttachmentIcon'
class InputBox extends Component {
    formRef = React.createRef();

    onSend = values => {
        let user = JSON.parse(localStorage.getItem('user'))
        const { id } = this.props.match.params
        const message_to_id = parseInt(parseInt(id))
        if (values.newMsg) {
            axios.post(`http://192.168.0.96:401/bwccrm/sendMessage`, { user_id: user.data.user_id, loginuser_id: user.data.user_id, message_to: message_to_id, message_body: values.newMsg })
                .then(res => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err.message)
                })

            this.formRef.current.setFieldsValue({
                newMsg: ''
            });
            // 	this.setState({
            // 		msgList: [...this.state.msgList, newMsgData]
            // 	})
        }
    };
    emptyClick = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <div className="input-box">
                {/* <div>
                    <AttachmentIcon /> */}
                {/* <button className="addFiles">
                        <i className="fa fa-plus"></i>
                    </button> */}
                {/* <div className="search-input">
                        <input
                            type="text"
                            placeholder="Type a message here" */}
                {/* //   onChange={this.onStateChange}
                        //   value={this.state.msg} */}
                {/* /> */}
                {/* </div>
                    <Button type="primary" onClick={()=> this.sendMesssage()}>Send</Button>
                </div> */}
                <Form name="msgInput" ref={this.formRef} onFinish={this.onSend} className="w-100">
                    <Form.Item name="newMsg" className="mb-0">
                        <Input style={{ height: "3rem" }}
                            autoComplete="off"
                            placeholder="Type a message..."
                            suffix={
                                <div>
                                    <a href="/#" className="text-dark font-size-lg mr-3" onClick={this.emptyClick}>
                                        <SmileOutlined />
                                    </a>
                                    <a href="/#" className="text-dark font-size-lg mr-3" onClick={this.emptyClick}>
                                        <PaperClipOutlined />
                                    </a>
                                    <Button shape="circle" type="primary" size="default" htmlType="submit">
                                        <SendOutlined />
                                    </Button>
                                </div>
                            }
                        />
                    </Form.Item>
                </Form>
            </div>
        
        )
    }
}

export default InputBox
