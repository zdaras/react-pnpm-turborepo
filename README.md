# FE monorepo

## Intro

This repository is setup in a monorepo structure and introduces some new build tools. Notable [pnpm](https://pnpm.io/) as the package manager whose configuration is stored in [`pnpm-workspace.yaml`](/pnpm-workspace.yaml) and [Turborepo](https://turbo.build/repo) as a build tool whose configuration is stored in [`turbo.json`](./turbo.json). With pnpm, we leverage the installation performance using the global store cache. Turborepo helps us to run certain tasks, and cache the result if we rerun tasks with the same input or code.

Development prerequisites:

You'll need to ensure you install the key tools that we're using before you can use this repository:

- **node v20.11.1** - 
It is recommended to use a node version manager like `nvm`, `volta` or `asdf` or you can download a node version directly [here](https://nodejs.org/en/download/ )

- **pnpm v8.14.1** -
Run `npm install -g pnpm@8.14.1`. Windows users might need to run `winget install pnpm -v 8.14.1` instead. Or see the pnpm installation docs [here](https://pnpm.io/installation).

- **turbo v1.12.4** - 
Run `npm install -g turbo@1.12.4`. Or see the turbo installation docs [here](https://turbo.build/repo/docs/installing)


## Usage

Install the dependencies:

```shell
pnpm install
```

- automatically runs recursively for the workspace, cf. https://pnpm.io/cli/install
- Alias: `pnpm i`

### Dependency Management

#### Installing dependencies to packages

Run commands in the package's directory:

##### External dependencies

```shell
pnpm add [package-name]
```

##### Other packages from monorepo

```shell
pnpm add --workspace [package-name]
```

- `--workspace` ensures that it is installed from the workspace directory.
- by default installs as `workspace:*`.

#### Installing dependencies to root

In root directory:

```shell
pnpm add -w [package-name]
```

- `-w` "enables" running this in the workspace root (otherwise forbidden to ensure that you don't accidentally install it in the workspace root)

#### Nuking your dependencies

Run `pnpm clean` from the root of the monorepo.


## Turborepo 

[Turborepo](https://turbo.build/repo) is a tool built on top of [Turbo](https://turbo.build) that provides additional features and enhancements for managing monorepos. It simplifies the management of multiple projects, their dependencies, and their interdependencies. Turborepo offers a range of features, including workspace-level scripts, dependency resolution, and version management. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

In the root of the repository we have ```.turbo/config.json``` file. By having this config it allows us to customize Turborepo's behavior for our project by specifying project-specific settings. 

### Usage

To run apps or packages scripts locally using the turborepo local cache, follow these steps:

1. Check all the available scripts inside the root package.json file.
2. Open the terminal and navigate to the root directory of the monorepo.
3. Run the following command:

```shell
pnpm [script-name]
```

Make sure to replace [script-name] with the name of the script you want to run.

After executing the command, you will see the following information in the terminal:

```shell
• Packages in scope: [list-of-packages]
• Running [script-name] in N packages
• Remote caching enabled
```

The [list-of-packages] will represent the packages in scope, and N will indicate the number of packages the script is running in.

If you are running the command for the first time, you will see cache miss, executing hash indicating that the cache is being populated. However, if you run the same command again, it will execute much faster and display cache hit, replaying output hash indicating that the cached results are being used.

