import React from "react";
import { H2 } from "../../Ui/Typography";
import { HighlightCard } from "./Cards.style";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Hooks/useUser";

export const Highlight = () => {
  const { user } = useUserContext();
  const blogUrl = `${process.env.WISH4TRAVEL_BASEURL}/${user.username}`;

  return (
    <HighlightCard>
      <H2>Veja o seu blog no ar</H2>
      <div>
        <Link to={blogUrl} title={"Go to the your personal trips page"}>
          {blogUrl}
        </Link>
      </div>
    </HighlightCard>
  );
};
