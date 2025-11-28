import { CSSProperties } from "react";

export const UMAMI_ACCOUNT = {
  username: "ntrungduong",
  api_key: process.env.UMAMI_API_KEY,
  base_url: "https://api.umami.is/v1/websites",
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  parameters: {
    startAt: 1717174800000, // 1 Juni 2024 00:00 WIB
    endAt: 1767190799000, // 31 Desember 2025 23:59 WIB
    unit: "month",
    timezone: "Asia/Jakarta",
  },
  is_active: true,
  websites: [
    {
      domain: "portfolio-ntrungduong.vercel.app",
      website_id: process.env.UMAMI_WEBSITE_ID_SITE,
      umami_url:
        "https://cloud.umami.is/share/uu6q1cdJDpcnHy17",
    },
  ],
};
export const MAP_FILE = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const ISO_COUNTRIES: Record<string, string> = {
  '004': 'AF', '008': 'AL', '012': 'DZ', '016': 'AS', '020': 'AD',
  '024': 'AO', '028': 'AG', '031': 'AZ', '032': 'AR', '036': 'AU',
  '040': 'AT', '044': 'BS', '048': 'BH', '050': 'BD', '051': 'AM',
  '052': 'BB', '056': 'BE', '060': 'BM', '064': 'BT', '068': 'BO',
  '070': 'BA', '072': 'BW', '076': 'BR', '084': 'BZ', '090': 'SB',
  '092': 'VG', '096': 'BN', '100': 'BG', '104': 'MM', '108': 'BI',
  '112': 'BY', '116': 'KH', '120': 'CM', '124': 'CA', '132': 'CV',
  '140': 'CF', '144': 'LK', '148': 'TD', '152': 'CL', '156': 'CN',
  '170': 'CO', '178': 'CG', '180': 'CD', '188': 'CR', '191': 'HR',
  '192': 'CU', '196': 'CY', '203': 'CZ', '204': 'BJ', '208': 'DK',
  '214': 'DO', '218': 'EC', '222': 'SV', '231': 'ET', '233': 'EE',
  '246': 'FI', '250': 'FR', '266': 'GA', '268': 'GE', '270': 'GM',
  '276': 'DE', '288': 'GH', '300': 'GR', '320': 'GT', '324': 'GN',
  '332': 'HT', '340': 'HN', '344': 'HK', '348': 'HU', '352': 'IS',
  '356': 'IN', '360': 'ID', '364': 'IR', '368': 'IQ', '372': 'IE',
  '376': 'IL', '380': 'IT', '388': 'JM', '392': 'JP', '398': 'KZ',
  '400': 'JO', '404': 'KE', '410': 'KR', '414': 'KW', '422': 'LB',
  '428': 'LV', '440': 'LT', '442': 'LU', '458': 'MY', '484': 'MX',
  '504': 'MA', '508': 'MZ', '528': 'NL', '554': 'NZ', '566': 'NG',
  '578': 'NO', '586': 'PK', '604': 'PE', '608': 'PH', '616': 'PL',
  '620': 'PT', '642': 'RO', '643': 'RU', '682': 'SA', '688': 'RS',
  '702': 'SG', '710': 'ZA', '724': 'ES', '752': 'SE', '756': 'CH',
  '764': 'TH', '784': 'AE', '788': 'TN', '792': 'TR', '804': 'UA',
  '826': 'GB', '840': 'US', '704': 'VN', '887': 'YE',
};

