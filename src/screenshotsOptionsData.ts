export interface LanguageData {
  [version: string]: boolean;
}

export interface screenshotsOptionsData {
  [key: string]: LanguageData;
  en: LanguageData & {
    IPHONE_67: boolean;
    IPHONE_65: boolean;
    IPHONE_61: boolean;
    IPHONE_58: boolean;
    IPHONE_55: boolean;
    IPHONE_47: boolean;
    IPHONE_40: boolean;
  };
  tr: LanguageData & {
    IPHONE_67: boolean;
    IPHONE_65: boolean;
    IPHONE_61: boolean;
    IPHONE_58: boolean;
    IPHONE_55: boolean;
    IPHONE_47: boolean;
    IPHONE_40: boolean;
  };
  de: LanguageData & {
    IPHONE_67: boolean;
    IPHONE_65: boolean;
    IPHONE_61: boolean;
    IPHONE_58: boolean;
    IPHONE_55: boolean;
    IPHONE_47: boolean;
    IPHONE_40: boolean;
  };
}

const screenshotsOptions: screenshotsOptionsData = {
  en: {
    IPHONE_67: false,
    IPHONE_65: true,
    IPHONE_61: true,
    IPHONE_58: true,
    IPHONE_55: false,
    IPHONE_47: false,
    IPHONE_40: false,
  },
  tr: {
    IPHONE_67: false,
    IPHONE_65: false,
    IPHONE_61: true,
    IPHONE_58: true,
    IPHONE_55: true,
    IPHONE_47: true,
    IPHONE_40: true,
  },
  de: {
    IPHONE_67: true,
    IPHONE_65: true,
    IPHONE_61: true,
    IPHONE_58: false,
    IPHONE_55: true,
    IPHONE_47: false,
    IPHONE_40: false,
  },
};

export default screenshotsOptions;
