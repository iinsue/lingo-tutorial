import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_2g3XFbjUdMWKRZYGCcGrt2c3fIO"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};
