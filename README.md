# Web Crawler

A simple web crawler built with Node.js.

This project crawls pages from a given website, collects the URLs it finds, counts how many times each page is linked to, and generates a sorted report.

## Features

* Crawls pages from a website
* Stays within the same hostname
* Handles absolute and relative URLs
* Normalizes URLs to avoid duplicate pages
* Checks HTTP response status codes
* Ignores non-HTML responses
* Handles invalid URLs and fetch errors
* Counts how many times each URL is found
* Generates a sorted crawl report
* Includes automated tests with Jest

## Technologies

* JavaScript
* Node.js
* JSDOM
* Jest
* Fetch API

## Project Structure

```text
.
├── crawl.js
├── crawl.test.js
├── main.js
├── report.js
├── report.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── .nvmrc
```

## How It Works

The crawler starts from a base URL provided through the command line.

It fetches the page, extracts all `<a>` links from the HTML using JSDOM, converts relative URLs to absolute URLs, and recursively crawls the discovered pages.

The crawler keeps track of visited URLs and counts how many times each page is linked to.

At the end, the collected URLs are sorted by the number of links pointing to each page and displayed as a report.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

The project uses Node.js `24.20.0`, specified in `.nvmrc`.

## Running the Crawler

Run the crawler with:

```bash
npm start -- https://wagslane.dev
```

You can replace the URL with the website you want to crawl.

The URL is passed to the application through `process.argv`.

## Running Tests

Run the Jest test suite with:

```bash
npm test
```

The tests cover:

* URL normalization
* Absolute URLs
* Relative URLs
* Multiple URLs
* Invalid URLs
* Sorting pages by link count

## Demo

Example of running the crawler against `https://wagslane.dev`:

```text
starting crawl of https://wagslane.dev
actively crawling https://wagslane.dev
actively crawling https://wagslane.dev/tags/
actively crawling https://wagslane.dev/about/
actively crawling https://wagslane.dev/index.xml
non HTML response, content type: application/xml, on page: https://wagslane.dev/index.xml
actively crawling https://wagslane.dev/tags/business/
actively crawling https://wagslane.dev/posts/dark-patterns/
...
==========================================
REPORT
==========================================
found 63 links to page: wagslane.dev
found 62 links to page: wagslane.dev/tags
found 62 links to page: wagslane.dev/about
found 62 links to page: wagslane.dev/index.xml
found 5 links to page: wagslane.dev/posts/leave-scrum-to-rugby
found 4 links to page: wagslane.dev/posts/managers-that-cant-code
found 4 links to page: wagslane.dev/posts/kanban-vs-scrum
...
found 1 links to page: wagslane.dev/posts/developers-learn-to-say-no
==========================================
END REPORT
==========================================
```

The crawler also detects non-HTML responses, such as the `application/xml` response from `index.xml`, and skips crawling them.

## Notes

This project was built as a learning project to practice:

* Node.js
* HTTP requests
* URL handling
* DOM parsing with JSDOM
* Recursion
* Automated testing
* Command-line arguments
* Working with objects and arrays
* Git and project structure
