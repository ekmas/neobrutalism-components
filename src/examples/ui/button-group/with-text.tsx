import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"

export default function ButtonGroupWithTextDemo() {
  return (
    <ButtonGroup>
      <ButtonGroupText>Text</ButtonGroupText>
      <Button variant="neutral">Another Button</Button>
    </ButtonGroup>
  )
}
