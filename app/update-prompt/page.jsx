import { Suspense } from "react";
import UpdatePrompt from "./UpdatePrompt"; // Adjust the import path

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;
