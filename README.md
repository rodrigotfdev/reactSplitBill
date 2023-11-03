# Project Documentation

This React project creates an interface to manage a list of friends, enabling the addition of new friends, selection of friends for bill splitting, and displaying information about outstanding balances.

## Project Summary
The project comprises an application with the following functionalities:

1. **Friends List:** Displays a list of friends with their names, profile images, and information regarding owed or owed-to balances.
2. **Adding Friends:** Allows the addition of new friends to the list through a form.
3. **Friend Selection:** Enables the selection of a friend from the list for operations like bill splitting.
4. **Bill Splitting:** Upon selecting a friend, users can access a form to divide a specific bill between themselves and the selected friend.

## Key Components and Features

### 1. `App` Component
- Maintains the state of friends, controls the visibility for adding a friend, and the selected friend.
- Uses states to control the display of the add friend form, the friend list, and the bill-splitting form.
- `handleShowAddFriend()`: Toggles the visibility of the add friend form.
- `handleAddFriend(friend)`: Adds a new friend to the friends list.
- `handleSelection(friend)`: Updates the selected friend in the interface.

### 2. `Button` Component
- Reusable button component used to handle different actions within the application.

### 3. `FriendsList` Component
- Renders the list of friends received as a property.
- Passes the necessary properties to the `Friend` component for individual display of each friend.

### 4. `Friend` Component
- Renders each friend individually, displaying the name, image, balance, and a button to select the friend.

### 5. `FormAddFriend` Component
- Allows the addition of a new friend to the list.
- Contains a form with fields for the friend's name and image URL.

### 6. `FormSplitBill` Component
- Enables users to split a bill with the selected friend.
- Contains fields to input the bill value, user's expense, selected friend's expense, and a selection of who will pay the bill.

### Key Concepts Used

✅. **State (`useState`):** Used to control the display of the friends list, add friends and bill-splitting forms, and to track the selected friend.

✅. **Functional Components:** Entire code composed of React functional components, promoting modularity and code reusability.

✅. **Event Handling:** React events are utilized to handle the addition of friends, friend selection, and button actions.

✅. **Conditional Rendering:** Conditional rendering is implemented based on state to show or hide components in the user interface.

✅. **Component Communication:** Components communicate through property passing, allowing interaction between different parts of the application.

This project demonstrates a basic application that can be expanded to include more functionalities and enhancements such as managing more detailed expense information, automated calculations, and more.

## See it in practice

You can preview the application at the following link: [VERCEL LIVE APP PREVIEW](https://splitbill-phi.vercel.app/)

or clone the repository to your computer and run 'npm install' and 'npm run dev' in the terminal to open it.

## Project Images

![image](https://github.com/rodrigotfdev/reactSplitBill/assets/52326702/455fe2c2-0477-4186-9ecd-780ebebbf1d8)

