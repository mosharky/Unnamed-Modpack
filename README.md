# An Unnamed In-Dev Modpack

## How to contribute
- Use PrismLauncher to install the modpack from this repo and use VSCode to develop
- Generated `.probe` dumps should be put in the instance folder; please do not commit probe dumps ever
- Do not commit any temporary, or generated, or cache files. Put them in the `.gitignore` if an added mod generates one that isn't caught by gitignore
- Avoid commiting configs that have timestamps, or configs that change every launch
    - If there is a file we need tracked but don't want to appear in 'Uncommited Changes'; follow this: https://stackoverflow.com/a/73720550. Currently we're doing this for:

```bash
git update-index --skip-worktree instance.cfg
git update-index --skip-worktree minecraft/kubejs/config/client.properties
git update-index --skip-worktree minecraft/kubejs/config/common.properties
git update-index --skip-worktree minecraft/config/xaerominimap_entities.json
```

- To undo it, do:

```bash
git update-index --no-skip-worktree [file]
```

## Packwiz
- `cd` into `minecraft` folder
- kind of a mess atm
- https://packwiz.infra.link/reference/additional-options/