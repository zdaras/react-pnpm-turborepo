# `@packages/global-types`

The `@packages/global-types` package provides shared global types that can be shared and reused in any project within the monorepo.

## Usage

To set up the `@packages/global-types` configuration, follow these steps:

1. Install the package in the desired app or package. Run the following command:

```shell
pnpm add --workspace @packages/global-types
```

2. Use types in the desired package or project.

```shell
import type { DistributiveOmit } from '@packages/global-types';
```
