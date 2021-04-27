# WSL Path Tools


## Features

Provides commands to convert paths between Windows and WSL. For now there is only one, but I'll add more as I need them.

1. ```WSL Path Tools: Get the workspace folder in WSL format```

Designed to replace the ```${workspaceFolder}``` variable in tasks

```
{
    "type": "shell",
    "command": "echo ${command:wsl-path-tools.workspaceFolder}",
    "problemMatcher": [],
    "label": "Test"
}
```

## Disclaimer

I made this because I couldn't get the other similar extensions to work. If this one doesn't work for you, try the other ones.
