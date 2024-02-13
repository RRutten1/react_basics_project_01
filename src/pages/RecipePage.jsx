import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Badge,
  Button,
  List,
  ListItem,
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

  const filteredTotalNutrients = {
    ENERC_KCAL: totalNutrients.ENERC_KCAL,
    PROCNT: totalNutrients.PROCNT,
    FAT: totalNutrients.FAT,
    CHOCDF: totalNutrients.CHOCDF,
    CHOLE: totalNutrients.CHOLE,
    NA: totalNutrients.NA,
  };

  return (
    <Center flexDir="column" mt={8} bg="blue.50" p={4} borderRadius="xl">
      <Heading pb={8}>{label}</Heading>
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
        <Box mt={4}>
          <Text fontWeight="bold">Ingredients:</Text>
          <List styleType="disc" mt={2} pl={4}>
            {ingredientLines.map((ingredient, index) => (
              <ListItem key={index}>{ingredient}</ListItem>
            ))}
          </List>
        </Box>
        <Text mt={4}>
          <strong>Servings:</strong> {servings}
        </Text>
        <Box mt={4}>
          <Text fontWeight="bold">
            Total Nutrients (Energy in kcal, protein, fat, carbs, cholesterol,
            sodium):
          </Text>
          <List styleType="none" mt={2} pl={4}>
            {Object.entries(filteredTotalNutrients).map(
              (
                [key, value],
                index // eslint-disable-line no-unused-vars
              ) => (
                <ListItem key={index}>
                  {value.label}: {value.quantity.toFixed(2)} {value.unit}
                </ListItem>
              )
            )}
          </List>
        </Box>
        <Center mt={6}>
          <Button onClick={onBackButtonClick}>Back to Recipes</Button>
        </Center>
      </Box>
    </Center>
  );
};
