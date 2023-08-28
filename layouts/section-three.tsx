import EventList from "@/components/event-list";
import Container from "@/components/ui/container";

const SectionThree = async () => {
  return (
    <>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex flex-col pt-4 pb-6 mb-6 mt-6">
          <EventList />
        </div>
      </Container>
    </>
  );
};

export default SectionThree;
