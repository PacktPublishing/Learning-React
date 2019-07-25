# Create React App

In this example we will be deploying a simple "Hello World" example with Create React App.

### Getting started with Create React App

- Start a new Create React App project:

```
npx create-react-app <project name>
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

Then we need to add a `now.json` file to specify we want to use our Platform V2.

In this case we are going to use `@now/static-build` to build and deploy our React application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "my-react-app",
    "builds": [
        { "src": "package.json", "use": "@now/static-build", "config": { "distDir": "build" } }
    ],
    "routes": [
      { "src": "/static/(.*)", "headers": { "cache-control": "s-maxage=31536000,immutable" }, "dest": "/static/$1" },
      { "src": "/favicon.ico", "dest": "/favicon.ico" },
      { "src": "/asset-manifest.json", "dest": "/asset-manifest.json" },
      { "src": "/manifest.json", "dest": "/manifest.json" },
      { "src": "/precache-manifest.(.*)", "dest": "/precache-manifest.$1" },
      { "src": "/service-worker.js", "headers": { "cache-control": "s-maxage=0" }, "dest": "/service-worker.js" },
      { "src": "/(.*)", "headers": {"cache-control": "s-maxage=0"}, "dest": "/index.html" }
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to "build" your application. By default, Create React App will output the build to the `build` directory, which is configured in the above `now.json` file.

```json
{
    "scripts": {
        ...
        "now-build": "react-scripts build"
    }
}
```

We are now ready to deploy the app.

```
now
```

For more information on deploying a CRA generated React project on Now, [read our Guide](https://zeit.co/guides/deploying-react-with-now-cra).
