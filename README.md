# taiko-delay

This is a small plugin to add a delay for each run step for
[Taiko](https://taiko.dev/). This is useful if the delay time needs to be
controlled from an environment variable set once, instead of adding the
`observe` and `observeTime` options for `openBrowser()` in multiple source
files.

## Usage

1. Install the plugin with npm.
   ```
   npm install taiko-delay
   ```

2. Enable the plugin in your list of taiko plugins:
   ```
   export TAIKO_PLUGIN=delay
   ```
3. Set the delay time in seconds for each run step:
   ```
   export TAIKO_DELAY_SECONDS=<time in seconds>
   ```

4. Run your taiko tests.
