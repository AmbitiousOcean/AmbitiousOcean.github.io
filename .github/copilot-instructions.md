# Copilot instructions for AmbitiousOcean.github.io

- This is a Jekyll-based academic website built from the `al-folio` theme. The real source lives in `_config.yml`, `_layouts/`, `_includes/`, `_pages/`, `_posts/`, `_projects/`, `_data/`, `_bibliography/`, and `_plugins/`.
- The site is deployed by GitHub Actions from `_site` using `.github/workflows/deploy.yml` and `JamesIves/github-pages-deploy-action@v4`.

## Local development

- Preferred local workflow: run `docker compose up` from the repository root.
- Slim option: `docker compose -f docker-compose-slim.yml up`.
- Native Ruby workflow: install gems from `Gemfile` and run `bundle exec jekyll serve` if you are not using Docker.
- The CI build mirrors the local build: `bundle exec jekyll build`, then `npm install -g purgecss` and `purgecss -c purgecss.config.js`.

## Key project conventions

- Content pages live in `_pages/`; blog posts are in `_posts/YYYY-MM-DD-title.md`.
- Collections configured in `_config.yml` include `books`, `news`, and `projects`. These are rendered by the theme layouts.
- Publications come from `_bibliography/papers.bib` using `jekyll-scholar`, and the author is identified by `scholar:first_name`/`scholar:last_name` in `_config.yml`.
- `assets/json/resume.json` is an override source for the resume; if it exists it supersedes `_data/cv.yml`.
- `_data/coauthors.yml`, `_data/socials.yml`, and `_data/citations.yml` are used by page templates and citation helpers.

## Custom build logic

- `_plugins/download-3rd-party.rb` localizes external fonts/images/assets and rewrites URLs in `third_party_libraries` config.
- `_plugins/external-posts.rb`, `_plugins/google-scholar-citations.rb`, and `_plugins/hide-custom-bibtex.rb` generate or filter content during the Jekyll build.
- `_plugins/cache-bust.rb`, `_plugins/file-exists.rb`, and `_plugins/details.rb` add Jekyll filters/tags used by layouts and includes.

## What to edit carefully

- Keep `Gemfile` / `Gemfile.lock` consistent with `_config.yml` plugin settings.
- Avoid changing generated output under `_site`; only edit source files.
- Do not expect `README.md`, `INSTALL.md`, `CUSTOMIZE.md`, or `FAQ.md` to be the primary implementation source—they are mostly theme documentation.
- If you change a layout or include, make sure the corresponding `_config.yml` settings reflect the new behavior.

## Formatting and styling

- Liquid formatting is managed by `prettier` with `@shopify/prettier-plugin-liquid`; the repo includes `package.json` for this.
- The site uses `jekyll-paginate-v2`, `jekyll-archives-v2`, `jekyll-scholar`, and other plugins explicitly listed in `_config.yml` and `Gemfile`.

## Troubleshooting

- When build fails, use `docker compose exec -it jekyll /bin/bash` to inspect the container and rerun the build.
- External asset download behavior is controlled by `_config.yml` and the `_plugins/download-3rd-party.rb` hook. Search there first before editing asset URLs.

Please review this guidance and let me know if any project-specific pattern or workflow feels incomplete.