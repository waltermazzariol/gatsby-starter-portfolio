#Gatsby Starter for portfolio showcase

Gatsby implementation of [Wansite Starter](https://modest-villani-fa0160.netlify.app/) template.

[**Demo Website**](https://modest-villani-fa0160.netlify.app/)

## 🔥 Features

- [React Bootstrap](https://react-bootstrap.github.io)
- [GitHub Actions](https://github.com/features/actions)
- [React Scrollspy | scroll](https://github.com/makotot/react-scrollspy)
- [react-reveal | Animation effects](https://www.react-reveal.com/)
- [React ga | Google Analytics](https://github.com/react-ga/react-ga)
- [Cookies consent](https://www.npmjs.com/package/react-cookie)

### Other Features

- Gallery Modal
- Json Data
- Sass

## 🛩 Getting Started

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the starter project.
    
    ```sh
    gatsby new project-name https://github.com/waltermazzariol/starter-wansite
    ```

2.  **Start your project.**

    Go into site’s directory and start it up!.

    ```sh
    cd project-name
    gatsby develop
    ```

### GitHub Actions x GitHub Pages

This project also contains an example of [GitHub Actions](https://github.com/features/actions) deployment to [GitHub Pages](https://pages.github.com). View the [`deploy.yml`](https://github.com/JohnJKerr/gatsby-creative/blob/master/.github/workflows/deploy.yml) for the build definition.

The build process deploys to a folder rather than the root, and therefore uses the `--pages-prefix` flag in the build step and `pathPrefix: '/gatsby-creative'` in [`gatsby-config.js`](https://github.com/JohnJKerr/gatsby-creative/blob/master/gatsby-config.js).

#### Access Token

If you wish to use the GitHub Actions workflow to deploy to GitHub Pages you will need to add an `ACCESS_TOKEN` secret to your repository

Go to https://github.com/settings/tokens to generate a Personal Access Token and add it to your account. The token will need the following permissions:

- repo
- read:packages
- write:packages

Make a copy of your token as you will not be able to access it again.

Return to your repository, go to settings and add a secret with the name `ACCESS_TOKEN`.

The Action will then deploy your site to `{your-github-pages-url}/{your-repository}`.
 
#### Not Using GitHub Pages?

If you do not wish to use GitHub Pages, simply remove the `/.github/workflows/deploy.yml` file.