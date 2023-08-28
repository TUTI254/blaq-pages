import SocialSection from "@/components/social-section";
import Container from "@/components/ui/container";

const SectionTwo = async () => {
  return (
    <>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 ml-2  flex flex-col-reverse md:flex-row lg:flex-row  md:justify-between lg:justify-between ">
          <h2 className="uppercase  text-lg mt-3 lg:mt-0 md:mt-0 ">
            Upcoming events
          </h2>
          <SocialSection />
        </div>
      </Container>
    </>
  );
};

export default SectionTwo;
