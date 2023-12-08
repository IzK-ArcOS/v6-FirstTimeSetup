# First Time Setup

This repository is a submodule of [ArcOS v6](https://github.com/IzK-ArcOS/v6). It references APIs and code from the parent codebase to function, and will therefor not run outside of ArcOS itself.

## Dependencies

v6 submodules depend on various assets and APIs from the parent v6 codebase. This specific submodule depends on:

| File                  | Exports                                                                             |
| --------------------- | ----------------------------------------------------------------------------------- |
| `$ts/images/apps`     | `ArcTermIcon`                                                                       |
| `$ts/images/general`  | `BugReportIcon`, `ConnectIcon`, `FlagIcon`, `HomeIcon`, `SecureIcon` and `WaveIcon` |
| `$ts/server/authcode` | `setAuthcode`                                                                       |
| `$ts/server/multi`    | `addServer`                                                                         |
| `$ts/server/test`     | `testConnection`                                                                    |
| `$types/state`        | `PrimaryState` and `StateHandler`                                                   |

> Last updated: December 8th 2023 by @IzKuipers. This information might not be accurate, please notify us if this is the case.

## Original Author

@IzKuipers [e-mail](mailto:izaak@arcapi.nl)

## License

GPLv3
