import {useEffect, useState} from "react";
import Pusher from "pusher-js";

function Message(id) {
    console.log("chat_id is :",id.id);
    const [username, setUsername] = useState('username');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let allMessages = [];
    const chat_id = id.id
    useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('86ca170c04b49cd2bc4d', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe(`chat_${chat_id}`);
        channel.bind('message', function (data) {
            allMessages.push(data);
            setMessages(allMessages);
            console.log("Messageeeeeeeeeeesssss",data);
        });
    }, []);
    
    const submit = async e => {
        e.preventDefault();
        await fetch('http://localhost:8001/api/messages', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });
        setMessage('');
    }
    console.log("messagessssssss",messages);
    return (
        <div className="w-2/4 p-4 container"> 
    <div className="flex flex-col h-screen bg-white">
        <div className="flex-shrink-0 p-3 border-b">
            <input
                className="text-lg font-semibold border-b-2 border-blue-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
        </div>
        <div className="flex-1 overflow-y-auto">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className="p-4 border-b flex items-start justify-between"
                >
                    <div className="flex items-center">
                        <strong className="mr-2">{message.username}</strong>
                        <span className="text-sm text-gray-500">{message.timestamp}</span>
                    </div>
                    <div className="text-sm text-gray-800">{message.message}</div>
                </div>
            ))}
        </div>
        <form onSubmit={(e) => submit(e)} className="p-3 border-t">
            <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Write a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </form>
    </div>
</div>
    );
}

export default Message;