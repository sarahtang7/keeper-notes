# Keeper Notes
This is a re-creation of Google's Keeper Notes platform using the MERN stack!
- Frontend: React
- Backend: Node, Express, MongoDB
---
**Features of the app**:
- Ability to add notes with a title and content
- Ability to delete notes
- Storage of the notes (persistent data)
- Checks to ensure that empty notes are not submitted
---
**Structure of the app**:

This full-stack app consists of `client/` and `server/` directories. The client directory contains the front-end React app. Similarly, 
the server directory contains the back-end Node & Express server files. Through the server, we are able to establish a connection
to the MongoDB database and mediate the communication between client and data storage. This ultimately allows us to have persistent data
in our Keeper app.
