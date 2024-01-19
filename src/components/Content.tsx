import { Text, Image, Flex, Box } from "@chakra-ui/react";

export const Content = () => {
  return (
    <Flex
      id="Content"
      background={"#060417"}
      direction={"column"}
      minH={{ base: "100vh", md: "90vh" }}
      width={{ base: "1700px", md: "1579px" }}
    >
      <Text
        as="b"
        fontSize={{ base: "40px", md: "70px" }}
        fontFamily={"sans-serif"}
        color={"whitesmoke"}
        pr={{ base: "60%", md: "60%" }}
        mt={{ base: "200px", md: "140px", lg: "90px" }}
        whiteSpace={"balance"}
      >
        <span style={{ color: "#fc466b" }}>Crafting digital </span>
        <span style={{ color: "#2de4fd" }}>wonders one</span>
        <span style={{ color: "#6a4294" }}> line at a time!</span>
      </Text>
      <Text
        fontSize={{ base: "20px", md: "20px" }}
        fontFamily={"cursive"}
        color={"#DCDFE4"}
        pr={{ base: "60%", md: "60%" }}
        mt="1rem"
      >
        Ave All, I'm Deetchana, Passionate FrontEnd Developer
      </Text>
      <Box
        position="relative"
        left={{ base: "50%", md: "60%" }}
        width={{ base: "25%", md: "25%" }}
        mt={{ base: "-12rem", md: "-25rem" }}
      >
        <Image
          src="./assests/basic/me.jpeg"
          alt="Deetch"
          width={{ base: "70%", md: "100%" }}
          height="auto"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};
