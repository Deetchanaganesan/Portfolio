import { Box, Text, Flex, ListItem, List, Image } from "@chakra-ui/react";
import skills from "../data/skills.json";
import history from "../data/history.json";

export const Skills = () => {
  const firstThreeSkills = skills.slice(0, 3);
  const secondThreeSkills = skills.slice(3, 6);

  return (
    <Box
      id="Skills"
      background={"#060417"}
      height={{ base: "200vh", md: "70vh" }} // Adjust height for different screen sizes
      mb={{ base: "0", md: "-20px" }} // Adjust margin-bottom for different screen sizes
      fontFamily={"cursive"}
      width={{ base: "1700px", md: "1579px" }}
    >
      <Text
        color={"#F1F2F4"}
        pb={{ base: "20px", md: "20px" }} // Adjust padding-bottom for different screen sizes
        pt={{ base: "20px" }}
        fontSize={{ base: "40px", md: "30px" }}
        fontFamily={"sans-serif"}
      >
        Skills
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }} // Adjust direction for different screen sizes
        justify={{ base: "flex-start", md: "flex-start" }} // Adjust justification for different screen sizes
        align={{ base: "flex-start", md: "flex-start" }} // Adjust alignment for different screen sizes
        wrap="wrap"
      >
        {firstThreeSkills.map((skill, id) => (
          <Box
            key={id}
            mb={{ base: "2rem", md: "0" }}
            ml={{ base: "2rem", md: "3rem" }}
          >
            <Image src={skill.imageSrc} alt={skill.title} width={"120px"} />
            <Text color={"#DCDFE4"} fontSize={{ base: "30px", md: "20px" }}>
              {skill.title}
            </Text>
          </Box>
        ))}
        {secondThreeSkills.map((skill, id) => (
          <Box
            key={id}
            ml={{ base: "2rem" }}
            mx={{ md: "-8.8rem" }}
            mt={{ md: "180px" }}
          >
            <Image src={skill.imageSrc} alt={skill.title} width={"120px"} />
            <Text color={"#DCDFE4"} fontSize={{ base: "30px", md: "20px" }}>
              {skill.title}
            </Text>
          </Box>
        ))}
      </Flex>
      <List mt={{ base: "-60rem", md: "-310px" }}>
        {history.map((historyItem, id) => (
          <ListItem
            key={id}
            mb={{ base: "10px", md: "20px" }}
            ml={{ md: "800px" }}
            background={"#352C63"}
            borderRadius={"base"}
            width={{ base: "700px", md: "500px" }}
            height={"auto"}
            mx="auto"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "center", md: "flex-start" }}
              p={{ base: "15px", md: "20px" }}
            >
              <Image
                src={historyItem.imageSrc}
                alt={`${historyItem.organisation} Logo`}
                height={"70px"}
                width={"80px"}
                mb={{ base: "70px", md: "0" }}
                mr={{ base: "0", md: "30px" }}
              />
              <Box color={"#DCDFE4"} fontSize={{ base: "30px", md: "20px" }}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                {historyItem.experiences.map((experience, id) => (
                  <li key={id}>{experience}</li>
                ))}
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
