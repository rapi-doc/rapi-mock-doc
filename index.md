# A mock API that remembers

> Rapi Mock turns an OpenAPI spec into a mock server with request validation, token checks and state, a UI to look inside, and endpoints for tests in any language.

## One command

```bash
npm install -D @rapidoc/cli @rapidoc/mock
npx rapidoc mock openapi.yaml --stateful
```

```bash
curl -X POST localhost:4010/openapi/pets -H "Content-Type: application/json" -d '{"name":"Biscuit"}'
curl localhost:4010/openapi/pets        # Biscuit is in the list
```

## What you get

**[State, worked out from the spec](/docs/state/overview/)**

It reads resources, keys and links off your paths and schemas, starts with generated records, and keeps what you create, change and delete.

**[A UI to look inside](/docs/mock-ui/tour/)**

See the records, what the mock does for every operation, and how sure it is. Reset the data or reseed it from the page.

**[Tests in any language](/docs/testing/any-language/)**

Reset, read and load the data over HTTP, with a session per test so parallel tests never see each other's changes.

**[Requests and tokens checked](/docs/responses/tokens-and-scopes/)**

A bad request gets a 400 with the problems listed. OAuth tokens are verified against your issuer, scopes included.

**[You can correct it](/docs/correcting/config-file/)**

Where a spec doesn't show its data model, state it in a few lines of `mock.config.yaml`. Stale entries are reported, never ignored.

**[Check your spec first](/docs/correcting/lint/)**

`rapidoc lint --stateful` reports what the mock had to assume, at its place in the spec, before you run anything.

## Two mocks, two jobs

RapiDoc also has a mock inside the browser, part of `<rapi-doc>`. They are built for different work.

| | In-browser mock | Rapi Mock |
| :--- | :--- | :--- |
| **Runs** | Inside the page | As an HTTP server |
| **Who can call it** | The page itself: Try, `<rapi-flow>` | Anything: curl, your frontend, tests |
| **Request validation** | No | Yes |
| **Token and scope checks** | No | Yes |
| **Remembers what you create** | No | Yes, with `--stateful` |
| **Best for** | Docs and demos | Development and testing |

[The in-browser mock](https://rapidocui.com/docs/mocking/in-browser/) is documented with RapiDoc.

> **Note: What it handles**
> Rapi Mock reads the data model off the spec. It does that well for APIs with ids in the path and keys at the top of a record, and needs a few lines of config for other styles. [See which, with examples](/docs/state/api-styles/).
