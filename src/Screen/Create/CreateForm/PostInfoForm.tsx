import { Geocoding } from "@components/Geocoding/Geocoding";
import { DatePicker } from "antd";
import { useTranslation } from "react-i18next";
import { Item, Label } from "../Create.style";
import { Destination } from "Models/Post.model";
import { useCreateContext } from "../CreateProvider";

import dayjs from "dayjs";

const { RangePicker } = DatePicker;

type PostInfoFormProps = {
  setValue: (field: string, value: any) => void;
};

export const PostInfoForm = ({ setValue }: PostInfoFormProps) => {
  const { t } = useTranslation();
  const { data } = useCreateContext();

  return (
    <>
      <Item>
        <Label>{t("createStory.form.tripDuration")}</Label>
        <RangePicker
          defaultValue={
            data.duration
              ? [dayjs(data?.duration[0]), dayjs(data?.duration[1])]
              : undefined
          }
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
          value={data.destination}
        />
      </Item>
    </>
  );
};
