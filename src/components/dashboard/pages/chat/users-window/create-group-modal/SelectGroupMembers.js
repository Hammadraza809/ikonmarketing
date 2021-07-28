import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";
import ChatThumb from "../chat-thumb/ChatThumb";


class SelectGroupMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            this.props.history.push('/login')
        }
        else {
            axios.post(`http://192.168.0.96:401/bwccrm/getContactsTotal`, { user_id: user.data.user_id, campaign_id: 1 })
                .then(res => {
                    // console.log(res.data.contacts)
                    this.setState({ data: res.data.contacts })
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

    }
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }

        return (
            <div className="form-group">
                <div className="recent-chats">
                    <Scrollbars autoHide>
                        {data.map((e, i) => {
                            return (
                                <div onClick={() => this.showChat(e.user_id)} key={i}>
                                    <ChatThumb data={e} />
                                </div>
                            );
                        })}
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default SelectGroupMembers