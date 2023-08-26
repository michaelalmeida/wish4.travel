import { Calendar as CalendarAnt } from "antd";
import type { Dayjs } from "dayjs";
import React from "react";
import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";

import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import { H2 } from "../../Ui/Typography";
import { CalendarContainer } from "./Calendar.style";

export const Calendar = () => {
  const { t } = useTranslation();

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <PrivateLayout>
      <CalendarContainer>
        <H2 variation="thin">{t("menu.calendar")}</H2>
        <CalendarAnt onPanelChange={onPanelChange} />
      </CalendarContainer>
    </PrivateLayout>
  );
};
