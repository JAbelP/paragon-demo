import React from "react";

// Child component
function TimeButton({ time }: { time: string }) {
  return (
    <div className="p-3 shadow-sm shadow-gray-400 cursor-pointer">
      <div>{time}</div>
    </div>
  );
}

interface ShowtimeListingProps {
  titleOfMovie: string;
  Rating: string;
  filmRunTime: string;
  seating: {
    seatName: string;
    times: string[];
  }[];
}
// Parent component
function ShowtimeListing({
  titleOfMovie,
  Rating,
  filmRunTime,
  seating,
}: ShowtimeListingProps) {
  debugger;
  console.log({ titleOfMovie });
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <p> {titleOfMovie}</p>
        <p>{Rating}</p>
        <p>{filmRunTime}</p>
      </div>
      {seating.map((seatInfo) => {
        return (
          <div key={seatInfo.seatName} className=" border-[1px] border-gray-500 p-3 mb-3">
            <div>
              <p className="mb-3">{seatInfo.seatName}</p>
            </div>
            <div className="flex flex-row gap-x-2">
              {seatInfo.times.map((movieTime) => {
                return <TimeButton key={movieTime} time={movieTime} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowtimeListing;
