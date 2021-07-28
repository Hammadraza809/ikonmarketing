import React, { Component } from "react";
class GroupNameForm extends React.Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }

        return (
            <div className="form__group field">
                <input type="input" className="form__field" autoFocus placeholder="Name" name="name" id="name" 
                    onChange={this.props.handleChange} />
                <label htmlFor="name" className="form__label">Group Name</label>
            </div>

        )
    }
}

export default GroupNameForm