import { SquarePenIcon } from "lucide-react"

import { Button } from "../ui/button"

export default function EditThisPage({
  markdownPath,
}: {
  markdownPath: string
}) {
  const repoDocsUrl =
    "https://github.com/ekmas/neobrutalism-components/tree/main/apps/docs/src/markdown" +
    markdownPath

  return (
    <Button
      className="bg-white not-prose px-5 py-2 m400:px-3.5 h-[unset] m400:text-xs font-base dark:text-darkText gap-2 mt-12 dark:bg-secondaryBlack"
      variant="noShadow"
      asChild
    >
      <a target="_blank" href={repoDocsUrl}>
        <SquarePenIcon className="w-4 h-4" />
        Edit this page
      </a>
    </Button>
  )
}
