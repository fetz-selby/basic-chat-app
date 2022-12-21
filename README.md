## About

This is a simple chat application built with create-react-app.

It leverages the API from
from [doodle](https://chatty.doodle-test.com/api/chatty/v1.0). The API must be used along with a token. And the token is provided by doodle.

## Technology

This is a [cra](https://create-react-app.dev/) application which uses [Material UI](https://mui.com/)
for some of the base UI components. [Zustand](https://www.npmjs.com/package/zustand) is used for state management.

##### NB: Configurations [`/src/appConstants.ts`]

Modify the appConstants file constants to suite your config.

## Getting Started

First, run the development server:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design

Design file is design.dio, and can be viewed with design.io
<img width="709" alt="Screenshot 2022-12-20 at 22 49 18" src="https://user-images.githubusercontent.com/6938921/208774766-8aef2119-f1bf-47fb-8701-6cd150a9a361.png">

## Recommended Improvements / Suggestions

API response should return latest entries first(Stack DS), and the API should support pagination.
Also, if the API supports websockets, we could use that to get the latest messages without having to pull from the API.

## TODO

- [ ] Automatic scrolling to the bottom of the chat
- [ ] Properly styled error messages :)
- [ ] Create a UI for setting the author, starting-timestamp, and token
