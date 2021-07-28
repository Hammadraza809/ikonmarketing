import React, { Component } from "react";


export class SearchBar extends Component {
  state = {
    active: true,
  };
  search() {
    this.props.onSearchPress(this.state.active)

  }
  render() {
    return (
      <>
        <div className="search-bar">
          <div onClick={() => this.search()} style={{cursor:'pointer'}}>
            <div className="mg-icon">
              <img
                src={require("./../../../assets/images/icons/magnifying-glass.png")}
              />
            </div>
            <div className="search-input">
              <p style={{ margin: 0 }}>Search here</p>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default SearchBar;
