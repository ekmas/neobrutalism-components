import { AlertCircleIcon, FileTextIcon, UploadIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

export default function AttachmentStatesDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Attachment state="idle" className="w-full">
        <AttachmentMedia>
          <UploadIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Drop a file</AttachmentTitle>
          <AttachmentDescription>Waiting for a file</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>
          <AttachmentDescription>Uploading · 45%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="error" className="w-full">
        <AttachmentMedia>
          <AlertCircleIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>large-video.mp4</AttachmentTitle>
          <AttachmentDescription>File is too large</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="done" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>notes.md</AttachmentTitle>
          <AttachmentDescription>Markdown · 12 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}
