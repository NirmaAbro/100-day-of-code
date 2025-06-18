import React from "react";
import img from "../../../public/black.jpg";
import "../../App.css";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

function CurrencyProject({
  label,
  className,
  amount,
  oncurrencyChange,
  currencyOptions = [],
  onAmountChange,
  selectCurrency,
}) {
  const convert = () => {
    toast.success("Converted");
  };

  return (
    <div
      className={`h-full w-full  lg:h-1/2 lg:w-1/2 bg-cover bg-center flex flex-col justify-center items-center mx-auto mt-8  rounded-xl shadow-xl  ${className}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-xl mx-8  whitespace-nowrap  md:text-4xl font-bold mb-4 text-white my-6  ">
        Currency Project
      </h1>
      <div className=" ">
        <div className=" mx-4 flex gap-4 justify-between ">
          <div className="">
            <label htmlFor="" className="text-white my-2 font-bold block  ">
              {label}
            </label>
            <Input
              className={"text-white "}
              value={amount}
              type={"number"}
              placeholder="Amount"
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white my-2 font-bold block  ">
              Currency type
            </label>
            <Select>
              <SelectTrigger className="w-[180px]  !text-white border-white">
                <SelectValue placeholder="Theme" value={selectCurrency} />
              </SelectTrigger>
              <SelectContent
                onValueChange={(e) =>
                  oncurrencyChange && oncurrencyChange(Number(e.target.value))
                }
              >
                {currencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
                {/* <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className=" mx-4 my-8  flex gap-4 justify-between ">
          <div className="">
            <label htmlFor="" className="text-white my-2 font-bold block  ">
              {label}
            </label>
            <Input
              className={"text-white "}
              value={amount}
              type={"number"}
              placeholder={"Amount"}
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white my-2 font-bold block  ">
              Currency type
            </label>
            <Select>
              <SelectTrigger className="w-[180px]  !text-white border-white">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className={"text-black "}>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className=" mx-4 my-8  flex justify-center items-center">
          <Button
            onClick={convert}
            className="w-[180px]  !text-black border-white bg-white hover:bg-yellow-100 hover:text-black "
          >
            Convert
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyProject;
