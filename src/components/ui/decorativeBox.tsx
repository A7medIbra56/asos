import { Box } from "@chakra-ui/react";

const DecorativeBox = ({ children, height }: { children: React.ReactNode; height?: string }) => {
  return (
    <Box 
      bg="#2d2d2d" // Light background color
      p={4} 
      borderRadius="0" 
      height={height || "auto"} 
    >
      {children}
    </Box>
  );
};

export default DecorativeBox;
