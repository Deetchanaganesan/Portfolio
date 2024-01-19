import { Flex, Image, ListItem, UnorderedList, Button } from "@chakra-ui/react";

export const Navbar = () => {
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1a27YRNQ7mdB874zZa-V25BKbOfGOhV8H/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      background="#060417"
      fontSize={{
        base: "40px",
        sm: "30px",
        md: "30px",
        lg: "30px",
        xl: "30px",
      }}
      height={{ base: "80px", md: "100px" }}
      width={{ base: "1700px", md: "1579px" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image
        src="./assests/basic/logo.png"
        alt="Deetch"
        height={{
          base: "70px",
          sm: "120px",
          md: "150px",
          lg: "150px",
          xl: "150px",
        }}
        mb={{ base: "4", md: "0" }}
      />
      <UnorderedList
        color={"#F1F2F4"}
        display={{ base: "flex", md: "flex" }}
        listStyleType="none"
        mb={{ base: "4", md: "0" }}
        mr={{ base: "0", md: "-500px" }}
        gap={{ base: "4", md: "24" }}
      >
        <a href="#Content">
          <ListItem
            _hover={{
              bg: "#206A83",
              transform: "scale(1.1)",
              borderRadius: "base",
              cursor: "pointer",
            }}
          >
            Home
          </ListItem>
        </a>
        <a href="#Skills">
          <ListItem
            _hover={{
              bg: "#AE4787",
              transform: "scale(1.1)",
              borderRadius: "base",
              cursor: "pointer",
            }}
          >
            Skills
          </ListItem>
        </a>
        <a href="#Projects">
          <ListItem
            _hover={{
              bg: "#09326C",
              transform: "scale(1.1)",
              borderRadius: "base",
              cursor: "pointer",
            }}
          >
            Projects
          </ListItem>
        </a>
        <a href="#Contact">
          <ListItem
            _hover={{
              bg: "#7F5F01",
              transform: "scale(1.1)",
              borderRadius: "base",
              cursor: "pointer",
            }}
          >
            Contact
          </ListItem>
        </a>
      </UnorderedList>

      <Button
        variant="solid"
        size={{ base: "lg", sm: "md", md: "lg", lg: "lg", xl: "lg" }}
        colorScheme="purple"
        onClick={handleDownloadResume}
      >
        Resume
      </Button>
    </Flex>
  );
};
