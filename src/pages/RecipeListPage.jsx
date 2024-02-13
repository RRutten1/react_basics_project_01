import {
  Center,
  Heading,
  Text,
  Box,
  Image,
  Badge,
  Grid,
  Input,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipePage } from "./RecipePage";

export const RecipeListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = data.hits.filter((hit) => {
    // Filter based on recipe name
    const matchName = hit.recipe.label
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // Filter based on health labels
    const matchHealthLabels = hit.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchName || matchHealthLabels;
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle back button click
  const handleBackButtonClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <Center h="100%" flexDir="column" bg="blue.50">
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBackButtonClick={handleBackButtonClick}
        />
      ) : (
        <>
          <Heading mt={12} mb={8} fontSize="5xl">
            Winc restaurant recipes
          </Heading>
          <Input
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search by name or health labels"
            maxW="700px"
            h="50px"
            mt={4}
            mb={46}
            borderWidth="1px"
            borderColor="gray.600"
            color="gray.800"
            _placeholder={{ color: "gray.800" }}
          />

          {searchQuery && (
            <Text mt={2} mb={4} fontSize="2xl">
              {filteredRecipes.length === 0
                ? "No items found"
                : `Found ${filteredRecipes.length} item(s)`}
            </Text>
          )}
          <Grid
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={4}
            mt={4}
          >
            {filteredRecipes.map((hit, index) => (
              <Box
                key={hit.recipe.label}
                onClick={() => handleRecipeSelect(hit.recipe)}
                cursor="pointer"
                flex="1"
                minHeight="300px"
                padding="10px"
              >
                <Box
                  boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
                  p={4}
                  borderRadius="xl"
                  overflow="hidden"
                  h="100%"
                  bg="blue.100"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text fontWeight="bold" fontSize="xl" p="2px" mb="10px">
                    {hit.recipe.label}
                  </Text>
                  <Box
                    h="150px"
                    maxW="100%"
                    overflow="hidden"
                    borderRadius="md"
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Image
                      src={hit.recipe.image}
                      alt={hit.recipe.label}
                      w="100%"
                      h="auto"
                      objectFit="cover"
                    />
                  </Box>
                  <Text mt={4}>
                    <strong>Diet Label:</strong>{" "}
                    {hit.recipe.dietLabels.join(", ") || "Not specified"}
                  </Text>
                  <Text>
                    <strong>Cautions:</strong>{" "}
                    {hit.recipe.cautions.join(", ") || "None"}
                  </Text>
                  <Text>
                    <strong>Meal Type:</strong>{" "}
                    {hit.recipe.mealType || "Not specified"}
                  </Text>
                  <Text>
                    <strong>Dish Type:</strong>{" "}
                    {hit.recipe.dishType || "Not specified"}
                  </Text>
                  <Box mt={2}>
                    <Text>
                      <strong>Health Labels:</strong>
                    </Text>
                    <Box>
                      {hit.recipe.healthLabels.map((label) => (
                        <Badge key={index} colorScheme="green" mr={2}>
                          {label}
                        </Badge>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </>
      )}
    </Center>
  );
};
