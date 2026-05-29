# Contributing to FM2026

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/fm2026.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit with clear messages: `git commit -m 'Add feature description'`
6. Push to your branch: `git push origin feature/your-feature-name`
7. Create a Pull Request

## Code Style Guidelines

### JavaScript/React
- Use ES6+ syntax
- Follow ESLint rules
- Use functional components with hooks
- Indent with 2 spaces
- Use meaningful variable names

### Example:
```javascript
// Good
const handleStatusUpdate = async (newStatus) => {
  try {
    const response = await api.updateStatus(newStatus);
    setStatus(response.data);
  } catch (error) {
    handleError(error);
  }
};

// Bad
const handleStatusUpdate = async (s) => {
  // unclear variable name
};
```

## Commit Message Convention

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting
- `refactor:` for code restructuring
- `test:` for tests

Example: `git commit -m 'feat: add real-time status notifications'`

## Testing

- Write tests for new features
- Run tests before committing: `npm test`
- Aim for >80% code coverage

## Pull Request Process

1. Update documentation if needed
2. Add/update tests
3. Ensure all tests pass
4. Request review from maintainers
5. Address feedback
6. Merge after approval

## Reporting Bugs

1. Check if bug already exists in Issues
2. Provide detailed description
3. Include:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details

## Feature Requests

1. Check existing issues
2. Describe the feature
3. Explain use case and benefits
4. Provide mockups if applicable

## Questions?

Create a GitHub Discussion or open an issue with the `question` label.
