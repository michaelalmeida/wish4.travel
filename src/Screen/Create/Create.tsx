import { PrivateLayout } from "../../Components/PrivateLayout";

import { ContentContainer } from "@ui/Container";
import { Form } from "./CreateForm";
import { CreateHeader } from "./CreateHeader";
import { CreateProvider } from "./CreateProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Create = () => {
  const { id } = useParams<{ id: string }>();

  const isEditing = !!id;

  return (
    <PrivateLayout>
      <ContentContainer>
        <CreateProvider>
          <CreateHeader isEditing={isEditing} />
          <Form isEditing={isEditing} />
        </CreateProvider>
      </ContentContainer>
    </PrivateLayout>
  );
};

export default Create;
