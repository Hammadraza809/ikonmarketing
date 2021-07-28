import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import GroupNameForm from './GroupNameForm';
import SelectGroupMembers from './SelectGroupMembers';

class CreateGroupModal extends React.Component {
constructor() {
    super()
    this.state = {
        loading: false,
        visible: false,
        currentStep: 1, // Default is Step 1
        email: '',
        username: '',
        password: '',
    };
    
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
}


showModal = () => {
    this.setState({
        visible: true,
    });
};
handleChange(event) {
    console.log(event.target)
    // const { name, value } = event.target
    // this.setState({
    //     [name]: value
    // })
}

// Trigger an alert on form submission
handleSubmit = event => {
    console.log(event)
//     event.preventDefault()
//     const { email, username, password } = this.state
//     alert(`Your registration detail: \n 
// Email: ${email} \n 
// Username: ${username} \n
// Password: ${password}`)
}

handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
        this.setState({ loading: false, visible: false });
    }, 3000);
};

handleCancel = () => {
    this.setState({ visible: false });
};
_next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 1 ? 2 : currentStep + 1
    this.setState({
        currentStep: currentStep
    })
}

_prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
        currentStep: currentStep
    })
}
previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
        return (
            <button
                className="btn btn-secondary"
                type="button"
                onClick={this._prev}>
                Previous
            </button>
        )
    }
    // ...else return nothing
    return null;
}

nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 2) {
        return (
            <button
                className="btn btn-primary float-right"
                type="button"
                onClick={this._next}>
                Next
            </button>
        )
    }
    // ...else render nothing
    return null;
}
render() {
    const { visible, loading } = this.state;
    return (
        <>
            <Modal style={{textAlign:'center',height:'50vh'}}
                visible={visible}
                title="New Group Chat"
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                // footer={[
                //     <Button key="back" onClick={this.handleCancel}>
                //         Return
                //     </Button>,
                //     <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                //         Submit
                //     </Button>,
                // ]}
            >
                <form onSubmit={this.handleSubmit}>
                    <GroupNameForm
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <SelectGroupMembers
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </Modal>
        </>
    );
}
}

export default CreateGroupModal