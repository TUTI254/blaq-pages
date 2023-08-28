import { Events } from "@/lib/events";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const EventList = () => {
  const events = Events.map((event) => ({
    date: event.date,
    month: event.month,
    title: event.title,
    location: event.location,
    venue: event.venue,
  }));
  return (
    <div className="space-y-5 lg:space-y-3 md:space-y-3">
      {events.map((event) => (
        <div
          key={event.date}
          className="uppercase bg-list w-full lg:w-full md:w-full h-32 md:h-28 lg:h-28 flex flex-col md:flex-row lg:flex-row  md:items-center lg:items-center md:justify-between lg:justify-between"
        >
          <div className="flex flex-row justify-between mt-3">
            <div className="flex-col ml-6">
              <h2 className="text-2xl md:text-4xl lg:text-4xl">{event.date}</h2>
              <p className={`${inter.className} text-sm`}>{event.month}</p>
            </div>
            <div className="flex-col ml-9 mr-6">
              <h2 className="text-2xl md:text-4xl lg:text-4xl ">
                {event.title}
              </h2>
              <p className={`${inter.className} text-sm`}>{event.location}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mx-6 pt-2 md:flex-col lg:flex-col lg:mr-4">
            <p className={`${inter.className} text-sm mb-2`}>{event.venue}</p>
            <span className="px-4 py-2 bg-menu ">Get your tickets</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
