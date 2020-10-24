import produce from 'immer';
import sideBar6 from '~/assets/utils/images/sidebar/city1.jpg';

import { Types } from '../types';

/**
* Reducers
*/
const INITIAL_STATE = {
  backgroundColor: '',
  headerBackgroundColor: '',
  enableMobileMenuSmall: '',
  enableBackgroundImage: false,
  enableClosedSidebar: false,
  enableFixedHeader: true,
  enableHeaderShadow: true,
  enableSidebarShadow: true,
  enableFixedFooter: true,
  enableFixedSidebar: true,
  colorScheme: 'white',
  backgroundImage: sideBar6,
  backgroundImageOpacity: 'opacity-06',
  enablePageTitleIcon: true,
  enablePageTitleSubheading: true,
  enablePageTabsAlt: true,
  mobileSize: false,
  activeTab: 0,
}

export default function themeOptions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ENABLE_BACKGROUND_IMAGE:
      return {
        ...state,
        enableBackgroundImage: action.enableBackgroundImage
      };

    case Types.SET_MOBILE_SIZE:
      return {
        ...state,
        mobileSize: action.mobileSize
      };

    case Types.SET_ENABLE_FIXED_HEADER:
      return {
        ...state,
        enableFixedHeader: action.enableFixedHeader
      };

    case Types.SET_ENABLE_HEADER_SHADOW:
      return {
        ...state,
        enableHeaderShadow: action.enableHeaderShadow
      };

    case Types.SET_ENABLE_SIDEBAR_SHADOW:
      return {
        ...state,
        enableSidebarShadow: action.enableSidebarShadow
      };

    case Types.SET_ENABLE_PAGETITLE_ICON:
      return {
        ...state,
        enablePageTitleIcon: action.enablePageTitleIcon
      };

    case Types.SET_ENABLE_PAGETITLE_SUBHEADING:
      return {
        ...state,
        enablePageTitleSubheading: action.enablePageTitleSubheading
      };

    case Types.SET_ENABLE_PAGE_TABS_ALT:
      return {
        ...state,
        enablePageTabsAlt: action.enablePageTabsAlt
      };

    case Types.SET_ENABLE_FIXED_SIDEBAR:
      return {
        ...state,
        enableFixedSidebar: action.enableFixedSidebar
      };

    case Types.SET_ENABLE_MOBILE_MENU:
      return {
        ...state,
        enableMobileMenu: action.enableMobileMenu
      };

    case Types.SET_ENABLE_MOBILE_MENU_SMALL:
      return {
        ...state,
        enableMobileMenuSmall: action.enableMobileMenuSmall
      };

    case Types.SET_ENABLE_CLOSED_SIDEBAR:
      return {
        ...state,
        enableClosedSidebar: action.enableClosedSidebar
      };

    case Types.SET_ENABLE_FIXED_FOOTER:
      return {
        ...state,
        enableFixedFooter: action.enableFixedFooter
      };

    case Types.SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      };

    case Types.SET_HEADER_BACKGROUND_COLOR:
      return {
        ...state,
        headerBackgroundColor: action.headerBackgroundColor
      };

    case Types.SET_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: action.colorScheme
      };

    case Types.SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: action.backgroundImage
      };

    case Types.SET_BACKGROUND_IMAGE_OPACITY:
      return {
        ...state,
        backgroundImageOpacity: action.backgroundImageOpacity
      };
    case Types.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.tab
      };
    case Types.LOGOUT:
      return {
        backgroundColor: '',
        headerBackgroundColor: '',
        enableMobileMenuSmall: '',
        enableBackgroundImage: false,
        enableClosedSidebar: false,
        enableFixedHeader: true,
        enableHeaderShadow: true,
        enableSidebarShadow: true,
        enableFixedFooter: true,
        enableFixedSidebar: true,
        colorScheme: 'white',
        backgroundImage: sideBar6,
        backgroundImageOpacity: 'opacity-06',
        enablePageTitleIcon: true,
        enablePageTitleSubheading: true,
        enablePageTabsAlt: true,
        activeTab: 0,
      };
    default:
      return state;
  }
}