import { XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

export default function AttachmentImageDemo() {
  return (
    <Attachment className="w-full max-w-xs">
      <AttachmentMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&q=80"
          alt="A cat"
        />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>cat.jpg</AttachmentTitle>
        <AttachmentDescription>JPG · 340 KB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  )
}
