import { Flex, Text, Box } from "@chakra-ui/react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box
      id="Projects"
      background={"#060417"}
      height={"85vh"}
      width={{ base: "1700px", md: "1579px" }}
    >
      <Text color={"#F1F2F4"} fontSize={{ base: "30px", md: "30px" }}>
        Projects
      </Text>
      <Flex
        background={"#060417"}
        height={"90vh"}
        direction="row"
        justify="space-between"
        align="center"
      >
        <>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </>
      </Flex>
    </Box>
  );
};
