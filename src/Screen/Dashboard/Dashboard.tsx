import React from "react";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { NumberCard } from "../../Components/Stats/NumberCard";
import { Content, DashboardWrapper, Stats } from "./Dashboard.style";
import { useSidebarItems } from "./useSidebarItems";

export const Dashboard = () => {
  const { items } = useSidebarItems();

  return (
    <PrivateLayout>
      <DashboardWrapper>
        <Content>Conteudo aqui</Content>
        <Stats>
          {items.map((item) => (
            <NumberCard
              key={item.label}
              number={item.number}
              label={item.label}
              variant={item.variant}
              action={item.action}
            />
          ))}
        </Stats>
      </DashboardWrapper>
    </PrivateLayout>
  );
};
