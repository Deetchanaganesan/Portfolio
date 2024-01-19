import { Stack, Text, Box } from "@chakra-ui/react";
import { GitCompareArrows, Mail, Phone } from "lucide-react";
import Form from "./Form";

export const Contact = () => {
  return (
    <Stack
      id="Contact"
      height={{ base: "auto", md: "60vh" }}
      background={"#060417"}
      width={{ base: "1700px", md: "1579px" }}
    >
      <Text
        fontSize={{ base: "30px", md: "30px" }}
        fontFamily={"sans-serif"}
        color={"#F1F2F4"}
      >
        Contact
      </Text>
      <Box ml={{ base: "20px", md: "80px" }} mt={{ base: "30px", md: "30px" }}>
        <Mail size={"40px"} color="#8590A2" />
      </Box>
      <Text
        color={"#DCDFE4"}
        fontSize={{ base: "20px", md: "20px" }}
        fontFamily={"cursive"}
        mr={{ base: "1260px", md: "1000px" }}
        mt={{ base: "-40px", md: "-40px" }}
      >
        deetchanaganesan09@gmail.com
      </Text>
      <Box ml={{ base: "20px", md: "80px" }} mt={{ base: "10px", md: "20px" }}>
        <GitCompareArrows size={"40px"} color="#8590A2" />
      </Box>
      <Text
        color={"#DCDFE4"}
        fontSize={{ base: "20px", md: "20px" }}
        fontFamily={"cursive"}
        mr={{ base: "1200px", md: "940px" }}
        mt={{ base: "-40px", md: "-40px" }}
      >
        https://github.com/Deetchanaganesan
      </Text>
      <Box ml={{ base: "20px", md: "80px" }} mt={{ base: "10px", md: "20px" }}>
        <Phone size={"40px"} color="#8590A2" />
      </Box>
      <Text
        color={"#DCDFE4"}
        fontSize={{ base: "20px", md: "20px" }}
        fontFamily={"cursive"}
        mr={{ base: "1430px", md: "1180px" }}
        mt={{ base: "-40px", md: "-40px" }}
      >
        9789582050
      </Text>
      <Form />
    </Stack>
  );
};
