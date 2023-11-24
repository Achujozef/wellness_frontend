import React, { useEffect, useState } from 'react'
// import { Common } from '@zegocloud/zimkit-vue';
// import { ZIMKitManager } from '@zegocloud/zimkit-vue';
// import '@zegocloud/zimkit-vue/index.css';
// import { APP_ID, APP_SECRET } from './constants';
// import { useDispatch, useSelector } from "react-redux";

function Chat() {
    // const users = useSelector((state) => state.users);
    // const name = users?.name?.toString() || 'DefaultName';

    // const [state, setState] = useState(
    //     {
    //         appConfig: {
    //             appID: APP_ID,        // The AppID you get from the ZEGOCLOUD admin console.
    //             serverSecret: APP_SECRET // The serverSecret you get from ZEGOCLOUD Admin Console.
    //         },
    //         // The userID and userName is a strings of 1 to 32 characters.
    //         // Only digits, letters, and the following special characters are supported: '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '`', ';', '’', ',', '.', '<', '>', '/', '\'
    //         userInfo: {
    //             // Your ID as a user.
    //             userID: users.id,
    //             // Your name as a user.
    //             userName: name,
    //             // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
    //             userAvatarUrl: users?.image
    //         },
    //     }
    // )
    // useEffect(() => {
    //     const init = async () => {
    //         const zimKit = new ZIMKitManager();
    //         const token = zimKit.generateKitTokenForTest(
    //             state.appConfig.appID,
    //             state.appConfig.serverSecret,
    //             state.userInfo.userID
    //         );
    //         await zimKit.init(state.appConfig.appID);
    //         await zimKit.connectUser(state.userInfo, token);
    //     };
    //     init();
    // }, []);

    return (
    <div>Chat
         {/* <Common></Common>  */}
    </div>
    );
}

export default Chat;