import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useCallback, useState, useEffect, useRef } from "react";
import "../App.css";

function PasswordGenerator() {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [character, setCharacter] = useState(false);

  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (number) chars += "0123456789";
    if (symbol) chars += "!@#$%^&*";
    if (character) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    console.log("chars ", chars);
    for (let i = 0; i <= length; i++) {
      let random = Math.floor(Math.random() * chars.length);
      console.log("random", random);
      pass += chars.charAt(random);
      console.log(pass);
    }
    setPassword(pass);
  }, [length, number, symbol, character]);

  const passwordRef = useRef(null);

  const handleCopyclipboardpassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password);
    toast.success("Copied to clipboard");
  }, [Password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, symbol, character]);
  return (
    <>
      <>
        <div className="flex justify-center items-center w-full border border-gray-500 shadow-2xl  lg:m-auto mt-5 lg:w-[50%] rounded-xl  flex-col ">
          <h1 className=" text-base whitespace-nowrap  lg:text-3xl border-b mt-4  flex  justify-center items-center ">
            Password Generator
          </h1>
          <div className=" m-4 rounded-2xl border flex mt-16">
            <Input
              onChange={(e) => console.log(e.target.value)}
              type="text"
              className={
                "px-2 py-2 lg:px-4  lg:py-2 w-auto lg:w-48 outline-none border-none focus:outline-none focus:ring-0 focus:ring-transparent  focus-visible:ring-0 focus-visible:outline-none  "
              }
              value={Password}
              readOnly
              placeholder="Password"
              ref={passwordRef}
            />
            <Button
              variant="outline"
              onClick={handleCopyclipboardpassword}
              className={
                "bg-black text-white hover:bg-blue-800 rounded-xl  cursor-pointer "
              }
            >
              Copy
            </Button>
          </div>
          <div className="mx-4 block lg:flex gap-5 p-4 ">
            <span className="flex gap-3 ">
              <Slider
                value={[length]}
                min={8}
                max={16}
                className="m-4 w-48 lg:w-24 "
                onValueChange={(e) => {
                  setLength(e[0]); // use e[0] to get the number
                  console.log(e[0]);
                }}
              />
            </span>

            <div className="block md:flex px-4 gap-4 ">
              <p className=" font-bold mt-2 ml-5 md:ml-0 ">Length : {length}</p>
              <p className="flex gap-1 font-bold mt-2">
                <Checkbox
                  className={"mt-1 "}
                  onCheckedChange={(value) => {
                    setNumber(value);
                    console.log(value);
                  }}
                  checked={number}
                />{" "}
                Numbers
              </p>
              <p className="flex gap-1 font-bold mt-2 ">
                <Checkbox
                  className={"mt-1 "}
                  onCheckedChange={(value) => {
                    setSymbol(value);
                    console.log(value);
                  }}
                  checked={symbol}
                />{" "}
                Characters
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default PasswordGenerator;
