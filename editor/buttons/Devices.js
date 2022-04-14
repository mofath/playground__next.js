import { __ } from '../lang/I18n';

const Desktop = function () {
  return {
    id: 'device-desktop',
    label: '<i class="fa fa-desktop"></i>',
    attributes: { title: __('devices.desktop'), style: 'font-size: 18px' },
    command: 'set-device-desktop',
    togglable: false,
    active: true,
  };
};

const Tablet = function () {
  return {
    id: 'device-tablet',
    label: '<i class="fa fa-tablet"></i>',
    attributes: { title: __('devices.tablet'), style: 'font-size: 20px' },
    command: 'set-device-tablet',
    togglable: false,
  };
};

const XSTablet = function () {
  return {
    id: 'device-xs-tablet',
    label: '<i class="fa fa-tablet" style="font-size: 16px;"></i>',
    attributes: { title: __('devices.tablet'), style: 'font-size: 16px' },
    command: 'set-device-xs-tablet',
    togglable: false,
  };
};

const Mobile = function () {
  return {
    id: 'device-mobile',
    label: '<i class="fa fa-mobile"></i>',
    attributes: { title: __('devices.mobile'), style: 'font-size: 18px' },
    command: 'set-device-mobile',
    togglable: false,
  };
};

export { Desktop, Tablet, XSTablet, Mobile };
