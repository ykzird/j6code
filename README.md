<p align="center">
  <a href="https://github.com/ykzird/j6code">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="J6 Code logo" />
  </a>
</p>

<h1 align="center">J6 Code</h1>

<p align="center">The open-source control plane for coding agents.</p>

> **Unofficial fork.** J6 Code is an unofficial fork of the MIT-licensed T3 Code source code. It is **not** affiliated with, endorsed by, sponsored by, or maintained by T3 Tools, Inc., and is not an official T3 product in any way. The "J6" name comes from the first letter of the author's name and their favorite number, 6.

<p align="center">
  <a href="https://github.com/ykzird/j6code/releases"><strong>Download</strong></a> ·
  <a href="https://github.com/ykzird/j6code">Source</a> ·
  <a href="./docs/README.md">Docs</a> ·
  <a href="https://github.com/ykzird/j6code/discussions">Discussions</a>
</p>

<p align="center">
  <a href="https://github.com/ykzird/j6code">
    <img src="./.github/readme/hero.webp" width="100%" alt="J6 Code on desktop with a finished Claude thread, next to the phone app asking to approve a command from Codex" />
  </a>
</p>

J6 Code runs the coding agents on your machine and gives them one fast interface. Start a thread at your desk, then approve the next step from your phone.

It works with Claude Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, and any [ACP](./docs/user/providers-acp.md) agent. If an agent is set up on your computer, J6 Code can control it.

## What you get

- **Your subscriptions.** J6 Code does not resell tokens. It drives the agents you are already signed in to.
- **Every agent in one place.** Change models in the middle of a thread. Let Claude hand a task to Codex.
- **Desktop, web, and phone.** One server, and every client shows the same threads. There are apps for iOS and Android.
- **Remote ready.** Run agents on any machine. Connect over your local network, Tailscale, or [J6 Connect](./docs/user/remote-access.md).
- **Git built in.** Each thread can work in its own worktree. Review the diff, then commit, push, and open a pull request with one button.
- **Fast.** Performance is a feature here. We measure it, and we treat a dropped frame as a bug.
- **Open.** Source code is MIT licensed. If you don't like something, fork it under your own branding (see [Trademarks and forks](#trademarks-and-forks)).

## Install

### Desktop app

Download J6 Code for macOS, Windows, or Linux from [GitHub Releases](https://github.com/ykzird/j6code/releases). Package-manager listings (Homebrew, winget, AUR, etc.) are published under the J6 name as they become available.

### Command line

This installs the `j6` command. Run `j6` to start the server and open the web app.

```bash
curl -fsSL https://raw.githubusercontent.com/ykzird/j6code/main/scripts/install.sh | sh
```

On Windows, in PowerShell:

```powershell
irm https://raw.githubusercontent.com/ykzird/j6code/main/scripts/install.ps1 | iex
```

To try it once without an install, run `npx j6@latest`.

### Phone

Mobile apps are in development; watch [GitHub Releases](https://github.com/ykzird/j6code/releases). Meanwhile, follow [remote access](./docs/user/remote-access.md) to drive J6 Code from your phone's browser.

### Sign in to an agent

J6 Code needs one agent that is installed and signed in. For example, install [Claude Code](https://claude.com/product/claude-code) and run `claude auth login`, or install [Codex CLI](https://developers.openai.com/codex/cli) and run `codex login`.

[Provider setup](./docs/user/install.md#providers) has the steps for each agent. [Install J6 Code](./docs/user/install.md) covers nightly builds, AppImage, WSL, and NixOS.

## "Wait, what are you selling me?"

Nothing. We built J6 Code because we wanted the best possible development experience with agents. We were inspired by existing solutions like the Codex desktop app, Conductor, Claude Desktop and Cursor Glass, but none met our bar.

We wanted something performant, remote-ready, and truly open. If we ever go the wrong direction, we want you to have everything you need to fork the source code and build the tool that you want, under your own name and branding.

## Documentation

- [Install and first run](./docs/user/install.md)
- [Remote access from a phone or another machine](./docs/user/remote-access.md)
- [Permission modes](./docs/user/permission-modes.md)
- [Source control](./docs/user/source-control.md)
- [Connect outside agents over MCP](./docs/user/outside-agents.md)
- [FAQ](./docs/user/faq.md)

[All docs](./docs/README.md) has the full list.

## Contributing

We have limited review capacity. Small, focused fixes are the most likely to be merged. Features need an approved discussion first.

- Read [CONTRIBUTING.md](./CONTRIBUTING.md) before you report a bug or open a pull request.
- Put feature requests in [Ideas](https://github.com/ykzird/j6code/discussions/categories/ideas).
- Build from source with the [development runbook](./docs/operations/00_development.md#first-checkout). The [architecture overview](./docs/internals/01_architecture.md) explains how it works.
- Get help in [Discord](https://discord.gg/jn4EGJjrvv).

## License

The source code in this repository is licensed under the [MIT License](./LICENSE).

## License and forks

The source code in this repository is licensed under the [MIT License](./LICENSE). The copyright and permission notice in `LICENSE` must be retained in all copies or substantial portions of the software, as the license requires.

J6 Code is an independent, unofficial project: an unofficial fork based on the T3 Code source code, distributed under the MIT License. It is not affiliated with or endorsed by T3 Tools, Inc. If you fork or redistribute it, keep the `LICENSE` file intact and use your own branding for anything you publish — see [TRADEMARK.md](./TRADEMARK.md) for the details.
