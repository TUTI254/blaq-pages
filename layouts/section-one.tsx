import BannerImage from "@/components/banner-image";
import Container from "@/components/ui/container";

const SectionOne = async () => {
  return (
    <>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex flex-col pt-4 pb-6 mb-3">
          <BannerImage />
        </div>
      </Container>
    </>
  );
};

export default SectionOne;
