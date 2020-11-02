import { Button, Flex, useColorMode } from "theme-ui";

export default function Home() {
    const [colorMode, setColorMode] = useColorMode();
    const handleChange = () => {
        setColorMode(colorMode === "default" ? "light" : "default");
    };
    return (
        <Flex>
            index
            <Button onClick={handleChange}>
                Toggle {colorMode === "default" ? "Light" : "Dark"}
            </Button>
        </Flex>
    );
}
