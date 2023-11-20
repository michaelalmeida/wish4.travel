import { PrivateLayout } from "../../Components/PrivateLayout";

import { ContentContainer } from "@ui/Container";
import { Form } from "./CreateForm";
import { CreateHeader } from "./CreateHeader";
import { CreateProvider } from "./CreateProvider";

const Create = () => {
  return (
    <PrivateLayout>
      <ContentContainer>
        <CreateProvider>
          <CreateHeader />
          <Form />
        </CreateProvider>
      </ContentContainer>
    </PrivateLayout>
  );
};

export default Create;
