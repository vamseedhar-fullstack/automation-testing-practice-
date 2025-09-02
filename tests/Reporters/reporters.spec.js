// tests/Reporters.spec.js
// ============================================================================
// Playwright Reporters — one-file notebook with runnable, commented examples
// ----------------------------------------------------------------------------
// 💡 How to use this file
//   - This spec doesn't *set* reporters (that's done via CLI or config).
//   - Instead, it gives you tiny tests (pass / expected-fail / flaky / skip / fixme / slow)
//     so you can *see* how each reporter renders them.
//   - Run this same file with different reporters using the commands below.
//
// -----------------------------------------------------------------------------
// 🏃 Run with a single reporter (CLI):
//   List (human-friendly):
//     npx playwright test tests/Reporters.spec.js --reporter=list
//
//   Dot (ultra-compact; great for big suites/CI):
//     npx playwright test tests/Reporters.spec.js --reporter=dot
//
//   JSON (machine-readable; pipe to a file!):
//     # JSON is printed to stdout when used from CLI; redirect to a file:
//     npx playwright test tests/Reporters.spec.js --reporter=json > test-results/report.json
//
//   JUnit XML (CI-friendly; pipe to a file!):
//     npx playwright test tests/Reporters.spec.js --reporter=junit > test-results/junit/results.xml
//
//   HTML (rich, interactive report you can open later):
//     npx playwright test tests/Reporters.spec.js --reporter=html
//     # then open it:
//     npx playwright show-report
//
// -----------------------------------------------------------------------------
// 🧪 Run with multiple reporters at once (comma-separated):
//   # Good local combo: live console + HTML artifact
//   npx playwright test tests/Reporters.spec.js --reporter=list,html
//
//   # CI-friendly combo: minimal console + JUnit XML (stdout -> file)
//   npx playwright test tests/Reporters.spec.js --reporter=dot,junit > test-results/junit/results.xml
//
//   # If you include JSON alongside another console reporter, the outputs will mix on stdout.
//   # Prefer running JSON alone and redirecting it to a file.
//
// -----------------------------------------------------------------------------
// 📝 What you’ll see in each reporter:
//
//   • PASS / expected FAIL (xfail) / FLAKY (passes on retry) / SKIP / FIXED-ME (fixme) / SLOW
//   • Attachments & steps are most useful in the HTML report.
//
// -----------------------------------------------------------------------------
// 🔧 Prefer a config-based setup (to control output file paths)?
//   Use `playwright.config.(js|ts)` reporters. This file focuses on CLI-only usage.
//
// ============================================================================

