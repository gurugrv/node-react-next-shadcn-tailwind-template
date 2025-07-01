# Next.js Starter Template

A modern, production-ready starter template built with the latest stable versions of Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Next.js 15** - Latest version with App Router, Server Components, and Turbopack
- **React 19** - Latest stable React with concurrent features
- **TypeScript** - Strict mode enabled with optimized configuration
- **Tailwind CSS v4** - Latest version with native CSS variables and improved performance
- **shadcn/ui** - Beautiful, accessible components with dark mode support
- **ESLint & Prettier** - Code formatting and linting setup
- **Path Aliases** - Clean imports with `@/` prefix
- **Theme System** - Light/dark mode with system preference detection

## 📦 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **State Management:** React hooks
- **Form Handling:** React Hook Form + Zod validation
- **Development:** Turbopack, ESLint, Prettier

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd node-react-next-shadcn-tailwind
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Clean build artifacts

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── header.tsx     # Site header
│   └── theme-toggle.tsx
├── constants/         # App constants
├── context/          # React contexts
├── hooks/            # Custom hooks
├── lib/              # Utility functions
└── types/            # TypeScript type definitions
```

## 🎨 Customization

### Theme Configuration

The theme system uses CSS variables defined in `src/app/globals.css`. Customize colors by modifying the CSS variables in the `:root` and `.dark` selectors.

### Adding Components

Add new shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

### Path Aliases

Configured aliases in `tsconfig.json`:
- `@/*` - Maps to `./src/*`
- `@/components/*` - Maps to `./src/components/*`
- `@/lib/*` - Maps to `./src/lib/*`
- `@/hooks/*` - Maps to `./src/hooks/*`
- `@/types/*` - Maps to `./src/types/*`

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

This template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
