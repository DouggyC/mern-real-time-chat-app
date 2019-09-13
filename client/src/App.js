import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import './App.css';

const App = () => {
  const [msg, setMsg] = useState([
    { name: 'User1', msgBody: 'Hello' },
    { name: 'User2', msgBody: 'Hi' },
    { name: 'User1', msgBody: 'How are you?' }
  ]);

  const [name, setName] = useState('');
  const [msgBody, setMsgBody] = useState('');

  const addMsg = (name, msgBody) => {
    setMsg([...msg, { name, msgBody }]);
    console.log(msg);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name && !msgBody) return;
    addMsg(name, msgBody);
    setName(''); // reset form field to ''
    setMsgBody(''); // reset form field to ''
  };

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Real Time Chat App</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <br />
            {/*  */}
            <textarea
              className="form-control"
              id="message"
              placeholder="Message"
              value={msgBody}
              onChange={e => setMsgBody(e.target.value)}
            ></textarea>
            <br />
            {/*  */}
            <button type="Submit" className="btn btn-success" id="send">
              Send
            </button>
          </form>
          <p>
            Data Binding Test :: {name}, {msgBody}
          </p>
        </div>
        {/*  */}
        <div className="card" id="card-group">
          {msg.map((m, i) => (
            <div
              id="chat-group"
              className="card-body border border-dark rounded py-1 mb-2"
              key={i}
            >
              <div className="card-title px-3 mb-0">{m.name}</div>
              <div className="card-text bg-info rounded px-3">{m.msgBody}</div>
              <div className="card-text">
                <small className="text-muted">
                  <Moment format="h:mm a" className="px-3"></Moment>
                </small>
              </div>
            </div>
          ))}
          {/* s */}
        </div>
      </div>
    </div>
  );
};

export default App;
