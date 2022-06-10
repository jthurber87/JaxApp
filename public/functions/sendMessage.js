// const recipientForm = document.getElementById('recipientForm');
// const sendNotificationForm = document.getElementById('sendNotificationForm');
// const newRecipientInput = document.getElementById('newRecipientInput');
// const recipientList = document.getElementById('recipients');
// const resultSection = document.getElementById('resultSection');

const caregiverPhoneNumber = 9492146431;

function sendMessages() {
    const data = {
        passcode: process.env.REACT_APP_PASSCODE,
        message: "Test",
        recipients: caregiverPhoneNumber,
    };

    fetch('send-messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            if (resp.status === 401) {
                throw new Error('Invalid Passcode');
            } else {
                throw new Error(
                    'Unexpected error. Please check the logs for what went wrong.'
                );
            }
        })
}

