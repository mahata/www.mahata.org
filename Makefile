pre-commit:
	@echo "Running pre-commit hooks"
	pnpm run lint
	pnpm run build
