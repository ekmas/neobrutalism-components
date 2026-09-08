import { FileTextIcon } from "lucide-react"

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

export default function AttachmentVerticalDemo() {
  return (
    <div className="flex gap-4">
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&q=80"
            alt="A cat"
          />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>cat.jpg</AttachmentTitle>
          <AttachmentDescription>340 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>report.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
