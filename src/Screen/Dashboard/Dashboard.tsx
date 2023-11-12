import React from "react";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { NumberCard } from "../../Components/Stats/NumberCard";
import { Content, DashboardWrapper, Stats } from "./Dashboard.style";
import { useSidebarItems } from "./useSidebarItems";
import { Highlight } from "../../Components/Cards";
import { UserInfo } from "../../Models/User.model";

type DashboardProps = {
  user: UserInfo;
};

export const Dashboard = ({ user }: DashboardProps) => {
  const { items } = useSidebarItems();

  return (
    <PrivateLayout>
      <DashboardWrapper>
        <Content>
          <Highlight username={user.username} />
        </Content>
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
