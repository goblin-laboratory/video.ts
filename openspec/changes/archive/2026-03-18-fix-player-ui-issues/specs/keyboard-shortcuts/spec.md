## ADDED Requirements

### Requirement: Keyboard shortcuts for playback control
The system SHALL support keyboard shortcuts for common playback functions.

#### Scenario: Space key toggles play/pause
- **WHEN** user presses the Space key
- **AND** focus is not on an input or textarea element
- **THEN** playback toggles between play and pause states

#### Scenario: Left arrow seeks backward
- **WHEN** user presses the Left Arrow (←) key
- **AND** focus is not on an input or textarea element
- **THEN** playback seeks backward by 5 seconds

#### Scenario: Right arrow seeks forward
- **WHEN** user presses the Right Arrow (→) key
- **AND** focus is not on an input or textarea element
- **THEN** playback seeks forward by 5 seconds

#### Scenario: Up arrow increases volume
- **WHEN** user presses the Up Arrow (↑) key
- **AND** focus is not on an input or textarea element
- **THEN** volume increases by 10%

#### Scenario: Down arrow decreases volume
- **WHEN** user presses the Down Arrow (↓) key
- **AND** focus is not on an input or textarea element
- **THEN** volume decreases by 10%

#### Scenario: M key toggles mute
- **WHEN** user presses the M key
- **AND** focus is not on an input or textarea element
- **THEN** audio mute state toggles

#### Scenario: F key toggles fullscreen
- **WHEN** user presses the F key
- **AND** focus is not on an input or textarea element
- **THEN** fullscreen mode toggles
