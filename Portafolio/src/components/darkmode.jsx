import { Button, Flex , Icon} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function ToggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <>
      <Flex position='fixed' justify='flex-end' w='95%' zIndex='1' top='0'>
        <Button onClick={toggleColorMode}>
         {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      </>
    )
  }

export default ToggleColorMode