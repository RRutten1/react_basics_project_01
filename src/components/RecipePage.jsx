import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBackButtonClick }) => {
  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredientLines,
    yield: servings,
    totalNutrients,
  } = recipe;

  return (
    <Center flexDir="column" mt={8} bg="blue.50" p={4} borderRadius="xl">
      <Heading p={10}>{label}</Heading>
      <Box
        boxShadow="xl"
        p={4}
        borderRadius="md"
        overflow="hidden"
        maxW="600px"
        bg="blue.100"
      >
        <Image p={3} borderRadius="20px" src={image} alt={label} />
        <Text>
          <strong>Meal Type:</strong> {mealType}
        </Text>
        <Text>
          <strong>Dish Type:</strong> {dishType}
        </Text>
        <Text>
          <strong>Total Cooking Time:</strong> {totalTime}
        </Text>
        <Text>
          <strong>Diet Label:</strong>{" "}
          {dietLabels.join(", ") || "Not specified"}
        </Text>
        <Box mt={2}>
          <Text>
            <strong>Health Labels:</strong>
          </Text>
          <Box>
            {healthLabels.map((label, index) => (
              <Badge key={index} colorScheme="green" mr={2}>
                {label}
              </Badge>
            ))}
          </Box>
        </Box>
        <Text mt={2}>
          <strong>Cautions:</strong> {cautions.join(", ") || "None"}
        </Text>
        <Text mt={2}>
          <strong>Ingredients:</strong>
        </Text>
        <ul>
          {ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Text mt={2}>
          <strong>Servings:</strong> {servings}
        </Text>
        <Text mt={2}>
          <strong>Total Nutrients:</strong>
        </Text>
        <ul>
          {Object.entries(totalNutrients).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value.label}: {value.quantity.toFixed(2)}{" "}
              {value.unit}
            </li>
          ))}
        </ul>
        <Button aligSelf="center" mt={4} onClick={onBackButtonClick}>
          Back to Recipes
        </Button>
      </Box>
    </Center>
  );
};
