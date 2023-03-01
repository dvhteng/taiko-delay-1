# taiko-delay

This is a small plugin to add a delay for each run step for Taiko test runner.

## Packaging

Use:

```
npm pack
```

to pack this repo into an NPM package. Then that package can be installed using:

```
npm install /path/to/taiko-delay-1.0.0.tgz
```

## Usage

1. Install the plugin with npm.

2. Enable the plugin in your list of taiko plugins:
   ```
   export TAIKO_PLUGIN=delay
   ```
3. Set the delay time in seconds for each run step:
   ```
   export TAIKO_DELAY_SECONDS=<time in seconds>
   ```

4. Run the taiko test.
