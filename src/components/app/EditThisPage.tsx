import { SquarePenIcon } from 'lucide-react'

import { Button } from '../ui/button'

export default function EditThisPage({
  markdownPath,
}: {
  markdownPath: string
}) {
  const repoDocsUrl =
    'https://github.com/ekmas/neobrutalism-components/tree/main/src/markdown' +
    markdownPath

  return (
    <Button
      className="bg-white not-prose font-base dark:text-darkText gap-2 mt-12 dark:bg-secondaryBlack"
      variant="noShadow"
      asChild
    >
      <a target="_blank" href={repoDocsUrl}>
        <SquarePenIcon className="w-5 h-5" />
        Edit this page
      </a>
    </Button>
  )
}
