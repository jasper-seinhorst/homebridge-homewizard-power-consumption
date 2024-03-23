import { PlatformAccessory } from 'homebridge';

export interface HomewizardPowerConsumptionAccessory {
    accessory: PlatformAccessory;
    displayName?: string;
    beat(consumption: number): void;
}

export interface HomewizardDevice {
    product_name: string;
    product_type: string;
    serial: string;
    firmware_version: string;
    api_version: string;
}