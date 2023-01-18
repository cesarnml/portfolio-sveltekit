# Portfolio, Blog, and Miscellaneous

- [Portfolio, Blog, and Miscellaneous](#portfolio-blog-and-miscellaneous)
  - [Goal Swarm](#goal-swarm)

## Goal Swarm

- Restore playwright browser downloads from GitHub Action Cache:
  - _Maybe_ saves ~10sec versus non-cache workflow
  - Questionable utility

```yaml
- uses: actions/cache@v3
  id: playwright-cache
  with:
    path: |
      ~/.cache/ms-playwright
    key: ${{ runner.os }}-playwright-${{ hashFiles('**/package-lock.json') }}
- name: Install Playwright Browsers
  if: steps.playwright-cache.outputs.cache-hit != 'true'
  run: npx playwright install --with-deps
- run: npx playwright install-deps
  if: steps.playwright-cache.outputs.cache-hit == 'true'
```
