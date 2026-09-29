# Upstream and compatibility

Independent fork of `setimmediate@1.0.5` from
[YuzuJS/setImmediate](https://github.com/YuzuJS/setImmediate), npm gitHead
`f1ccbfdf09cb93aadf77c4aa749ea554503b9234`.
The native fork retains history, branches, tags, upstream authors and MIT license.
The shim implementation, side effects, argument passing and cancellation API are unchanged; no runtime dependencies or engine declaration were added.

## Issue review — 2026-09-29

- [#86](https://github.com/YuzuJS/setImmediate/issues/86): reviewed the wildcard postMessage concern. The implementation posts an internal task identifier, not callback arguments, and checks the message source and prefix. This release preserves the scheduling fallback rather than changing origin behavior without cross-browser evidence. Real Chromium and isolated-VM checks exercise scheduling and cancellation; no broader security guarantee is claimed.
- [#84](https://github.com/YuzuJS/setImmediate/issues/84): reported garbage-collection behavior is browser/runtime dependent. This release makes no performance claim or speculative timer rewrite.
- [#80](https://github.com/YuzuJS/setImmediate/issues/80): Deno lifecycle behavior remains unverified; no new Deno support claim is added. Node and Chromium contracts are tested separately.

The original tests run with a maintained Mocha version. Additional tests force the shim into an isolated VM, exercise the installed npm tarball, and launch real Chromium. Obsolete Zuul/http-server development runners are replaced by this explicit browser check.
