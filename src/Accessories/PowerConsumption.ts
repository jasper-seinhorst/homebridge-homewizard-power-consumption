import { Service, PlatformAccessory, PlatformConfig, Logger, API, Characteristic } from 'homebridge';
import { HomewizardDevice, HomewizardPowerConsumptionAccessory } from '../PlatformTypes';

export default class PowerConsumption implements HomewizardPowerConsumptionAccessory {
  public readonly Service: typeof Service = this.api.hap.Service;
  public readonly Characteristic: typeof Characteristic = this.api.hap.Characteristic;
  private chargingPower: Service;

  constructor(public config: PlatformConfig, public readonly log: Logger, public readonly api: API, public accessory: PlatformAccessory, public device: HomewizardDevice) {
    this.accessory.getService(this.Service.AccessoryInformation)
      .setCharacteristic(this.Characteristic.Manufacturer, 'Homewizard')
      .setCharacteristic(this.Characteristic.Model, device.product_name)
      .setCharacteristic(this.Characteristic.SerialNumber, device.serial)
      .setCharacteristic(this.Characteristic.Version, device.firmware_version);

    console.log(accessory.context);

    this.chargingPower = this.accessory.getService(this.Service.LightSensor) || this.accessory.addService(this.Service.LightSensor);
  }

  public beat(consumption: number) {
    const minimumLuxLevel = 0.0001;
    let newPowerConsumptionLevel = minimumLuxLevel;
    if (consumption > 0) {
      newPowerConsumptionLevel = consumption;
    }
    this.chargingPower.setCharacteristic(this.Characteristic.CurrentAmbientLightLevel, newPowerConsumptionLevel);
  }
}
