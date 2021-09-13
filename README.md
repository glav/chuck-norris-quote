# Chuck Norris quote action
A github action to output a random chuck norris quote within a wokflow. Supports text or html output.

For example:
```
Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.
```
This is a very simple, lighthearted addition to your workflow. It is quick and using the default, outputs a Chuck Norris quote to yourr workflow logs. You can optionally capture the tag as an action output and place that quote anywhere you like such as within a readme, as part of creating an issue, anything you like.

Note: Quotes of an explicit nature have been specifically excluded as part of the quote generation and there is currently no support to enable this.

# Usage
## Inputs
* ```quote-format```: html/text. Default is ***text***
  * Format to return the quote in.
* ```escape-quote``` : true/false. Default is ***false***.
  * Deterrmines whether the quote should be escaped which just means it will escape the single quote character which can cause problems when outputting the text quote in some scenarios such as using in ```echo``` statements"
## A sample workflow to output a quote to the logs

```
name: Chuck Norris test workflow

on:
  workflow_dispatch:

jobs:
  action:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: chuck-norris-quote-action
        uses: ./.github/actions/chuck-norris-quote
```

## A sample workflow to specify Html output and use it in a subsequent step
```
name: Chuck Norris test workflow Html

on:
  workflow_dispatch:

jobs:
  action:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: chuck-norris-quote-action-html
        id: htmlchuck
        uses: ./.github/actions/chuck-norris-quote
        with:
          quote-format: 'html'
          escape-quote: 'true'

      - name: ShowHtmlOutput
        run: echo "${{ steps.htmlchuck.outputs.quote }}"
```
## Developers
### Building this action
If you want to fork and make modifications to this action, simply edit the associated JS files to suit. Then to build, you will need to install NCC and build the main.js file into the dist/index.js folder/file. This will build a single JS file and include any dependencies, thuis removing the need to include the ```node_modules``` folder as part of your action.

#### Install ncc globally
```npm install -g @zeit/ncc```
#### Using ncc
When you use ncc:

```ncc build main.js```

This creates the ```dist/index.js``` file which includes all the necessary dependencies aggregated into one file.
