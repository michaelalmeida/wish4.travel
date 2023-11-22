import { Menu } from "./Menu";
import { FixedMenu, SidebarWrapper } from "./Sidebar.style";
import { Header } from "../Header";
import { useUserContext } from "../../Hooks/useUser";

export const SideBar = () => {
  const { user } = useUserContext();

  return (
    <SidebarWrapper>
      <FixedMenu>
        <Header name={user.firstName} />
        <Menu />
      </FixedMenu>
    </SidebarWrapper>
  );
};
