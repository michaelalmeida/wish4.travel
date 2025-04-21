import { OutputBlockData } from "@editorjs/editorjs";

export type Destination = {
  city: string;
  lat: number;
  long: number;
};

export type Post = {
  id: string;
  title: string;
  alias: string;
  creatorUid: string;
  destination: Destination;
  blocks: OutputBlockData[];
  createdAt: Date;
  duration: any[];
  userRef?: string;
};

export type CreatePost = Omit<Post, "id">;

export type Geocoding = {
  documentation: string;
  licenses: {
    name: string;
    url: string;
  }[];
  rate: {
    limit: number;
    remaining: number;
    reset: number;
  };
  results: {
    annotations: {
      DMS: {
        lat: string;
        lng: string;
      };
      MGRS: string;
      Maidenhead: string;
      Mercator: {
        x: number;
        y: number;
      };
      NUTS: {
        NUTS0: { code: string };
        NUTS1: { code: string };
        NUTS2: { code: string };
        NUTS3: { code: string };
      };
      OSM: {
        edit_url: string;
        note_url: string;
        url: string;
      };
      UN_M49: {
        regions: {
          [key: string]: string;
        };
        statistical_groupings: string[];
      };
      callingcode: number;
      currency: {
        alternate_symbols: string[];
        decimal_mark: string;
        html_entity: string;
        iso_code: string;
        iso_numeric: string;
        name: string;
        smallest_denomination: number;
        subunit: string;
        subunit_to_unit: number;
        symbol: string;
        symbol_first: number;
        thousands_separator: string;
      };
      flag: string;
      geohash: string;
      qibla: number;
      roadinfo: {
        drive_on: string;
        speed_in: string;
      };
      sun: {
        rise: {
          apparent: number;
          astronomical: number;
          civil: number;
          nautical: number;
        };
        set: {
          apparent: number;
          astronomical: number;
          civil: number;
          nautical: number;
        };
      };
      timezone: {
        name: string;
        now_in_dst: number;
        offset_sec: number;
        offset_string: string;
        short_name: string;
      };
      what3words: {
        words: string;
      };
      wikidata: string;
    };
    bounds: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
    confidence: number;
    formatted: string;
    geometry: {
      lat: number;
      lng: number;
    };
  }[];
  status: {
    code: number;
    message: string;
  };
  stay_informed: {
    blog: string;
    mastodon: string;
  };
  thanks: string;
  timestamp: {
    created_http: string;
    created_unix: number;
  };
  total_results: number;
};
