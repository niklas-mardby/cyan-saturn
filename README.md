# cyan-saturn

Experiment repo for React and micro-frontend

Repo: https://github.com/niklas-mardby/cyan-saturn

# Stack

- Typescript
- React
- SCSS
- Vite, vite-plugin-federation

# Setup

git clone https://github.com/niklas-mardby/cyan-saturn.git

Run yarn in folders cyan-saturn, cyan and saturn.

Run yarn build && yarn preview in folders cyan and saturn. You will need two terminals.

Open http://localhost:5000/ to view cyan-saturn

Open http://localhost:5001/ to view saturn

# Missing features to add

- auto reload (right now you need to stop the preview with ctrl + C, then yarn build && yarn preview again)
- routing
- global/local store

<!--

Niklas Notes

yarn create vite

Give name cyan
Choose React, then Typescript

cd cyan
yarn

yarn add -D sass

rename *.css to *.scss

Run with yarn dev

repeat for saturn

--------------------------------------------

in folder cyan and saturn run

yarn add @originjs/vite-plugin-federation --dev

update vite config for cyan to make it a host and saturn to make it a remote

-->
