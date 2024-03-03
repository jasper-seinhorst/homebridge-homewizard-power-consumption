# Homebridge Homewizard Power Consumption
[![npm](https://img.shields.io/npm/dt/homebridge-homewizard-power-consumption.svg)](https://www.npmjs.com/package/homebridge-homewizard-power-consumption)
[![npm](https://img.shields.io/npm/v/homebridge-homewizard-power-consumption.svg)](https://www.npmjs.com/package/homebridge-homewizard-power-consumption)

This Homebrudge plugin offers two sensors; one for the current power consumption and one for the current power return.

## Installation
To install the *Homebridge Homewizard Power Consumption* plugin follow these steps:

- Follow the instructions on the [Homebridge Wiki](https://homebridge.io/how-to-install-homebridge) to install Node.js and Homebridge;
- Install the *Homebridge Homewizard Power Consumption* plugin through Homebridge Config UI X or manually;
  ```
  $ sudo npm -g i homebridge-homewizard-power-consumption
  ```
- Edit config.json and add the *HomewizardPowerConsumption* platform. E.g;
    ```
    {
        "platform": "HomewizardPowerConsumption",
        "ip": "<<IP of your P1>>",
        "pollInterval": 60
    }
    ```

## Caveats
Both sensors are exposed as Lux (light) sensors. The Lux level indicates the w level of the consumption. E.g. If your home has a power consumption of 2000w, the sensor will show 2000lux.
