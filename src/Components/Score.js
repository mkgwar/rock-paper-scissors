const Score = ({ score }) => {
  return (
    <div className="flex justify-between items-center border-2 border-Header-Outline p-[2vh] absolute top-[2vh] left-[2vh] right-[2vh] rounded-lg">
      <div className="text-white leading-[2.5vh] text-[2.5vh] font-black">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </div>
      <div className="bg-white p-[3vh] py-[1vh] flex flex-col items-center justify-center">
        <div className="text-Score-Text text-[1.5vh]">SCORE</div>
        <div className="text-Dark-Text text-[4.5vh] w-full text-center">
          {score}
        </div>
      </div>
    </div>
  );
};

export default Score;
