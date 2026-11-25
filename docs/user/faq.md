# FAQ

## Is J6 Code a harness?

No. A harness is what turns an LLM into an agent: it gives the model tools, a way to call them, runs them, and hands the results back. Claude Code is kind of a harness. It is an interface (the TUI, the Code tab in the desktop app) plus a harness underneath (the Anthropic Agent SDK). Codex is the same split: the app plus the Codex App Server. J6 Code uses those harnesses. It is not a harness, and it does not work without one.

Chef = LLM. Kitchen = harness. J6 Code = the restaurant that lets you bring whatever kitchen you want. Our MCP is a cookbook we hand the kitchen, but the chef won't open it unless you tell them to :) I wrote the long version here: [What is a harness?](https://j6.gg/blog/post/what-is-a-harness)

Bring your own: Claude Code, Codex, Cursor, Grok Build, OpenCode, Google Antigravity, Kiro, Pi, Muse Code, or fx. [Provider setup](./install.md#providers)

## Why use J6 Code instead of Claude Code or the Codex app?

We were inspired by the Codex desktop app, Conductor, Claude Desktop, and Cursor Glass, but none met our bar. What you get:

- Bring your own sub. Claude, Codex, and whatever else you already have installed.
- Best in class remote. Run `j6 up` on any box and drive it from anywhere.
- Best in class mobile app.
- Truly 100% open source code (MIT). If we go the wrong direction, fork it under your own branding.

Every harness feels nearly identical in here, so you can stop worrying about harnesses and focus on building :) [Install](./install.md)

## Can I use J6 Code with my Claude Code subscription?

Yes.

## How much does J6 Code cost?

Nothing. There's no way to pay us to use J6 Code. You bring your own sub. The source code is free and open source (MIT). You still pay your provider like you already do. J6 Connect is free too, for now. Every account can connect up to 3 machines running J6 Code. Phones and browsers that connect to them do not count. Need more? Link a paid J6 Chat account. [More machines](#can-i-connect-more-than-3-machines-with-j6-connect) We don't want to charge for this, but if the bill gets unacceptable we may have to change course. If you hit limits or have issues, you can always fork the source code (under your own branding), self host, or use Tailscale. [Install](./install.md)

## Can I fork or redistribute J6 Code?

Yes, for the source code. The [MIT License](../../LICENSE) applies only to the source code, not to the J6 Code name, wordmark, logos, or branding. If you publish a fork or custom build, you must replace J6 Code's branding with your own and make it unmistakably clear that your project is unofficial and not affiliated with J6, Inc. Using the J6 Code name, wordmark, logo, or branding without being explicitly clear that your project is unofficial, or indicating that an unofficial project is an official version of J6 Code, is unlawful and will be pursued to the full extent of the law. See [TRADEMARK.md](../../TRADEMARK.md).

## Can I connect more than 3 machines with J6 Connect?

