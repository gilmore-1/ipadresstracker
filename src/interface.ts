export interface IpAddressInfo {
    ip: string;
    isp: string;
    location: {
      country: string;
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: string;
      geonameId: number;
    };
    as: {
      asn: number;
      name: string;
      route: string;
      domain: string;
      type: string;
    };
  }