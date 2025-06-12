import "./App.css";
import toast from 'react-hot-toast'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function App() {

  const handleCopy = () => {
    toast.success('Operation successful!')
  };

  
  return (
    <>
      <div>
        <h1 className="text-3xl bg-amber-500 flex  justify-center items-center ">
          Password Generator
        </h1>
        <div className="flex justify-center items-center border rounded-xl ">
          {/* input  */}
          <div className=" m-4 rounded-2xl border flex ">
            {/* <input type="text" className=" px-3 py-2 outline-none " /> */}
            <Input onChange={(e) => console.log(e.target.value)} type="text" className={" px-3 py-2 outline-none border-none focus:outline-none focus:ring-0 focus:ring-transparent "} />
            {/* <button
              className="bg-black text-white p-2 rounded-2xl hover:bg-blue-800 cursor-pointer "
              onClick={handleCopy}
            >
              Copy
            </button> */}
            <Button variant="outline"  onClick={handleCopy} className={"bg-black text-white hover:bg-blue-800 rounded-xl  cursor-pointer "}> Copy</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
