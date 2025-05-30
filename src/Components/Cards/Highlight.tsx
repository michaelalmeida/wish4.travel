import { useState } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { H2 } from "@ui/Typography";
import {
  HighlightCard,
  HighlightCardContent,
  HighlightCardAction,
} from "./Cards.style";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { DASHBOARD_ROUTES } from "../../constants/routes";

export const NoProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

export const Highlight = ({ username }: { username?: string }) => {
  const { t } = useTranslation();
  const [clipboard, setClipboard] = useState(false);
  const navigate = useNavigate();
  const blogUrl = `${import.meta.env.VITE_WISH4TRAVEL_BASEURL}/${username}`;

  const copyToClipBoard = () => {
    try {
      navigator.clipboard.writeText(blogUrl);
      setClipboard(true);

      setTimeout(() => {
        setClipboard(false);
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  };

  const goToProfile = () => {
    navigate(DASHBOARD_ROUTES.PROFILE);
  };

  return (
    <HighlightCard>
      <HighlightCardContent>
        <H2 variation="thin">{t("mainCard.title")}</H2>
        <div>
          {username ? (
            <>
              <Link to={blogUrl} title={t("mainCard.personalBlog")}>
                {blogUrl}
              </Link>
              <HighlightCardAction onClick={copyToClipBoard}>
                <FontAwesomeIcon icon={faCopy} />
                {clipboard && t("copied")}
              </HighlightCardAction>
            </>
          ) : (
            <NoProfileWrapper>
              {t("app.username.missing")}
              <Button onClick={goToProfile} type="primary">
                {t("mainCard.setUpProfile")}
              </Button>
            </NoProfileWrapper>
          )}
        </div>
      </HighlightCardContent>
    </HighlightCard>
  );
};