Yes. Link your J6 Chat account and J6 Connect raises your limit: up to 10 machines with J6 Chat Pro, or 100 with Premier. Open your account menu in J6 Code, go to **J6 Chat**, and select **Link J6 Chat**. Sign in to J6 Chat and approve. The free J6 Chat plan keeps the normal limit of 3. [More machines with J6 Chat](./remote-access.md#more-machines-with-j6-chat)

## Why is my Claude 5-hour limit draining so fast?

It shouldn't anymore. J6 Code drives Claude through Anthropic's Agent SDK, and Anthropic's 5h meter used to charge Agent SDK usage about 1.7x more than using Claude Code directly. Weekly limits were never affected. Since v0.1.7, Claude in J6 Code drains your 5h limit at the same rate as Claude Code. Still seeing it? [Update J6 Code](./updating.md) on the machine that runs your agents. [My post on it](https://x.com/ykzird/status/2114166439813017873) · [Tracking issue](https://github.com/ykzird/j6code/issues/24649)

## How do I use J6 Code remotely?

Your agents run wherever J6 Code runs: your desktop, a server, a VPS. You connect to it from anywhere. I do this constantly. Less than 5% of my prompts run on my laptop. Run `j6 up` on that machine and you get really good remote support. J6 Connect is the easy path. LAN pairing and Tailscale work too, and [github.com/ykzird/j6code](https://github.com/ykzird/j6code) is the web client. [Remote access](./remote-access.md)

## How do I use J6 Code on my phone?

Get the [iOS](https://apps.apple.com/us/app/j6-code-remote-claude-more/id6787819824) or [Android](https://play.google.com/store/apps/details?id=com.t3tools.t3code) app, then connect it to your computer with J6 Connect or a pairing link. The phone is a remote. Your computer does the work and needs to stay on. [Mobile setup](./install.md#mobile-app) · [Remote access](./remote-access.md)

## Why does J6 Connect keep disconnecting?

J6 Connect is our built-in alternative to Tailscale for remote connections. If it keeps dropping, open **Settings > Environments**, find the machine, and select **Details**. The first part marked as failed is the cause. I will not be disappointed if you set up Tailscale as a fallback (I do this personally). [J6 Connect troubleshooting](./t3-connect-troubleshooting.md)

## Will I get banned for using my subscription?

No. We work with all of the labs and J6 Code is within the TOS of Claude Code, Codex, and Google Antigravity. We worked directly with [SpaceXAI](https://x.com/SpaceXSI/status/2070195830192320600) to collaborate on the Grok Build and Cursor integrations. Everything else uses official ACP bindings.

If it works in J6 Code, you can trust it is safe.

## Can I add a bunch of accounts for one provider?

I don't think J6 Code is the right place to manage a pile of accounts. If we add an auto-switcher, we are risking TOS bans for our users.

A separate work account is fine. Setup for two: [Codex](./providers-codex.md#use-multiple-accounts) · [Claude](./providers-claude.md#separate-accounts-or-configurations). For a bigger pool, manage them outside J6 Code with a self-hosted proxy like [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI). I walked through how I use 6 Claude subs and 3 Codex subs in [this video](https://www.youtube.com/watch?v=D8PikZ1KhUo), and wrote up the setup in [this guide](https://gist.github.com/t3dotgg/59a521d2ee8d70aaf90e280c175072af). Hand it to your agent and it will walk you through it. Early apologies if it gets you banned 💀 After you set up a hub, J6 Code can show its pooled limits under Usage. [Connect a hub](./usage.md#connect-a-cliproxyapi-hub)

## Can I use an API key or OpenRouter instead of a subscription?

Yes. Add another provider instance in Settings and give it its own keys and endpoint. Claude has a full OpenRouter recipe. Your subscription setup stays untouched. [OpenRouter](./providers-claude.md#openrouter) · [Provider instances](./install.md#providers)

## Does J6 Code support local models?

No. J6 Code is a serious developer tool. Locally runnable models are not capable of meaningful engineering work.

## Does my code go to J6 servers?

No. Your code and prompts go from your machine to your provider (Anthropic, OpenAI, etc.), not to us. With J6 Connect, traffic rides a Cloudflare tunnel (`cloudflared` on your machine). Our relay sets up the link. It does not proxy your HTTP or WebSocket sessions. J6 Code sends no product usage data or analytics. Nothing leaves your machine except traffic to the agent providers you signed in to.

## Worktrees are eating my disk. How do I clean them up?

Open **Settings → Worktrees → Cleanup** and turn on automatic worktree cleanup. You can also run it now from there. Worktrees add up fast. One user cleared 500 GB. [Storage cleanup](./project-settings.md#storage-cleanup)

## Is there voice input?

Yes. On iPhone and Android, dictation uses on-device speech by default, with the option to use a paired environment. On macOS 26 or later, desktop users can choose Apple Speech directly under **On this Mac** or choose an environment. Web and other desktop users can enable dictation by choosing an environment. The transcript goes into your draft for review. See [Voice input](./voice-input.md).

## Does it work on Windows, Mac, and Linux?

Yes, all three. Desktop app, CLI, the works. One catch: there is no `j6` binary for Intel Macs, so use the desktop app there. Windows folks can also run agents inside WSL. [Install](./install.md)

## Why is my provider not showing up?

Almost always, the CLI is not installed or not on the `PATH` of the machine that runs the server. (Not your phone. The computer.) Log in on that machine first, like `codex login` or `claude auth login`. Still missing? Point **Binary path** at it in provider settings. Version managers love to cause this one. [Provider setup](./install.md#providers)
