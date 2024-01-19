import Header from "@/app/components/header";
import MobileMenu from "@/app/components/mobileMenu";
import LocationEyeCatch from "@/app/components/locationEyeCatch";
import showTimeListing from "@/app/components/showtimeListing";
import ShowtimeListing from "@/app/components/showtimeListing";
import eyeCatch from "@/public/eyeCatch.jpg"
import Image from "next/image";
export default function Home() {
  // Function to format the current date

  const getFormattedDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const currentDate = new Date();

    // Format the date as "THURSDAY, JANUARY 18TH, 2024"
    const formattedDate = new Intl.DateTimeFormat("en-US", options)
      .formatToParts(currentDate)
      .map((part) => {
        if (part.type === "weekday") {
          return part.value.toUpperCase();
        }
        if (part.type === "month") {
          return part.value.toUpperCase();
        }
        if (
          part.type === "day" &&
          parseInt(part.value) >= 10 &&
          parseInt(part.value) <= 20
        ) {
          return `${part.value}TH`;
        }
        return part.value;
      })
      .join(" ");

    return formattedDate;
  };
  type Movie = {
    name: string;
    rating: string;
    filmRunTime: string;
    seating: {
      seatName: string;
      times: string[];
    }[];
  };
  
  const showTimeListing: Movie[] = [
    {
      name: "The Beekeeper",
      rating: "R",
      filmRunTime: "1 h 45 min.",
      seating: [
        {
          seatName: "Lux Box Dine-in Loveseat VIP Recliners",
          times: ["11:00 AM", "3:00 AM", "7:15 AM", "10:00 PM"],
        },
        {
          seatName: "Reserved Recliners",
          times: ["11:00 AM", "3:00 AM", "7:15 AM", "10:00 PM"],
        },
      ],
    },
    {
      name: "Book of Clarance",
      rating: "PG-13",
      filmRunTime: "2 hr. 9 min.",
      seating: [
        {
          seatName: "Lux Box Dine-in Loveseat VIP Recliners",
          times: ["11:00 AM", "3:00 AM", "7:15 AM", "10:00 PM"],
        },
        {
          seatName: "Reserved Recliners",
          times: ["11:00 AM", "3:00 AM", "7:15 AM", "10:00 PM"],
        },
      ],
    },
  ];
  
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <MobileMenu />
      <LocationEyeCatch />
      <div className="bg-gray-500 h-[2px] w-11/12 mb-8" />
      <Image src={eyeCatch} alt="Food Eyecatch" className="p-2" />
      <div className="bg-gray-500 h-[2px] w-11/12 mb-8" />
      <div className="bg-gray-500 h-[2px] w-11/12 mb-8" />
      <div className="bg-gray-500 h-[2px] w-11/12 mb-8" />
      <div className="uppercase w-11/12 font-extrabold text-neutral-600">
        {" "}
        showtimes for {getFormattedDate()}{" "}
      </div>
      {showTimeListing.map((film: Movie) => {
        return (
          <div key={film.name}>
            <ShowtimeListing
              titleOfMovie={film.name}
              Rating={film.rating}
              filmRunTime={film.filmRunTime}
              seating={film.seating}
            />
          </div>
        );
      })}
      {/* Footer Behavior */}
      {/*  */}
      <div className="flex flex-col">
        <p className="font-extrabold text-justify uppercase mt-3">Location</p>
        <p className="font-bold">Fenton + Axis15 Extreme - NOW OPEN</p>
        <p>21 Fenton Main Street,</p>
        Cary, NC 27511
      </div>
      {/* Theater Info */}
      <div className="p-3">
        <p className="uppercase">Theater info</p>
        <ul className="list-[circle] pl-5">
          <li>
            Axis15 Extreme Theater with 4k Laser Projection and Dolby Atmos
            Immersive Sound
          </li>
          <li>
            VIP Lux Box Dine-In Heated, Zero-Gravity Seats with Unique QR codes
            for Dine-In Service
          </li>
          <li>
            Corporate meeting accommodations with wireless mic and on screen
            projection capabilities
          </li>
          <li>
            Auditoriums available for Private Rentals and Screenings,
            Fundraisers, Gaming Parties, Birthday Parties
          </li>
          <li>
            The Agency Bar and Social full service on site indoor outdoor
            restaurant and bar
          </li>
          <li>
            Movie-Themed Trivia Nights every Monday and Wine Wednesdays 1/2
            price bottles all day every Wednesday, at The Agency Bar & Social
          </li>
        </ul>
      </div>
    </div>
  );
}
