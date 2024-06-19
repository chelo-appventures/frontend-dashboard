import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

const isError = (v: string | undefined): boolean => v !== "";

const ErrorMessage = ({ field }: { field: string | undefined }) => {
  return isError(field) ? (
    <>
      <div className="flex flex-row items-center text-red-500">
        <ExclamationCircleIcon className="size-4 " />
        <p className="ml-2 text-xs">{field}</p>
      </div>
    </>
  ) : null;
};

export { ErrorMessage, isError };
