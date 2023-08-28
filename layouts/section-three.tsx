import EventList from "@/components/event-list";
import Container from "@/components/ui/container";

const SectionThree = async () => {
  return (
    <>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex flex-col pt-4 pb-6 mb-6 space-y-5">
          <h2 className="uppercase ml-2 text-lg "> Upcoming events</h2>
          <EventList />
        </div>
      </Container>
    </>
  );
};

export default SectionThree;
