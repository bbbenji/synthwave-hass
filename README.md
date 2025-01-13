# Synthwave-Hass

[![Version](https://img.shields.io/badge/version-0.3.6-green.svg?style=flat-square&labelColor=2a2139&color=f92aad)](#)
[![Maintained](https://img.shields.io/maintenance/no/2020.svg?style=flat-square&labelColor=2a2139&color=f92aad)](#)
[![PRs Accepted](https://img.shields.io/badge/accepting%20PR's-yes-x?style=flat-square&labelColor=2a2139&color=f92aad)](#)

## Project Status

**This project is no longer supported.**

Due to Home Assistant now supporting limited theme customization through Lovelace, this theme has become partially redundant. Additionally, I have lost the time and interest to maintain this project further. However, I will still review and accept pull requests for any fixes or improvements submitted by the community.

---

> "Do you remember that endless summer back in '84? Cruising down the ocean highway with the top down, the wind in our hair and heads buzzing with neon dreams?"
>
> No? Well, neither do I, but with this experimental theme, we can pretend to go there.

Inspired by: [Synthwave VSCode Theme](https://github.com/robb0wen/synthwave-vscode)

---

## Installation

### Step 1: Locate Your Home Assistant Directory

Find the directory containing your Home Assistant configuration. This is typically located at `~/.homeassistant/`.

### Step 2: Add the Theme

1. Navigate to the `themes` directory:
   ```bash
   cd ~/.homeassistant/themes
   ```
2. If the `themes` directory does not exist, create it:

   ```bash
   mkdir themes
   ```

   After creating the directory, you may need to restart Home Assistant.

3. Download the theme file directly:
   ```bash
   wget https://raw.githubusercontent.com/bbbenji/synthwave-hass/master/themes/synthwave.yaml
   ```

### Step 3: Update Configuration

Add the following lines to your `configuration.yaml` file to ensure Home Assistant recognizes the new theme:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

### Step 4: Enable the Theme

You can enable the theme from your profile page or by configuring it directly in `configuration.yaml`.

---

## Extras

For additional styling that is not achievable with a `.yaml` theme file, you can install [synthwave-hass-extras](https://github.com/bbbenji/synthwave-hass-extras).

---

## Screenshots

Here are some visuals to get a feel for the theme:

![Screenshot 1](https://i.imgur.com/DHbESc9.png)

![Screenshot 2](https://i.imgur.com/bLhZFHy.png)

![Screenshot 3](https://i.imgur.com/BcyjeJz.png)

![Screenshot 4](https://i.imgur.com/WXg2417.png)

---

## Contributions

While this project is no longer actively maintained, contributions are welcome! If you find any issues or have improvements to suggest, feel free to submit a pull request. Let's keep the Synthwave spirit alive together!
