## ADDED Requirements

### Requirement: Center play button shows when paused
The system SHALL display a large play button at the center of the player when playback is paused.

#### Scenario: Show center button when paused
- **WHEN** playback is paused
- **THEN** a large play button is visible at the center of the player

#### Scenario: Hide center button when playing
- **WHEN** playback is playing
- **THEN** the center play button is not visible

#### Scenario: Click center button to play
- **WHEN** user clicks the center play button
- **THEN** playback starts
- **AND** the center play button hides

#### Scenario: Show center button when ended
- **WHEN** playback has ended
- **THEN** the center play button is visible
