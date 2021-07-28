import React, { Component } from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip, Avatar } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
export class UserWindowHeader extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }
  menu = () => (
    <Menu>
      <Menu.Item key="1">Setting</Menu.Item>
      <Menu.Item key="2">Sign out</Menu.Item>
    </Menu>
  );

  componentDidMount() {
    this.getUser();
  }
  async getUser() {
    let user = await JSON.parse(localStorage.getItem("user"));
    this.setState({ user: user });
  }
  render() {
    return (
      <div className="user-window-wrapper">
        <div className="user-window-header">
          <div>
            <div>
              <Avatar
                size="large"
                src="https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg"
              />
            </div>

            <div style={{ marginLeft: 10 }}>
              <p>Admin</p>
            </div>
          </div>

          <div>
            <Dropdown.Button
              className="dropdown-btn"
              overlay={this.menu}
            ></Dropdown.Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserWindowHeader;
