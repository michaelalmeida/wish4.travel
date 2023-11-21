import { Geocoding } from "@components/Geocoding/Geocoding";
import { DatePicker } from "antd";
import { useTranslation } from "react-i18next";
import { Item, Label } from "../Create.style";
import { Destination } from "Models/Post.model";
import { memo } from "react";

const { RangePicker } = DatePicker;

type PostInfoFormProps = {
  setValue: (field: string, value: any) => void;
};

export const PostInfoForm = memo(({ setValue }: PostInfoFormProps) => {
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
            setValue("duration", val);
          }}
        />
      </Item>
      <Item>
        <Label htmlFor="geocoding">{t("createStory.form.city")}</Label>
        <Geocoding
          setDestination={(destination: Destination) =>
            setValue("destination", destination)
          }
          placeholder={t("createStory.form.city.placeholder")}
        />
      </Item>
    </>
  );
});
