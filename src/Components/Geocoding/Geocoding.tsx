import Geosuggest from "@ubilabs/react-geosuggest";
import styled from "styled-components";
import { WHITE, BACKGROUND, INPUT_BORDER } from "@constants/colors";
import { BORDER_RADIUS } from "@constants/sizes";
import { Destination } from "Models/Post.model";

export const GeocodingWrapper = styled.div`
  position: relative;

  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
    display: none;
  }

  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
  }

  .geosuggest__input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid ${INPUT_BORDER};
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
  }

  .geosuggest__suggests {
    margin: 0;
    padding: 0;
    border-radius: 0 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px;
    background: ${WHITE};
    border-top: 0;
    border: 1px solid ${INPUT_BORDER};

    li {
      margin: 0;
      list-style: none;
      padding: 10px 15px;
      cursor: pointer;

      &:last-child {
        border-bottom-left-radius: ${BORDER_RADIUS}px;
        border-bottom-right-radius: ${BORDER_RADIUS}px;
      }

      &:hover {
        background: ${BACKGROUND};
      }
    }
  }
`;

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
  const initialLatLong = {
    lat: value?.lat || 53.558572,
    long: value?.long || 9.9278215,
  };
  const googleMapsObject = (window as any).google.maps;

  const onSuggestSelect = (suggest: any) => {
    setDestination({
      city: suggest.gmaps.name,
      lat: suggest.location.lat,
      long: suggest.location.lng,
    });
  };

  return (
    <GeocodingWrapper>
      <Geosuggest
        id="geocoding"
        placeholder={placeholder}
        onSuggestSelect={onSuggestSelect}
        radius="20"
        googleMaps={googleMapsObject}
        location={
          new googleMapsObject.LatLng(initialLatLong.lat, initialLatLong.long)
        }
        initialValue={value?.city}
        queryDelay={300}
      />
    </GeocodingWrapper>
  );
};
