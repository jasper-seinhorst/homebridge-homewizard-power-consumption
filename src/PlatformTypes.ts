import { PlatformAccessory } from 'homebridge';

export interface HomewizardPowerConsumptionAccessory {
    accessory: PlatformAccessory;
    displayName?: string;
    beat(consumption: number): void;
}