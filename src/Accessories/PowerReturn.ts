import { Service, PlatformAccessory, PlatformConfig, Logger, API, Characteristic } from 'homebridge';
import { HomewizardPowerConsumptionAccessory } from '../PlatformTypes';

export default class PowerReturn implements HomewizardPowerConsumptionAccessory {
  public readonly Service: typeof Service = this.api.hap.Service;
  public readonly Characteristic: typeof Characteristic = this.api.hap.Characteristic;
  private chargingPower: Service;

  constructor(public config: PlatformConfig, public readonly log: Logger, public readonly api: API, public accessory: PlatformAccessory) {
    this.accessory.getService(this.Service.AccessoryInformation)
      .setCharacteristic(this.Characteristic.Manufacturer, 'Homewizard')
      .setCharacteristic(this.Characteristic.Model, 'P1');

    this.chargingPower = this.accessory.getService(this.Service.LightSensor) || this.accessory.addService(this.Service.LightSensor);
  }

  public beat(consumption: number) {
    const minimumLuxLevel = 0.0001;
    let newPowerConsumptionLevel = minimumLuxLevel;
    if (consumption < 0) {
      console.log('consumption < 0', consumption * -1);
      newPowerConsumptionLevel = consumption * -1;
    }
    this.chargingPower.setCharacteristic(this.Characteristic.CurrentAmbientLightLevel, newPowerConsumptionLevel);
  }
}
