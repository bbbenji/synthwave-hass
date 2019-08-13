# synthwave-hass

[![Version](https://img.shields.io/badge/version-0.1.0-green.svg?style=flat-square&labelColor=2a2139&color=f92aad)](#)
[![maintained](https://img.shields.io/maintenance/yes/2019.svg?style=flat-square&labelColor=2a2139&color=f92aad)](#)

> Do you remember that endless summer back in '84? Cruising down the ocean-highway with the top down, the wind in our hair and heads buzzing with neon dreams?

> No, I don't remember it either, but with this experimental theme we can go there.

> https://github.com/robb0wen/synthwave-vscode

## Installation

* Find your homeassistant directory containing your configuration (let's say `~/.homeassistant/`)
* Change into `~/.homeassistant/themes` (create the `themes` directory, if it does not exist, you then might have to restart HA)
* `$ wget https://raw.githubusercontent.com/bbbenji/synthwave-hass/master/themes/synthwave.yaml` downloads the `.yaml` file directly where it should reside
* Change into `~/.homeassistant/www` (create the `www` directory, if it does not exist, you then might have to restart HA)
* `$ wget https://raw.githubusercontent.com/bbbenji/synthwave-hass/master/synthwave.js` downloads the `.js` file directly where it should reside
* Add the following to the top of your UI Lovelace configuration (means either via Config UI or .yaml)
``` yaml
resources:
  - type: js
    url: /local/synthwave.js
```
* Make sure Home Assistant knows about your new theme file by adding the following to your `configuration.yaml`
``` yaml
frontend:
  themes: !include_dir_merge_named themes
```
* Finally enable the theme from your profile page or `configuration.yaml`

**Screenshots**

![1](https://i.imgur.com/DHbESc9.png)

![2](https://i.imgur.com/bLhZFHy.png)

![3](https://i.imgur.com/BcyjeJz.png)

![3](https://i.imgur.com/WXg2417.png)

**Current Issues / Drawbacks / Plans**

* Community Store has white on white text
* Some buttons are white on white
