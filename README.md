# synthwave-hass

[![Version](https://img.shields.io/badge/version-0.3.5-green.svg?style=flat-square&labelColor=2a2139&color=f92aad)](#)
[![maintained](https://img.shields.io/maintenance/no/2022.svg?style=flat-square&labelColor=2a2139&color=f92aad)](#)
[![prs](https://img.shields.io/badge/accepting%20PR's-yes-x?style=flat-square&labelColor=2a2139&color=f92aad)](#)

## This project is no longer supported

In addition to Home Assistant now supporting a limited amount of theme customizability through Lovelace, rendering this theme partly useless, I have lost interest and time for this project. This theme will no longer be developed by me. However, I will still be accepting pull requests, after review, if anyone submits any fixes.

---

> Do you remember that endless summer back in '84? Cruising down the ocean-highway with the top down, the wind in our hair and heads buzzing with neon dreams?

> No, I don't remember it either, but with this experimental theme we can go there.

> https://github.com/robb0wen/synthwave-vscode

## Installation

* Find your homeassistant directory containing your configuration (let's say `~/.homeassistant/`)
* Change into `~/.homeassistant/themes` (create the `themes` directory, if it does not exist, you then might have to restart HA)
* `$ wget https://raw.githubusercontent.com/bbbenji/synthwave-hass/master/themes/synthwave.yaml` downloads the `.yaml` file directly where it should reside
* Make sure Home Assistant knows about your new theme file by adding the following to your `configuration.yaml`
``` yaml
frontend:
  themes: !include_dir_merge_named themes
```
* Finally enable the theme from your profile page or `configuration.yaml`

**Extras**
Optionally you can install [synthwave-hass-extras](https://github.com/bbbenji/synthwave-hass-extras) which adds some additional styling not possible using the a .yaml theme file.

**Screenshots**

![1](https://i.imgur.com/DHbESc9.png)

![2](https://i.imgur.com/bLhZFHy.png)

![3](https://i.imgur.com/BcyjeJz.png)

![3](https://i.imgur.com/WXg2417.png)
