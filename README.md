# Homebridge Homewizard Power Consumption
[![npm](https://img.shields.io/npm/dt/homebridge-homewizard-power-consumption.svg)](https://www.npmjs.com/package/homebridge-homewizard-power-consumption)
[![npm](https://img.shields.io/npm/v/homebridge-homewizard-power-consumption.svg)](https://www.npmjs.com/package/homebridge-homewizard-power-consumption)

This Homebridge plugin presents two sensors: one dedicated to monitoring current power consumption within your household, and another tracking the power return for those equipped with solar panels. This plugin uses data from your [Wi-Fi P1 meter](https://www.homewizard.com/). Gain real-time insights into your energy usage and optimize your home's efficiency effortlessly. These sensor allows you to add automations to your Apple Home based on power consumption or power return.

 ![Two sensors in Utility room](/assets/plugin-example.png) ![Automation example](/assets/automation-example.png)

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
        "ip": "<<IP address of your Wi-Fi P1 Meter>>",
        "pollInterval": 60,
        "hidePowerConsumptionDevice": false,
        "hidePowerReturnDevice": false
    }
    ```

## Caveats
- Each sensor is represented as a Lux (light) sensor. The Lux level directly reflects the power consumption in watts. For example, if your home is consuming 2000 watts of power, the sensor will display 2000 Lux.
- Not every household has solar panels, by adding `"hidePowerReturnDevice": false` to the plugins config you can disable the power return sensor.
