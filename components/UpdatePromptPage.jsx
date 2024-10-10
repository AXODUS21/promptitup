// app/update-prompt/page.js

import { Suspense } from "react";
import UpdatePrompt from "@app/update-prompt/page";

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;
