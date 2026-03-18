## MODIFIED Requirements

### Requirement: Live player bar play button icon
The live player bar SHALL use the play icon without a circle when paused.

#### Scenario: Paused state shows play icon without circle
- **WHEN** live playback is paused
- **THEN** the play button shows a triangle icon without surrounding circle (PlayOutlined)

#### Scenario: Playing state shows pause icon
- **WHEN** live playback is playing
- **THEN** the play button shows a pause icon (PauseOutlined)

### Requirement: Live player bar has volume control
The live player bar SHALL include volume control functionality.

#### Scenario: Volume slider is present
- **WHEN** live player bar is displayed
- **THEN** a volume slider control is visible

#### Scenario: Volume slider adjusts volume
- **WHEN** user drags the volume slider
- **THEN** audio volume changes accordingly

#### Scenario: Mute button toggles mute
- **WHEN** user clicks the volume/mute button
- **THEN** audio mute state toggles

### Requirement: Live player bar removes settings button
The live player bar SHALL NOT display a settings button before the fullscreen button.

#### Scenario: Settings button not present
- **WHEN** live player bar is displayed
- **THEN** no settings/configuration button appears before the fullscreen button
