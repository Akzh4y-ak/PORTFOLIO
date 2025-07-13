import Navbar from "./components/Navbar";
import Routing from "./navigation/Routing";

function App() {
  return (
    <div className="min-h-screen bg-[#05060f] relative overflow-x-hidden text-white">
      {/* Glowing floating blobs */}
      <div className="absolute w-full h-full z-0 overflow-hidden">
        {/* Cyan Glow */}
        <div className="absolute w-[500px] h-[500px] top-[-100px] left-[-100px] bg-cyan-400 blur-3xl opacity-30 rounded-full animate-[move1_20s_linear_infinite]"></div>

        {/* Purple Glow */}
        <div className="absolute w-[600px] h-[600px] bottom-[-120px] right-[-100px] bg-purple-500 blur-2xl opacity-20 rounded-full animate-[move2_25s_linear_infinite]"></div>

        {/* Pink Glow */}
        <div className="absolute w-[300px] h-[300px] top-1/3 left-1/2 bg-pink-400 blur-2xl opacity-20 rounded-full animate-[move3_30s_linear_infinite]"></div>
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <Routing />
      </div>
    </div>
  );
}

export default App;
