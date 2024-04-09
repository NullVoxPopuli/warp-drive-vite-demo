# Can we use ember-data / warp-drive without ember?


## Patches

to each ember-data package, this was added

```
  "exports": { 
    ".": "./addon/index.js",
    "./*": "./addon/*.js"
  },
```

_then_, we start running in to imports from `@ember/debug`, which we can't use without embroider (for now).
