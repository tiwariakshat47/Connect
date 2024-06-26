# Connect
A simple app to connect UCSC students to other students in their classes. 



How to get started


Clone the project.
Make sure you have dependencies installed (Expo and Node).
CD Into the folder "ConnectApp" --> "cd ConnectApp"

add your ip address to the secrets.js file as so:
create a secrets.js file

and add the code:
// components/secrets.js
const localIp = 'YOUR IP ADDRESS GOES HERE';  // replace with your actual local IP address
export default localIp;

Run npm install
Run the backend: python backend/webscraper.py
Run npm run (ios, web, or android) or npm start
