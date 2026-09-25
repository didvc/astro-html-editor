# Security

## Reporting a Vulnerability

To report a security issue, use GitHub's private vulnerability reporting:
https://github.com/didvc/astro-html-editor/security/advisories/new

Or open an issue with the `security` label if the issue is not sensitive.

## Notes

This project runs as a self-hosted server. The `/api/*` endpoints have no built-in authentication. Do not expose the server to the public internet without adding access control at the reverse proxy or firewall level.

Path traversal protection is applied on all endpoints that accept filenames.
