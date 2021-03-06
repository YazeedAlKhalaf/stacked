# Change Log

All notable changes to the "stacked" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [unreleased]

## [3.0.0] - Jun 4, 2021

### Added

- `router_service.ts` template for navigation
- `view_model.ts` has a new `init()` method by default.
- `view_.ts` has `init()` method in `onModelReady` parameter.

### Changed

- Null safety to dart snippets by [@saileshbro](https://github.com/saileshbro), PR [#5](https://github.com/YazeedAlKhalaf/Stacked/pull/5)
- Upgraded all dependencies to latest version
- [BREAKING] Now the skeleton is generated from `lib` directly not `lib/src`
- All `pubspec.ts` packages updated to latest
- Cleanup `yaml_helper.ts`
- Generated folders are now inside `app` directly instead of `app/generated`

### Removed

- `third_party_services_modeule.ts` template
- `ui_helpers.ts` template
- `busy.ts` template
- `skeleton.ts` template
- `stacked_services` dependency from `pubspec.ts`

### Security

- merged [#3](https://github.com/YazeedAlKhalaf/Stacked/pull/3) by [@dependabot](https://github.com/apps/dependabot)
- merged [#4](https://github.com/YazeedAlKhalaf/Stacked/pull/4) by [@dependabot](https://github.com/apps/dependabot)

## [2.2.0] - 2021-02-22

### Fixed

- Router was called `Router` which was not really good, now `AppRouter`
- Comments now are 3 slash comments not two slash comments
- Utils is not a `laztSingleton` anymore, it is a UTILITY class

### Changed

- Updated all dependencies of `pubspec.yaml` template called `pubspec.ts`

## [2.1.0] - 2020-9-19

### Added

- `app.ts` to cleanup `main.ts`
- `skeleton.ts` to have a base for all files!
- `busy.ts` template

### Changed

- `pubpspec.yaml` template is updated with new versions of the packages.
- `locator.ts` template
- `main.ts` template
- `router.ts` template
- `architecture.ts` template
- `create_directory.ts` template
- `view_file.ts` template

## Removed

- Removed old and useless packages
- `app_color.ts` template

## [2.0.0] - 2020-7-15

## Added

- `CustomBaseViewModel.ts` template for sharing stuff between ViewModels

## Fixed

- Fixed `pubspec.yaml` template, there was no flutter section 👀

## Changed

- `pubpspec.yaml` template is updated with new versions of the packages.
- `router.dart` template is updated to use new standards
- `view_model.ts` template is updated to use `CustomBaseViewModel`

## Removed

- Removed old packages

## [1.1.3]

## Added

- `svm` snippet

## Fixed

- Snippets did not work, now they do

## [1.1.2] - 2020-06-10

## Fixed

- `Stacked: New Stacked View-ViewModel` command doesn't work in the last update, now it works
- Mistyping the name of the class when prompted breaks the extension sometimes, now it is

## [1.1.1] - 2020-06-09

## Fixed

- Missing Dependencies that sometimes make the extension unusable

## [1.1.0] - 2020-06-09

## Added

- Changed name of `Stacked: New Stacked` command to `Stacked: New Stacked View-ViewModel` command
- `Stacked: New Stacked Skeleton` command
- Updated `README.md`

### Fixed

- Code repetition

## Removed

- `Stacked: New Stacked` command

## [1.0.0] - 2020-06-08

### Added

- Initial Release
- Four snippets; `svrf`, `svnf`, `svrl`, and `svnl`
- `Stacked: New Stacked` command
- Updated `README.md`

[unreleased]: https://github.com/YazeedAlKhalaf/Stacked/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v3.0.0
[2.2.0]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v2.2.0
[2.1.0]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v2.1.0
[2.0.0]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v2.0.0
[1.1.3]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v1.1.3
[1.1.2]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v1.1.2
[1.1.1]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v1.1.1
[1.1.0]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v1.1.0
[1.0.0]: https://github.com/YazeedAlKhalaf/Stacked/releases/tag/v1.0.0
