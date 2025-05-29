# An unnamed in-dev modpack

## How to contribute
- Use PrismLauncher to install the modpack from this repo and VSCode to develop
- Generated `.probe` dumps should be put in the instance folder; please do not commit probe dumps ever
- Do not commit any temporary, or generated, or cache files. Put them in the `.gitignore` if an added mod generates one that isn't caught by gitignore
- Avoid commiting configs that have timestamps, or configs that change every launch
    - If there is a file we need tracked but don't want to appear in 'Uncommited Changes'; follow this: https://stackoverflow.com/a/73720550. Currently we're doing this for:
        - `instance.cfg`
        - `minecraft/kubejs/config/client.properties`
        - `minecraft/kubejs/config/common.properties`