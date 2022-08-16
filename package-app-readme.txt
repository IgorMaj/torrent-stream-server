These two parts:

"pkg" : {
     "assets" : [
        "lib/**/*",
        "frontend/build/**/*",
        "openapi.yaml"
      ]
   },

...
"files": [
        "lib/**/*",
        "frontend/build/**/*",
        "openapi.yaml"
    ],
...

Of package.json need to be synced for everything to work.
These two commands may also need to be run:
npm install
npm run build
