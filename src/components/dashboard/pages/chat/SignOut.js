import React from 'react';
import { auth } from '../common/Config';
import { Button } from '@material-ui/core';

function SignOut() {
    return (
        <div>
            <Button
                className="signoutBtn"
                style={{
                    backgroundColor: "rgb(41, 87, 163)",
                    color: "white",
                    float: "right",
                    padding: "10px"
                }}

                variant="contained"
                onClick={() => {
                    auth.signOut();
                }}
            >
                Sign Out
            </Button>
        </div>
    )
}

export default SignOut;
