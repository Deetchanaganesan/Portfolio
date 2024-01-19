import {
  Card,
  Text,
  Image,
  List,
  Link,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <Card
      maxW={{ base: "70%", md: "30%" }}
      maxH="md"
      borderColor="pink"
      mt={{ base: "-20px", md: "-120px" }}
      mx={{ base: "10px", md: "40px" }}
      background="#F9FBE6"
    >
      <CardHeader fontSize={{ base: "30px", md: "20px" }} fontFamily="cursive">
        {title}
      </CardHeader>
      <CardBody>
        <Image
          src={imageSrc}
          alt={`Image of ${title}`}
          height={{ base: "120px", md: "130px" }}
          width={{ base: "70%", md: "60%" }}
          borderRadius="base"
          ml={{ base: "50px", md: "70px" }}
        />
        <Stack mt={{ base: "4", md: "6" }} ml={{ base: "0", md: "3" }}>
          <Text
            fontSize={{ base: "20px", md: "20px" }}
            fontFamily="cursive"
            color="#6b0438"
          >
            {description}
          </Text>
          <List
            fontSize={{ base: "20px", md: "18px" }}
            fontFamily="cursive"
            color="#068b82"
          >
            {skills.map((skill, id) => (
              <li key={id}>{skill}</li>
            ))}
          </List>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link
          href={demo}
          isExternal
          fontFamily="cursive"
          color="#760587"
          mt={{ md: "-20px" }}
        >
          Project Link <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          href={source}
          isExternal
          fontFamily="cursive"
          color="#760587"
          mt={{ md: "-20px" }}
          ml={{ base: "200px", md: "190px" }}
        >
          Source <ExternalLinkIcon mx="2px" />
        </Link>
      </CardFooter>
    </Card>
  );
};
