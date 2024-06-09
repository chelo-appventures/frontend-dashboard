"use client";
import Person, { Responsible } from "@/components/booking/passengers/Person";
import TermsAndConditions from "@/components/TermsAndConditions";
import { useRouter } from "next/navigation";
import { usePassengerData } from "@/state/booking/PassengerContext";

export default function Passengers() {
  const { passengerData } = usePassengerData();
  const router = useRouter();
  const redirect = (path: string) => {
    router.push(path);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("AVFORM >> SubmitHandler");
    // redirect('/booking/travel_options');
    console.log(passengerData);
  };

  const numPeople = 5;

  return (
    <form action="#" className="py-8 text-sm text-gray-500 font-bold w-10/12">
      <Responsible />

      {passengerData.passengers.map((passenger, index) => (
        <Person index={index} />
      ))}
      <TermsAndConditions />

      <div className="flex my-10 items-center justify-end">
        <button
          type="button"
          className="bg-orange-500 text-white text-[18px] px-7 py-4 rounded-md
                                        duration-500 hover:shadow-md"
          onClick={submitHandler}
        >
          Continuar
        </button>
      </div>
    </form>
  );
}
