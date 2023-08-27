import NewsLetter from "@/components/news-letter";
import Container from "@/components/ui/container";

const SectionFour = async () => {
  return (
    <>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex flex-col pt-6 justify-center mt-14">
          <h2 className="uppercase stext-lg md:text-2xl lg:text-2xl text-center">
            {" "}
            sign up with your email adress to recieve
          </h2>
          <h2 className="uppercase text-lg md:text-2xl lg:text-2xl text-center">
            news and updates
          </h2>
          <NewsLetter />
        </div>
      </Container>
    </>
  );
};

export default SectionFour;
