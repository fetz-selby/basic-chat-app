## About

This is a simple chat application built with create-react-app.

It leverages the API from
from [doodle](https://chatty.doodle-test.com/api/chatty/v1.0). The API must be used along with a token. And the token is provided by doodle.

## Technology

This is a [cra](https://create-react-app.dev/) application which uses [Material UI](https://mui.com/)
for some of the base UI components. [Zustand](https://www.npmjs.com/package/zustand) is used for state management.

## Getting Started

First, run the development server:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design

Design file is design.dio, and can be viewed with design.io
<img width="689" alt="Screenshot 2022-11-30 at 16 15 50" src="https://user-images.githubusercontent.com/6938921/204844971-43724843-7953-4cd2-b440-f661fca68cf3.png">

## TODO

- [ ] Automatic scrolling to the bottom of the chat
- [ ] Create a UI for setting the author, starting-timestamp, and token
