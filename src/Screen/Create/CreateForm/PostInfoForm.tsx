import { Geocoding } from "@components/Geocoding/Geocoding";
import { DatePicker } from "antd";
import { useTranslation } from "react-i18next";
import { Item, Label } from "../Create.style";
import { Destination } from "Models/Post.model";
import { memo } from "react";

const { RangePicker } = DatePicker;

type PostInfoFormProps = {
  setDestination: (destination: Destination) => void;
  setDate: (date: any) => void;
};

export const PostInfoForm = memo(
  ({ setDestination, setDate }: PostInfoFormProps) => {
    const { t } = useTranslation();

    return (
      <>
        <Item>
          <Label>{t("createStory.form.tripDuration")}</Label>
          <RangePicker
            bordered={false}
            size="large"
            format={"DD-MM-YYYY"}
            changeOnBlur
            onChange={(val) => {
              setDate(val);
            }}
          />
        </Item>
        <Item>
          <Label htmlFor="geocoding">{t("createStory.form.city")}</Label>
          <Geocoding
            setDestination={setDestination}
            placeholder={t("createStory.form.city.placeholder")}
          />
        </Item>
      </>
    );
  }
);
