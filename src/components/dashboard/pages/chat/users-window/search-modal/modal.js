import React, { Component } from "react";
import "./../../../assets/scss/components/UsersWindow.scss";
import SearchEngine from "../search-bar/SearchEngine";
import Scrollbars from "react-custom-scrollbars";
import ChatThumb from "../chat-thumb/ChatThumb";
import axios from "axios";
class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      result: [],
      text: '',

    };
  }
  // componentDidMount() {
  //   let user = JSON.parse(localStorage.getItem('user'))
  //   // let user = localStorage.getItem('user')
  //   if (!user) {

  //     this.props.history.push('/login')
  //   }
  //   else {
  //     axios.post(`http://192.168.0.96:401/bwccrm/getContactsUser`, { user_id: user.data.user_id, loginuser_id: user.data.user_id })
  //       .then(res => {
  //         // console.log(res.data.contacts)
  //         this.setState({ data: res.data.contacts })
  //       })
  //       .catch((err) => {
  //         console.log(err.message)
  //       })
  //   }

  // }
  showChat(id) {
    this.props.history.push(`/chat/${id}`);
  }
  getFilterRecord = (record) => {
    
    this.setState({ data: record.data.records })
  }
  render() {
    const {data, result} = this.state;
   
    const arr = data ? data : result;
    console.log(arr)
    return (
      <div className="search-modal-field">
        <SearchEngine onSearchPress={this.props.onSearchPress} getData={this.getFilterRecord} />
        <div className="recent-chats">
          <Scrollbars autoHide>
            {arr.map((e, i) => {
              return (
                <div onClick={() => this.showChat(e.user_id)} key={i}>
                  <ChatThumb data={e} />
                </div>
              );
            })}
          </Scrollbars>
        </div>
      </div>
    );
  }
}


export default SearchModal
