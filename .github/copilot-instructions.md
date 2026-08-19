When reviewing pull requests:

- Prioritize correctness, regressions, security, performance, accessibility, and maintainability over stylistic preferences or minor nits.
- Only raise an issue when there is a concrete problem or a meaningful maintainability risk. Avoid comments that merely express personal preference.

## Correctness and behavior

- Look for logic errors, broken edge cases, incorrect assumptions, race conditions, stale data, and unexpected behavior.
- Check whether loading, empty, error, and success states are handled correctly.
- Pay attention to code paths that behave differently between development and production.
- Check whether changes can introduce regressions to existing behavior, URLs, navigation, forms, or persisted data.
- Verify async code for missing `await`, unhandled promise rejections, incorrect sequencing, and updates after a component has unmounted.

## React

- Check for incorrect hook usage, including missing or unstable dependencies, stale closures, and hooks called conditionally.
- Look for unnecessary `useEffect`; prefer deriving values during render or handling logic directly in event handlers when appropriate.
- Check for unnecessary client-side state, especially state that can be derived from props, URL/search params, server data, or other existing state.
- Watch for duplicated sources of truth and state synchronization between multiple pieces of state.
- Check whether list keys are stable and represent item identity.
- Look for accidental render loops or effects that repeatedly update their own dependencies.
- Flag expensive work performed on every render when it can cause a meaningful performance issue.
- Do not suggest `useMemo`, `useCallback`, or memoization unless there is a concrete reason.

## Next.js

- Check for incorrect Server Component / Client Component boundaries.
- Flag unnecessary `"use client"` directives that push large subtrees or server-capable logic to the client.
- Check that browser-only APIs, hooks, event handlers, and client-only libraries are not used from Server Components.
- Check that server-only code, secrets, database access, or privileged APIs cannot be included in the client bundle.
- Prefer server-side data fetching when client-side fetching is not required for interactivity or freshness.
- Check caching and revalidation behavior where relevant; look for accidentally stale or unexpectedly uncached data.
- Check route handlers, Server Actions, redirects, `notFound()`, metadata, layouts, and loading/error boundaries when affected.
- Watch for hydration mismatches caused by non-deterministic rendering, browser-only values, locale/time differences, or invalid HTML structure.
- Check whether URL state should live in route params or search params instead of local React state.

## TypeScript

- Check TypeScript types carefully; do not assume passing type-check means the runtime behavior is safe.
- Look for unsafe assertions such as `as`, non-null assertions (`!`), and casts that hide real type mismatches.
- Flag unnecessary `any`, overly broad types, and incorrect optional/null handling.
- Check discriminated unions and exhaustive handling where new variants may be introduced.
- Verify that API responses, external data, URL parameters, local storage, and other untrusted runtime values are validated rather than trusted solely because of TypeScript types.
- Avoid suggesting more complex types unless they materially improve safety or maintainability.

## Data fetching and APIs

- Check request error handling, cancellation, retries, duplicate requests, and race conditions.
- Look for N+1 requests or waterfalls when they have meaningful performance impact.
- Verify that request parameters and responses are handled safely when values are missing, malformed, or unexpected.
- Check whether mutations correctly invalidate, refresh, or update cached data.
- Watch for optimistic updates that cannot correctly recover from failure.

## Security and privacy

- Look for XSS risks, especially around `dangerouslySetInnerHTML`, unsanitized HTML, URLs, or user-controlled content.
- Check authentication and authorization separately; hiding UI is not sufficient authorization.
- Verify that sensitive data, credentials, tokens, internal identifiers, or environment secrets are not exposed to the browser or logs.
- Check redirects and user-controlled URLs for open redirect issues.
- Look for unsafe handling of cookies, query parameters, form inputs, file uploads, and API payloads.
- Treat all client-provided values as untrusted on the server.

## Accessibility

- Check semantic HTML before suggesting ARIA.
- Ensure interactive elements are keyboard accessible and use appropriate native elements such as `<button>` and `<a>`.
- Check accessible names, labels, alt text, focus behavior, and focus visibility.
- Verify that dialogs, menus, popovers, and other overlays manage focus appropriately.
- Look for interactions that depend only on hover, color, pointer input, or visual position.
- Check whether dynamic status/error messages need to be announced to assistive technologies.
- Flag invalid or duplicated IDs and incorrect label/control relationships.

## Forms

- Check both client-side and server-side validation where applicable.
- Verify submission failure, duplicate submission, loading, and disabled states.
- Check whether form controls preserve user input after recoverable errors.
- Ensure validation messages are associated with the relevant controls and are understandable.
- Watch for buttons whose default `type="submit"` causes unintended submissions.

## Browser and UI behavior

- Check event propagation and default browser behavior when handlers call `preventDefault()` or `stopPropagation()`.
- Look for layout or interaction bugs caused by long text, small screens, zoom, localization, or missing content.
- Check whether responsive behavior works across realistic viewport sizes.
- Watch for content jumps, broken scroll behavior, unexpected focus changes, and inaccessible overlays.
- Check for obvious resource leaks involving event listeners, observers, timers, or subscriptions.

## Performance

- Raise performance concerns only when there is a plausible user-facing impact.
- Look for unnecessarily large client bundles, heavy dependencies imported into client components, and avoidable client-side work.
- Check for avoidable network waterfalls, repeated requests, unnecessarily large payloads, or loading resources that are never used.
- Watch for rendering very large collections without an appropriate strategy.
- Avoid speculative micro-optimizations.

## Maintainability

- Point out duplicated logic when it creates a real risk of inconsistent behavior or makes future changes harder.
- Look for hidden coupling, unclear ownership of state, and code that relies on undocumented assumptions.
- Avoid suggesting abstractions unless they clearly reduce duplication, enforce an important invariant, or make the code materially easier to change.
- Prefer a small local fix over introducing a new abstraction for hypothetical future reuse.
- Do not request unrelated refactors as part of the current pull request.

## Review comments

For each issue you raise:

- Explain what is wrong, not just what you would write differently.
- Describe the concrete user-facing or engineering impact.
- Mention the conditions required to reproduce the problem when they are not obvious.
- Suggest a fix when there is a reasonably clear solution, but do not require the author to use your exact implementation.
- Distinguish blocking correctness issues from optional improvements.
- Do not report speculative issues unless you can explain a realistic failure scenario.
- Avoid repeating the same root issue on multiple lines; leave one comment at the most useful location.

Prefer a small number of high-confidence, high-impact findings over a large number of low-value comments.