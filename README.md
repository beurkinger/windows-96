
# preact-starter-kit
Some boilerplate code to kickstart Preact-based projects. 

Features :
- **Webpack** and **Preact**, configured and ready to go
- Strong typing thanks to **TypeScript**
- JS linting through **ESlint** and **Prettier**
- Support of **CSS Modules** and **CSS Variables** for component styling
- JS and CSS backward compatibility with older browsers through transpiling to ES5 + use of **PostCSS** and **PostCSS-Preset-Env**
- Lightning-fast deployment to Github Pages thanks to **gh-pages**
- Automated customization of the config file values

## How to use it (the easy way)
1. Simply click the `use template` button on the GitHub interface to create a new repository based on this one.
2. See the *Automatically update the project configuration to your own values* section below.

## How to use it (the hard way)
1. Create a new repository for your project.
2. Open Terminal
3. Create a bare clone of the `preact-starter-kit` repository.
```shell
$ git clone --bare https://github.com/beurkinger/preact-starter-kit.git
```
4. Mirror-push to the new repository.
```
$ cd old-repository.git
$ git push --mirror https://github.com/exampleuser/new-repository.git
```
5. Remove the temporary local repository you created earlier.
```
$ cd ..
$ rm -rf old-repository.git
```
6. See the "Automatically update the project configuration to your own values" section below.

## Automatically update the project configuration to your own values
1. After making a local copy of your new repository, open Terminal
2. Move to the local repository and run the `update-config` script.
```shell
$ cd ./my-new-repository
$ npm run update-config
```