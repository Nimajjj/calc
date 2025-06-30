# SECURITY.md

## Security Incident Response Plan

If the application is compromised and displays a message like "You've been hacked":

### 1. Immediate Actions
- Take the application offline immediately (stop containers / disable domain).
-  Notify the team and project lead.
-  Create an incident report on the Kanban board.

### 2. Assessment
- Check Git commit history for malicious changes.
- Scan for exposed secrets (API keys, passwords).
- Review logs and traffic (possible data exfiltration?).

### 3. Containment & Recovery
- Revert to last known good commit.
- Rotate all credentials (DB passwords, API keys, SSH).
- Patch any known vulnerabilities (e.g., update dependencies).
- Rebuild and redeploy safely.

### 4. Postmortem
- Document what happened, what was done, and what to improve.
- Add missing security controls (e.g., .env secrets, HTTPS-only, input validation).
- Update this plan and train the team.

---

## Security Best Practices Implemented

- No secrets are pushed to the repo (use .env files)
- Dependencies are updated regularly
- Inputs are sanitized to prevent injection
- CI tests are in place to catch regressions
