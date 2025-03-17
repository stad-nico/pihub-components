## Versioning

## Publishing release candidates

To test your changes in the clients you can publish a release candidate
to npm by pushing a commit to your branch with the following format:

```ts
build(*): [rc:<name>]
```

You can omit the `<name>` to use the name of your branch. Note that prefixes like `fix/`, `feature/`, etc. will be ignored.

After pushing the commit [Github Actions](https://github.com/stad-nico/pihub-components/actions) will automatically build your branch
and publish a new release candidate using [Semantic Release](https://github.com/semantic-release/semantic-release).
The package will be available under the version `<next-version>-<name>-rc.<revision>`.

> **Warning**
> A new release candidate will only be published if your changes trigger a new version