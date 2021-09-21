<p align="center">

  <a href="http://simple-banking-webapp.herokuapp.com/"><h1 align="center">banking website</h1></a>

  <p align="center">
    A simple banking website to transfer money and track those transactions between users.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

You can create new users and set a balance in their account. You can transfer this amount between users. Before completing transaction the 
system will check the balance in the senders account and on completing the transaction the change in balance will be updated in both sender and 
receivers account. A record of all such transactions are maintained by the system.</br>

### Built With

A list of technologies used in the project.
* [MongoDb](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may set up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this project locally [Node.js](https://nodejs.org/en/) must be installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Nidhish-Mehra/excalidraw-task-manager.git
   ```
2. Install Client and Server dependencies in respective directories
   ```sh
   npm install
   ```
3. Add MONGOURI in dev.js to connect to database
   ```javascript
   module.exports={
    MONGOURI:"YOUR_MONGO_URI"
   }
   ```
4. Start node server
   ```sh
   node app
   ```
5. Start client server
   ```sh
   npm start
   ```
   
<!-- USAGE EXAMPLES -->
## Usage
* In the "all users" tab you can see all the users present in the system and their current balance.
* In the "Transfer" tab you can select sender, receiver and the amount to be transferred. If every thing checks out, the updated balance will be reflected in the "All Users" tab.
* In the "Transactions" tab you can see a record of all the transactions that have taken place.

If you wish to check out this web-app.<br> You can visit http://simple-banking-webapp.herokuapp.com/

   
