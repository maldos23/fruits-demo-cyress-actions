import { useRef, useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

function App() {
  const [fruits, setFruits] = useState([]);
  const fruitInput = useRef();

  const handleAddFruit = (event) => {
    const fruit = fruitInput.current.value.trim().toLowerCase();
    if (fruit === "manzana") {
      setFruits([...fruits, { name: "🍎 Manzana", isHappy: true }]);
    } else {
      setFruits([...fruits, { name: `🤬 ${fruit}`, isHappy: false }]);
    }

    fruitInput.current.value = "";
  };

  return (
    <Box p="4">
      <VStack spacing="4">
        <Heading as="h1" size="lg" textAlign="center">
          Lista de frutas
        </Heading>
        <Input
          ref={fruitInput}
          placeholder="Agregar fruta..."
          variant="filled"
          size="md"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddFruit(event);
            }
          }}
        />
        <HStack>
          <Button colorScheme="green" onClick={handleAddFruit}>
            Agregar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              setFruits([]);
            }}
          >
            Borrar todo
          </Button>
        </HStack>
        {fruits.length === 0 ? (
          <Text>No hay frutas</Text>
        ) : (
          <VStack id="fruit-list" align="start" spacing="2">
            {fruits.map((fruit, index) => (
              <Box key={index} fontSize="xl">
                {fruit.isHappy ? "😊" : "🤬"} {fruit.name}
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
}

export default App;
