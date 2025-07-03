## GitHub Copilot Chat

- Extension Version: 0.28.5 (prod)
- VS Code: vscode/1.101.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 116.203.156.19 (82 ms)
- DNS ipv6 Lookup: Error (75 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (75 ms)
- Electron fetch (configured): HTTP 403 (539 ms)
- Node.js https: HTTP 403 (631 ms)
- Node.js fetch: HTTP 403 (570 ms)
- Helix fetch: HTTP 403 (595 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 116.203.156.19 (61 ms)
- DNS ipv6 Lookup: Error (76 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (24 ms)
- Electron fetch (configured): HTTP 200 (783 ms)
- Node.js https: HTTP 200 (947 ms)
- Node.js fetch: HTTP 200 (812 ms)
- Helix fetch: HTTP 200 (858 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).