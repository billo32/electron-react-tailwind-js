# Electron Boilerplate with React 18, Tailwind and JS

This is simple template (boilerplate) for your first [Electron.js](https://www.electronjs.org/) app. Made with [electron-forge](https://www.electronforge.io/).

- React@18.2.0
- Electron-forge@6.4.2
- Tailwindcss@3.3.5

### Install & run

1. git clone https://github.com/billo32/electron-react-tailwind-js.git my-app
2. cd my-app
3. npm install
4. npm start

### Build APP

Open teminal and do (it will make app for same platform like your current machine). For more check [instruction](https://www.electronforge.io/cli#package)

```bash
npx electron-forge package
npx electron-forge make
npx electron-forge publish
```

After this check **/out** dir

### Issues

##### HTTP requests & CORS

If you going to do some HTTP request from useEffect ([actually thats incorrect way, but ok...](https://react.dev/reference/react/useEffect#what-are-good-alternatives-to-data-fetching-in-effects)), you probably will get some CORS issue.

For fix, you can use this workaround [https://stackoverflow.com/a/70137354](https://stackoverflow.com/a/70137354)

Put next string

```
devContentSecurityPolicy: "connect-src 'self' https://some_url.com 'unsafe-eval'",
```

in forge.config.js

```JS
    ...
    {
      name: "@electron-forge/plugin-webpack",
      config: {
        mainConfig: "./webpack.main.config.js",
        devContentSecurityPolicy:
          "connect-src 'self' https://jsonplaceholder.typicode.com 'unsafe-eval'",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/renderer.js",
              name: "main_window",
              preload: {
                js: "./src/preload.js",
              },
            },
          ],
        },
      },
    },
    ...
```
