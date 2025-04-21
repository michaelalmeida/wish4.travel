import { Select, Spin } from "antd";
import debounce from "lodash/debounce";
import { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Destination } from "Models/Post.model";

export const GeocodingWrapper = styled.div`
  position: relative;
`;

type OptionType = {
  label: string;
  value: string;
  lat: number;
  lng: number;
};

type GeocodingProps = {
  placeholder: string;
  setDestination: (destination: Destination) => void;
  value?: Destination;
};

export const Geocoding = ({
  placeholder,
  setDestination,
  value,
}: GeocodingProps) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [fetching, setFetching] = useState(false);
  const fetchRef = useRef(0);

  const fetchGeolocation = async (search: string): Promise<OptionType[]> => {
    if (!search) return [];

    fetchRef.current += 1;
    const currentFetchId = fetchRef.current;
    setFetching(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_GEOCODE_ENDPOINT}json?q=${search}&key=${
          import.meta.env.VITE_GEOCODE_KEY
        }`
      );
      const data = await res.json();

      if (currentFetchId !== fetchRef.current) return [];

      const results = data.results || [];

      const mappedOptions: OptionType[] = results.map((r: any) => ({
        label: r.formatted,
        value: r.formatted,
        lat: r.geometry.lat,
        lng: r.geometry.lng,
      }));

      setOptions(mappedOptions);
      return mappedOptions;
    } catch (err) {
      console.error("Erro ao buscar geolocalização:", err);
      return [];
    } finally {
      setFetching(false);
    }
  };

  const debounceFetcher = useMemo(() => debounce(fetchGeolocation, 800), []);

  const handleChange = (val: string) => {
    const selected = options.find((o) => o.value === val);
    if (selected) {
      setDestination({
        city: selected.value,
        lat: selected.lat,
        long: selected.lng,
      });
    }
  };

  return (
    <GeocodingWrapper>
      <Select
        showSearch
        labelInValue={false}
        placeholder={placeholder}
        filterOption={false}
        onSearch={debounceFetcher}
        onChange={handleChange}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        options={options.map((opt) => ({
          label: opt.label,
          value: opt.value,
        }))}
        value={value?.city}
        style={{ width: "100%" }}
      />
    </GeocodingWrapper>
  );
};
