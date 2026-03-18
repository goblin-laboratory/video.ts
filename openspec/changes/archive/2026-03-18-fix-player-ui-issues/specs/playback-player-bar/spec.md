## MODIFIED Requirements

### Requirement: Playback progress bar uses YouTube-style colors
The playback player bar progress bar SHALL use YouTube-style red color theme.

#### Scenario: Progress bar has red track
- **WHEN** playback progress bar is displayed
- **THEN** the active progress portion uses red color (#FF0000)

#### Scenario: Progress bar handle is white
- **WHEN** playback progress bar is displayed
- **THEN** the draggable handle is white

### Requirement: Volume slider uses YouTube-style colors
The playback player bar volume slider SHALL use YouTube-style red color theme.

#### Scenario: Volume slider has red track
- **WHEN** volume slider is displayed
- **THEN** the active volume portion uses red color (#FF0000)

### Requirement: Playback toolbar matches live style
The playback player bar SHALL use the same icon and button style as the live player bar.

#### Scenario: Uses Ant Design Button components
- **WHEN** playback player bar is displayed
- **THEN** controls use Ant Design Button components (not custom button elements)

#### Scenario: Uses consistent styling
- **WHEN** playback player bar is displayed
- **THEN** it uses createStyles from antd-style for consistent styling with live bar
