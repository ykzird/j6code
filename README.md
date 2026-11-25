<p align="center">

```
     ██╗   ██████╗
     ██║  ██╔════╝
     ██║  ███████╗
█    ██║  ██╔═══██╗
╚█████╔╝ ╚██████╔╝
 ╚════╝   ╚════╝
```

</p>

<h1 align="center">J6 Code</h1>

<p align="center">A personal, desktop-only fork of a coding-agent control plane — Windows, macOS, and Linux.</p>

> **Unofficial fork.** J6 Code is an unofficial fork of the MIT-licensed [T3 Code](https://github.com/pingdotgg/t3code) source code. It is **not** affiliated with, endorsed by, sponsored by, or maintained by T3 Tools, Inc., and is not an official T3 product in any way. The "J6" name comes from the first letter of the author's name and their favorite number, 6.

## Looking for the original?

For most people, the original project is the better choice — it has mobile apps, hosted features, releases, and an active community:

👉 **[github.com/pingdotgg/t3code](https://github.com/pingdotgg/t3code)**

This repository exists for personal use: a desktop-only build with telemetry removed.

## License and trademarks

The source code in this repository is licensed under the [MIT License](./LICENSE). The copyright and permission notice in `LICENSE` is retained as the license requires.

The MIT license applies to the source code only. The **J6 Code** name and branding are this project's own; see [TRADEMARK.md](./TRADEMARK.md). "T3 Code" and related marks belong to T3 Tools, Inc. and are used here only in the factual attribution above.

## Status

- Desktop apps for Windows, macOS, and Linux (`apps/desktop`, backed by the local server in `apps/server` and the UI in `apps/web`)
- No product telemetry or analytics — nothing is sent anywhere; see the FAQ in [docs](./docs/README.md)
- No releases are published from this fork; build from source if you want to try it

## Development

```bash
pnpm install
pnpm dev:desktop
```

See [docs/](./docs/README.md) and [AGENTS.md](./AGENTS.md) for internals.
