# Dashboard Component Library Storybook Plan

## Current Goal

Create a sanitized public component-library copy at `~/Code/dashboard-component-lib`, expose its Storybook inside the portfolio at `#/product/component-lib/demo`, and publish both repositories.

## Plan

1. Prepare the copied component library.
   - Copy `~/Code/Hive/hiveginx-ui-components` to `~/Code/dashboard-component-lib`.
   - Remove copied Git history and initialize a fresh repository.
   - Update package metadata from the old private/business-specific identity to `dashboard-component-lib`.
   - Replace references to Auction Connect, AuctionWiz, HiveginX, Hive, and close variants in code, examples, docs, package metadata, and Storybook labels.
   - Validate that no matching references remain outside generated dependency/build folders.

2. Apply the public-repo safety constraint.
   - Create a `DEADME.md` public placeholder.
   - Configure `.gitignore` so only `.gitignore` and `DEADME.md` are tracked in the new public repository.
   - Create a public GitHub repository named `dashboard-component-lib`.
   - Commit and push the fresh repository to `main`.

3. Add the portfolio Storybook page.
   - Build static Storybook from the sanitized copy.
   - Copy the static Storybook bundle into the portfolio public assets.
   - Add a portfolio page that embeds the entire Storybook in the main content area while preserving the existing profile sidebar and top bar.
   - Add hash-route support for `#/product/component-lib/demo`.
   - Add navigation from the existing Product page to the demo route.

4. Validate.
   - Run the component-library Storybook build.
   - Run portfolio typecheck/build.
   - Search both worktrees for removed business-specific names.

5. Publish.
   - Commit and push the portfolio changes to its tracked branch.
   - Confirm the new repository and portfolio commits pushed successfully.

## Notes And Risks

- The portfolio uses hash routing, so the low-risk URL is `https://dcassil.github.io/#/product/component-lib/demo`.
- The requested `.gitignore` rule means the new public repo will not publish the source code, only `.gitignore` and `DEADME.md`. The sanitized working copy will still be used locally to build the embedded Storybook bundle.
- Storybook is embedded through an iframe so its styles, routing, and manager UI stay isolated from the portfolio shell.
