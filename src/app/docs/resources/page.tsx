import Pagination from '@/components/app/Pagination'

export default function Installation() {
  return (
    <>
      <h2 className="text-2xl font-bold m400:text-xl">Resources</h2>

      <div className="mt-8 font-bold leading-relaxed">
        <h3 className="mb-4 text-xl font-bold m400:text-lg">Icons</h3>

        <p>
          For brutalist icons (stars, etc.) there is many resources, but I
          particularly liked these two:{' '}
        </p>
        <ul>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://www.figma.com/community/file/1329709890799275191"
            >
              Brutalist Shape Elements Mega Pack
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://www.figma.com/community/file/1164388986951282764"
            >
              Brutalist Mega Pack
            </a>
          </li>
        </ul>

        <h3 className="mb-4 mt-8 text-xl font-bold m400:text-lg">Fonts</h3>

        <ul>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://fonts.google.com/specimen/Public+Sans"
            >
              Public Sans
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://fonts.google.com/specimen/DM+Sans"
            >
              DM Sans
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://fonts.google.com/specimen/Syne"
            >
              Syne
            </a>
          </li>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://fonts.google.com/specimen/Archivo"
            >
              Archivo
            </a>
          </li>
        </ul>
      </div>

      <Pagination
        prev={{
          name: 'Installation',
          path: '/docs/installation',
        }}
        next={{
          name: 'Accordion',
          path: '/docs/components/Accordion',
        }}
      />
    </>
  )
}
