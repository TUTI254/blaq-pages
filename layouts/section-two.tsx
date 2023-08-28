import SocialSection from "@/components/social-section";
import Container from "@/components/ui/container";

const SectionTwo = async () => {
  return (
    <>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row lg:flex-row pt-2 md:items-center lg:items-center md:justify-end lg:justify-end">
          <SocialSection />
        </div>
      </Container>
    </>
  );
};

export default SectionTwo;
