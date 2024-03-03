import { API } from 'homebridge';
import { HomewizardPowerConsumption } from './Platform';

export = (api: API) => {
  api.registerPlatform('HomewizardPowerConsumption', HomewizardPowerConsumption);
};
