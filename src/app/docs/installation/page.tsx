import Pagination from '@/components/app/Pagination'

export default function Installation() {
  return (
    <>
      <h2 className="text-2xl font-bold m400:text-xl">Installation</h2>

      <div className="mt-8 font-bold leading-relaxed">
        These React components use{' '}
        <a
          className="mx-0.5 underline"
          target="_blank"
          href="https://tailwindcss.com/"
        >
          tailwind
        </a>{' '}
        for styling and{' '}
        <a
          className="mx-0.5 underline"
          target="_blank"
          href="https://react-icons.github.io/react-icons/"
        >
          react-icons
        </a>{' '}
        for icons (feel free to use any other icons), so make sure you got them
        installed.
        <br />
        <br />
        Now choose any component you find useful, copy it to your project and
        adjust it so it fulfills your needs.
        <br />
        <br />
        Keep in mind that these are YOUR components. It&apos;s on you to make
        them more reusable and accessible. I created this to help you get
        started with neobrutalism.{' '}
        <a
          href="https://www.youtube.com/watch?v=eXRlVpw1SIQ&ab_channel=Joshtriedcoding"
          target="_blank"
          className="mx-0.5 underline"
        >
          This video
        </a>{' '}
        can help you with creating more reusable components.
      </div>

      <Pagination
        prev={{
          name: 'Introduction',
          path: '/docs',
        }}
        next={{
          name: 'Accordion',
          path: '/docs/components/Accordion',
        }}
      />
    </>
  )
}
