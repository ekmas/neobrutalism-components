import Pagination from '@/components/app/Pagination'

export default function Introduction() {
  return (
    <div>
      <h2 className="text-2xl font-bold m400:text-xl">Introduction</h2>

      <div className="mt-8 font-bold leading-relaxed">
        Neobrutalism components is a collection of type-safe components written
        in React and Tailwind.
        <br />
        <br />
        Neobrutalism is a mix of regular brutalism in web design and more modern
        typography, illustration and animation standards. <br /> Neobrutalism
        refuses the usual components of UX-UI design and embraces uncomfortable
        design elements, and it is more fearless to use distinctive color
        palettes.
        <br />
        <br />I created this collection of components for people who want to
        learn more about neobrutalism style, and to help them get started with
        creating neobrutalism layouts.
      </div>

      <Pagination
        next={{
          name: 'Installation',
          path: '/docs/installation',
        }}
      />
    </div>
  )
}
