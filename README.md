# Tim Dobson's CV Website

This is the source code for [cv.tdobson.net](https://cv.tdobson.net) - a modern, responsive CV/resume website built with Next.js and Mantine.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Mantine](https://mantine.dev/) - React components library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Biome](https://biomejs.dev/) - Linting and formatting
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting and deployment

## Project Structure

### Core Content
- `components/CV/CV.tsx` - Main CV component containing all content
- `pages/index.tsx` - Next.js page that renders the CV component
- `pages/_app.tsx` - Next.js app wrapper with Mantine provider
- `pages/_document.tsx` - Custom document for Mantine setup

### Configuration
- `theme.ts` - Mantine theme customization
- `biome.json` - Biome linting and formatting rules
- `next.config.js` - Next.js configuration

### Testing & Development
- `test-utils/` - Testing utilities and setup
- `.storybook/` - Storybook configuration
- `jest.config.cjs` - Jest testing configuration

## Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Format code
yarn format

# Run tests
yarn test

# Build for production
yarn build
```

## Deployment

The site is deployed to Cloudflare Pages using GitHub Actions. The deployment workflow is:

1. Push changes to main branch
2. GitHub Actions runs tests and builds the site
3. Cloudflare Pages deploys the built site

To deploy manually:

```bash
yarn deploy
```

This will build the site and deploy to Cloudflare Pages using Wrangler.

## Content Management

The CV content is managed in several key files:

- `components/CV/CV.tsx` - Main CV content and structure
- `public/testimonials/` - Reference photos
- `public/projects/` - Project screenshots and demos

## Features

- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡️ Fast page loads with Next.js
- 🎨 Clean UI with Mantine components
- 📊 Project portfolio section
- 💬 Testimonials from references
- 🔍 SEO optimized

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Tim Dobson - [@tdobson](https://github.com/tdobson) - cv@tdobson.net

Project Link: [https://github.com/tdobson/cv.tdobson.net](https://github.com/tdobson/cv.tdobson.net)
