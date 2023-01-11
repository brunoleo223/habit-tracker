import { Box } from "./BoxContainer.style";

type BoxContainerProps = {
    children: JSX.Element | JSX.Element[],
  };

export default function BoxContainer( { children }: BoxContainerProps ) {
  return (
    <Box>
        {children}
    </Box>
  )
}
