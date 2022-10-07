# React Sandbox 🖼

This is a sample project for testing lastests versions of MUI, Redux Toolkit, React Testing Library and more.

## Backend Setup ⚙️

Run `npm install` in the `backend` folder to install the server dependencies.
Run `npm start` in the `backend` folder to start the server.
You should see something like: `Listening on Port: 5001`
Now you can start building your application in the `FE` folder.
API Routes:

## Frontend Setup 🛠

It is just a CRA project.

```bash
npx create-react-app free-now-test-frontend --template typescript
cd free-now-test-frontend
npm start
```

#### Get a list of all CITY bus stops:

/city/bus-stops

#### Get a list of all METROPOLITAN bus stops:

/metropolitan/bus-stop

For example, to get the METROPOLITAN busStops, you can call: http://localhost:5001/metropolitan/bus-stops
