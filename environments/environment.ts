// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBQl18C6SYdlJ7MMl6-eVv8nTkyUMzv3M0',
    authDomain: 'my-search-todo.firebaseapp.com',
    databaseURL: 'https://my-search-todo.firebaseio.com',
    projectId: 'my-search-todo',
    storageBucket: '',
    messagingSenderId: '770562667347'
  }
};
