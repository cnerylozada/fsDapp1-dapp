"use-client";

import { Abi, Address } from "viem";
import { useReadContract } from "wagmi";
import { GetAmountByAddressForm } from "./GetAmountByAddressForm";

export const ReadContractMethods = ({
  abi,
  address,
}: {
  abi: Abi;
  address: Address;
}) => {
  const { data: MINIMUN_USD_AMOUNT, isLoading: isMINIMUN_USD_AMOUNTLoading } =
    useReadContract({
      abi,
      address,
      functionName: "MINIMUN_USD_AMOUNT",
    });

  return (
    <div className="p-4 rounded-md bg-blue-50">
      <div className="mb-3 border-b-2 text-blue-500 font-bold">
        Read Contract Methods
      </div>
      <div className="space-y-4">
        <div>
          {isMINIMUN_USD_AMOUNTLoading ? (
            <div>Loading ... </div>
          ) : (
            <div>
              <p>
                <span className="font-bold">MINIMUN_USD_AMOUNT:</span>{" "}
                <span>USD ${`${MINIMUN_USD_AMOUNT}`}</span>
              </p>
            </div>
          )}
        </div>
        <GetAmountByAddressForm abi={abi} address={address} />
      </div>
    </div>
  );
};