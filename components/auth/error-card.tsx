import { BsExclamationTriangle } from "react-icons/bs";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex justify-center items-center">
        <BsExclamationTriangle className="text-destructive text-xl" />
      </div>
    </CardWrapper>
  );
};
