# `@packages/tsconfig`

The `@packages/tsconfig` package provides a base shared tsconfig.json file that serves as a foundation for other tsconfig.json files within the monorepo.

## Usage

To set up the `@packages/tsconfig` configuration, follow these steps:

1. Install the package in the desired app or package. Run the following command:

```shell
pnpm add --workspace @packages/tsconfig
```

2. Create or open your `tsconfig.json` file in the desired package or project.

3. Use the following setup:

```shell
{
  "extends": "@packages/tsconfig/tsconfig.settings.json",
  "compilerOptions": {
    // Additional compiler options...
  },
  // Other configuration options...
}
```

The extends property is used to inherit settings from the `tsconfig.settings.json` file provided by the `@packages/tsconfig` package. This allows for consistent configuration across the monorepo.

Feel free to add additional compiler options or customize the configuration as needed.

By utilizing `@packages/tsconfig`, you ensure consistent TypeScript configuration across different apps and packages within the monorepo. Any changes or updates made to the shared configuration will automatically apply to all inheriting tsconfig.json files.
