export default function BackgroundBeams() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-[#020004]">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
            <div className="absolute top-[20%] left-1/4 w-[40%] h-[400px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        {/* Vertical Light Beams */}
        <div className="absolute inset-0 z-0 pointer-events-none mask-gradient overflow-hidden max-w-7xl mx-auto">
            <div className="beam-vertical left-[10%] delay-75 duration-1000"></div>
            <div className="beam-vertical left-[25%] opacity-20"></div>
            <div className="beam-vertical left-[50%] opacity-10"></div>
            <div className="beam-vertical left-[75%] opacity-20"></div>
            <div className="beam-vertical left-[90%] delay-150 duration-1000"></div>
        </div>
    </div>
  );
}
