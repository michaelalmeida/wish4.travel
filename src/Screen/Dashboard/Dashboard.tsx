import { PrivateLayout } from "../../Components/PrivateLayout";
import { NumberCard } from "../../Components/Stats/NumberCard";
import { Content, DashboardWrapper, Stats } from "./Dashboard.style";
import { useSidebarItems } from "./useSidebarItems";
import { Highlight } from "../../Components/Cards";
import { UserInfo } from "../../Models/User.model";
import { H2 } from "@ui/Typography";
import { useTranslation } from "react-i18next";

type DashboardProps = {
  user: UserInfo;
};

export const Dashboard = ({ user }: DashboardProps) => {
  const { t } = useTranslation();
  const { items } = useSidebarItems();

  return (
    <PrivateLayout>
      <DashboardWrapper>
        <Content>
          <Highlight username={user.username} />
          <div>
            <H2 marginTop>{t("update.notes.title")}</H2>
            <p>{t("update.notes.subtitle")}</p>
            <ul>
              <li>Upload de imagem nas postagem;</li>
              <li>Tags;</li>
              <li>Nome do usuário nas postanges e no mapa;</li>
            </ul>
          </div>
        </Content>
        {/* <Stats>
          {items.map((item) => (
            <NumberCard
              key={item.label}
              number={item.number}
              label={item.label}
              variant={item.variant}
              action={item.action}
            />
          ))}
        </Stats> */}
      </DashboardWrapper>
    </PrivateLayout>
  );
};
