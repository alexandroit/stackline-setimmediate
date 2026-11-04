# Changelog

## 1.0.3 - 2026-11-04

- Update development dependency constraints and CI runtimes for reviewed security advisories.
- Preserve the public runtime API; validate the packed package with the existing consumer tests.


## 1.0.0 — 2026-09-29

- Publish the preserved setimmediate 1.0.5 implementation under `@stackline/setimmediate`.
- Retain the original API, license, contributors and runtime requirements.
- Replace obsolete development runners with maintained Mocha and Puppeteer Core; retain upstream behavior tests and add isolated-VM, installed-tarball and real-Chromium checks.
- Add source attribution, issue review, CI/CodeQL and exact-artifact provenance/release verification.