export const COUNTRY_NAMES: Record<string, string> = {
  'AF': 'Afghanistan', 'AL': 'Albania', 'DZ': 'Algeria', 'AS': 'American Samoa',
  'AND': 'Andorra', 'AGO': 'Angola', 'ATG': 'Antigua and Barbuda', 'AZE': 'Azerbaijan',
  'ARG': 'Argentina', 'AUS': 'Australia', 'AUT': 'Austria', 'BHS': 'Bahamas',
  'BHR': 'Bahrain', 'BGD': 'Bangladesh', 'ARM': 'Armenia', 'BRB': 'Barbados',
  'BEL': 'Belgium', 'BMU': 'Bermuda', 'BTN': 'Bhutan', 'BOL': 'Bolivia',
  'BIH': 'Bosnia and Herzegovina', 'BWA': 'Botswana', 'BRA': 'Brazil', 'BLZ': 'Belize',
  'SLB': 'Solomon Islands', 'VGB': 'British Virgin Islands', 'BRN': 'Brunei',
  'BGR': 'Bulgaria', 'MMR': 'Myanmar', 'BDI': 'Burundi', 'BLR': 'Belarus',
  'KHM': 'Cambodia', 'CMR': 'Cameroon', 'CAN': 'Canada', 'CPV': 'Cape Verde',
  'CAF': 'Central African Republic', 'LKA': 'Sri Lanka', 'TCD': 'Chad', 'CHL': 'Chile',
  'CHN': 'China', 'COL': 'Colombia', 'COG': 'Republic of the Congo', 'COD': 'Democratic Republic of the Congo',
  'CRI': 'Costa Rica', 'HRV': 'Croatia', 'CUB': 'Cuba', 'CYP': 'Cyprus',
  'CZE': 'Czech Republic', 'BEN': 'Benin', 'DNK': 'Denmark', 'DOM': 'Dominican Republic',
  'ECU': 'Ecuador', 'SLV': 'El Salvador', 'ETH': 'Ethiopia', 'EST': 'Estonia',
  'FIN': 'Finland', 'FRA': 'France', 'GAB': 'Gabon', 'GEO': 'Georgia',
  'GMB': 'Gambia', 'DEU': 'Germany', 'GHA': 'Ghana', 'GRC': 'Greece',
  'GTM': 'Guatemala', 'GIN': 'Guinea', 'HTI': 'Haiti', 'HND': 'Honduras',
  'HKG': 'Hong Kong', 'HUN': 'Hungary', 'ISL': 'Iceland', 'IND': 'India',
  'IDN': 'Indonesia', 'IRN': 'Iran', 'IRQ': 'Iraq', 'IRL': 'Ireland',
  'ISR': 'Israel', 'ITA': 'Italy', 'JAM': 'Jamaica', 'JPN': 'Japan',
  'KAZ': 'Kazakhstan', 'JOR': 'Jordan', 'KEN': 'Kenya', 'KOR': 'South Korea',
  'KWT': 'Kuwait', 'LBN': 'Lebanon', 'LVA': 'Latvia', 'LTU': 'Lithuania',
  'LUX': 'Luxembourg', 'MYS': 'Malaysia', 'MEX': 'Mexico', 'MAR': 'Morocco',
  'MOZ': 'Mozambique', 'NLD': 'Netherlands', 'NZL': 'New Zealand', 'NGA': 'Nigeria',
  'NOR': 'Norway', 'PAK': 'Pakistan', 'PER': 'Peru', 'PHL': 'Philippines',
  'POL': 'Poland', 'PRT': 'Portugal', 'ROU': 'Romania', 'RUS': 'Russia',
  'SAU': 'Saudi Arabia', 'SRB': 'Serbia', 'SGP': 'Singapore', 'ZAF': 'South Africa',
  'ESP': 'Spain', 'SWE': 'Sweden', 'CHE': 'Switzerland', 'THA': 'Thailand',
  'ARE': 'United Arab Emirates', 'TUN': 'Tunisia', 'TUR': 'Turkey', 'UKR': 'Ukraine',
  'GBR': 'United Kingdom', 'USA': 'United States', 'VN': 'Vietnam', 'YEM': 'Yemen',
};

// ============================================
// TYPES
// ============================================

export interface CountryData {
  x: string;      // ISO code: VN, US, JP
  y: number;     // Số lượng visitors
  percentage?: number; // Auto calculated
}

export interface WorldMapProps {
  data: CountryData[];
  theme?: 'light' | 'dark';
  height?: string;
  className?: string;
  style?: CSSProperties;
  onCountryClick?: (countryCode: string) => void;
}