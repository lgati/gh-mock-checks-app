# gh-mock-checks-app

This is a mock GitHub repository designed to simulate real-world application checks, including:

- Native GitHub Actions workflows (CI builds)
- External App Checks (e.g., Currents, Argos CI)

## Purpose

Used to test and validate GitHub Actions workflows that detect and process failed external checks.

## Structure

- `.github/workflows/` – Contains CI and external check simulator workflows.
- `src/` – Basic dummy application code.
- `package.json` – Mock project metadata and scripts.

## How It Works

Opening a Pull Request will:

1. Trigger a basic CI workflow (`ci.yml`).
2. Simulate external checks (`external-check-simulator.yml`) to fake results from apps like Currents and Argos CI.

Some simulated checks will intentionally fail to mimic real-world scenarios.

## License

MIT License
