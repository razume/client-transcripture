# Scribe
This project is the front end code for our Zoom Transcription Service which we call Scribe.
Scribe allows users to access their recorded zoom meetings and view their transcriptions as well as view reports for the users' meetings (average meeting length, number of meetings, percentage of filler words used)

## Tech Stack
ReactJs, Material UI, ExpressJS, NodeJs, MongoDB

## Process 
Scribe uses Zoom's OAuth process for Authentication and then pulls the users' Zoom meetings from Zoom's API and encodes them from .m4a files into .wav files and then sends them to the Google Speech to text api where it is transcribed and returned. We then write the transcription to a file and this is put in a MongoDB Database. The front end uses ReactJS and updates the frontend state based on updates to the MongoDB Database.

### Prod
https://client-transcipture.herokuapp.com/

![frontpage](https://user-images.githubusercontent.com/38148103/82002595-2adbd980-962c-11ea-9c78-ae1acc580675.PNG)

Logged IN: 
![logged in](https://user-images.githubusercontent.com/38148103/82003249-e5201080-962d-11ea-99b2-ec2810dffeed.PNG)
![remit viewer](https://user-images.githubusercontent.com/38148103/82003278-f2d59600-962d-11ea-8c9d-9a24283ec5a2.PNG)
![reports](https://user-images.githubusercontent.com/38148103/82003279-f406c300-962d-11ea-800f-97f7238a3e81.PNG)


## Trello
https://trello.com/b/FrUwnrJ4/dank-tank-capstone

## To Start
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## GitHub backend
https://github.com/tannerbyers/TranBackend

run `npm run start:dev` on Windows to run development build
and `npm run start:dev:linux` on Mac 

#### Uses Zoom OAuth for Login and Verification 

![oauth](https://user-images.githubusercontent.com/38148103/82003216-ca4d9c00-962d-11ea-92da-1bef25d3609a.PNG)

