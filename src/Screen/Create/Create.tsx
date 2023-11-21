import { PrivateLayout } from "../../Components/PrivateLayout";

import { ContentContainer } from "@ui/Container";
import { Form } from "./CreateForm";
import { CreateHeader } from "./CreateHeader";
import { CreateProvider } from "./CreateProvider";
import { useParams } from "react-router-dom";

const Create = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PrivateLayout>
      <ContentContainer>
        <CreateProvider>
          <CreateHeader isEditing={!!id} />
          <Form postId={id} />
        </CreateProvider>
      </ContentContainer>
    </PrivateLayout>
  );
};

export default Create;
