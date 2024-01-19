import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    alert("Form Submitted!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box color={"white"}>
      <FormControl mt={{ base: "-120px", md: "-180px" }}>
        <form onSubmit={handleSubmit}>
          <FormLabel ml={"870px"}>
            <Input
              type="text"
              width={"300px"}
              size={"lg"}
              onChange={handleChange}
              name="firstName"
              placeholder="First Name"
              isRequired
              value={formData.firstName}
            />
          </FormLabel>
          <FormLabel ml={"1190px"} mt={"-55px"}>
            <Input
              type="text"
              width={"300px"}
              size={"lg"}
              onChange={handleChange}
              name="lastName"
              placeholder="Last Name"
              isRequired
              value={formData.lastName}
            />
          </FormLabel>
          <FormLabel mt={"20px"} ml={"870px"}>
            <Input
              type="email"
              width={"620px"}
              size={"lg"}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              isRequired
              value={formData.email}
            />
          </FormLabel>
          <FormLabel ml={"870px"} mt={"20px"}>
            <Input
              type="text"
              height={"120px"}
              width={"620px"}
              size={"lg"}
              onChange={handleChange}
              name="message"
              placeholder="Message"
              value={formData.message}
            />
          </FormLabel>

          <Button
            type="submit"
            variant="solid"
            size="lg"
            colorScheme="red"
            mt={"20px"}
            ml={"800px"}
          >
            Submit
          </Button>
        </form>
      </FormControl>
    </Box>
  );
};

export default Form;
