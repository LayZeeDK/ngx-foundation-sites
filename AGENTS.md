# GitHub Copilot Coding Agent and Agent Mode

This document provides guidance on using GitHub Copilot Coding agent and Agent mode in VS Code with the ngx-foundation-sites project.

## Overview

GitHub Copilot offers two primary modes for enhanced development assistance:

1. **GitHub Copilot Coding Agent** - AI-powered code completion and generation
2. **Agent Mode in VS Code** - Interactive AI assistant for development tasks

## Prerequisites

- GitHub Copilot subscription (individual, business, or enterprise)
- Visual Studio Code with GitHub Copilot extension
- Node.js 18.15.0 (as specified in `.nvmrc`)
- Yarn 1.22.19 (as specified in `package.json`)

## Project Setup

### Environment Setup

This project uses specific versions of Node.js and Yarn for consistency:

```bash
# Use the project's Node.js version
nvm use 18.15.0

# Verify versions
node --version  # Should be 18.15.0
yarn --version  # Should be 1.22.19
```

### Installation

```bash
# Install dependencies (frozen lockfile for consistency)
yarn install --frozen-lockfile

# Verify installation
yarn build
yarn test
```

## GitHub Copilot Integration

### VS Code Extensions

Install the following extensions:

1. **GitHub Copilot** - Core AI code completion
2. **GitHub Copilot Chat** - Interactive AI assistance
3. **GitHub Copilot Labs** - Experimental features (optional)

### Configuration

Add the following to your VS Code `settings.json`:

```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false
  },
  "github.copilot.inlineSuggest.enable": true,
  "github.copilot.advanced": {
    "listCount": 10,
    "inlineSuggestCount": 3
  }
}
```

## Agent Mode Usage

### Starting Agent Mode

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "GitHub Copilot: Open Chat"
3. Use the chat panel for interactive assistance

### Common Commands

- `@workspace` - Ask questions about the workspace
- `@terminal` - Get help with terminal commands
- `@vscode` - VS Code specific assistance

### Project-Specific Prompts

When working with this Angular/Nx workspace, use these context-aware prompts:

```
Generate a new Angular component for Foundation Sites
Help me create a Storybook story for the card component
Explain the Nx workspace configuration
Generate unit tests for the progress bar component
```

## Best Practices

### Code Generation

1. **Be Specific**: Provide clear context about the component type (Angular, Foundation Sites)
2. **Include Dependencies**: Mention required imports and dependencies
3. **Follow Patterns**: Reference existing components in the project

Example prompt:
```
Create an Angular component for a Foundation Sites button that follows the existing component pattern in this project, including proper typing and Storybook integration.
```

### Testing

1. **Test Generation**: Ask Copilot to generate tests that match existing patterns
2. **Coverage**: Request tests for edge cases and accessibility
3. **Mock Setup**: Get help with proper mocking for Angular services

### Documentation

1. **Component Docs**: Generate JSDoc comments for components
2. **README Updates**: Keep documentation current with code changes
3. **Story Documentation**: Maintain Storybook story descriptions

## Workspace Context

### Project Structure

```
packages/
├── ngx-foundation-sites/        # Main library
├── ngx-foundation-sites-e2e/    # E2E tests
└── storybook/                   # Storybook utilities
```

### Key Technologies

- **Angular 15.0.4** - Component framework
- **Foundation Sites 6.7.5** - CSS framework
- **Nx 15.8.9** - Workspace management
- **Storybook** - Component documentation
- **Jest** - Unit testing
- **Cypress** - E2E testing

### Available Scripts

```bash
yarn build          # Build the library
yarn test           # Run unit tests
yarn lint           # Lint the code
yarn start          # Start Storybook
yarn e2e            # Run E2E tests
yarn format         # Format code
```

## Troubleshooting

### Common Issues

1. **Version Mismatch**: Ensure Node.js 18.15.0 and Yarn 1.22.19
2. **Cache Issues**: Clear `node_modules` and reinstall
3. **Build Errors**: Run `yarn build` before testing components

### Getting Help

1. Use `@workspace` in Copilot Chat for project-specific questions
2. Reference existing components for patterns
3. Check the CI workflow in `.github/workflows/ci.yml` for build steps

## Security Considerations

- Review generated code before committing
- Ensure sensitive data is not included in prompts
- Follow the project's existing security patterns
- Use the project's linting rules to validate generated code

## Contributing

When using Copilot to contribute:

1. Follow the existing code style and patterns
2. Generate appropriate tests for new features
3. Update documentation and stories as needed
4. Run the full CI pipeline locally before submitting PRs

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot Best Practices](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)
- [VS Code GitHub Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Foundation Sites Documentation](https://get.foundation/sites/docs/)
- [Angular Documentation](https://angular.io/docs)
- [Nx Documentation](https://nx.dev/getting-started/intro)