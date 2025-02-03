import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/ekmas.png" />
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  )
}
