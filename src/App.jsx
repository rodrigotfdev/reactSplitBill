import React, { useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleAddFriend(){
    setShowAddFriend((show) => !show)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleAddFriend}>{showAddFriend == false ? `Add friend` : `Close`}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <div>
      <button className="button" onClick={onClick}>{children}</button>
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friendObj={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friendObj }) {
  return (
    <li>
      <img src={friendObj.image} alt={friendObj.name} />
      <h3>{friendObj.name}</h3>
      {friendObj.balance < 0 && (
        <p className="red">
          You owe {friendObj.name} ${Math.abs(friendObj.balance)}
        </p>
      )}
      {friendObj.balance > 0 && (
        <p className="green">
          {friendObj.name} owes you ${Math.abs(friendObj.balance)}
        </p>
      )}
      {friendObj.balance === 0 && <p>You and {friendObj.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👦🏻/👩🏻 Friend Name</label>
      <input type="text" />

      <label>🌆 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}



function FormSplitBill({}) {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with x</h2>
      <label>💸 Bill value</label>
      <input type="text" />

      <label>👦🏻 Your expense</label>
      <input type="text" />

      <label>👩🏻 X's expense</label>
      <input type="text"  disabled/>

      <label>🤑 Who's paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
